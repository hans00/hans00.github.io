---
title: 我的 home lab
category: server
description: 我的自管伺服器的架構與解決辦法
---

# 實體機架構

<vue-mermaid code="
graph LR
    isp(ISP) --- router
    router((路由器)) --- storage & vm-server & home
    home[Home Group]
    subgraph DMZ
        storage[儲存] == Fiber ===
        vm-server[VM]
    end
"></vue-mermaid>

## 路由器

我採用了 RouterOS，因為可以使用相對低的成本做到專業路由器的設定。

## 儲存

在眾多專為儲存設計的作業系統中我最終採用 DIY 建置的方案。

- Debian
    - XanMod kernel LTS
    - OpenZFS
    - iSCSI: LIO
    - Cockpit
        - [ZFS Manager](https://github.com/optimans/cockpit-zfs-manager)

原本是想選擇 FreeNAS，畢竟 iXsystems 在 FreeNAS 上做了不少優化。但 FreeBSD 的社群正在萎縮、維護速度趕不上 Linux。

使用 XanMod kernel 是因為在加上 performance profile 之後擁有更佳的性能。
而 iSCSI 採用 LIO 是因為它是執行在 kernel 內、支援各種協定，且它可以直接與 Proxmox VE 整合 (ZFS over iSCSI)。

### OpenZFS

非常強大，支援快照、區塊壓縮、RAM cache (ARC)、SSD cache (L2ARC) 等功能，且自有的 zpool 管理方式非常方便。

### Cockpit

近期社群非常活躍的 Web 管理介面專案，它可以很容易的安裝第三方插件。

## VM

我選擇了 Proxmox VE，因為它是開源的而且有非常方便管理的 Web UI。
並且由於該主機是自組的、沒有辦法放那麼多硬碟，所以我把儲存分離出去，為了保障資料傳輸還設定了直連光纖。

所有的應用服務都是在這台上面開 LXC 或 VM 來解決。

# 應用層架構

<vue-mermaid code="
graph TB
    envoy -- WAF --> iis & http1 & http2
    envoy --> other-services
    rdp-proxy --> rdp & vnc
    subgraph front-vm [前端伺服器 VM]
        envoy(envoy proxy)
        rdp-proxy(RDP proxy)
    end
    subgraph windows-vm [Windows VM]
        rdp(RDP)
        iis(IIS)
    end
    subgraph linux-1 [Linux VM 1]
        vnc(VNC)
        http1(HTTP)
    end
    subgraph linux-2 [Linux VM 2]
        http2(HTTP)
    end
    subgraph linux-3 [Linux VM 3]
        other-services(Other services)
    end
"></vue-mermaid>

## 前端伺服器

採用類似雲端的管理方式，由前端伺服器統一對外。

### envoy proxy

envoy proxy 是 CNCF 的一個專案，就是專門進行高效能代理服務用的伺服器。

#### ModSecurity filter

為了安全性，我在 HTTP 服務加上 ModSecurity filter 作為 WAF。

這個模組雖然有找到現成的，但似乎有段時間沒維護且留下了一些 TODO code，所以我花了時間整理了一下。envoy proxy 內部程式碼似乎沒有文件，於是我是一層一層追蹤來找到正確寫法的。

### RDP proxy

我找到了 [redemption](https://github.com/wallix/redemption) 這個專案可以在 Linux 上建置統一對外用的 proxy，所以我選用這個並依他的 `passthrough.py` 範本加寫了限制連線範圍的規則。

#### auto ban

在 `passthrough.py` 這邊辨識連線目標為範圍外時會記錄下來，再透過 fail2ban 進行封鎖。
