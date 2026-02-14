---
title: HomeLab v2.0 架構大遷移：告別存算分離，擁抱 Ubuntu + ZFS + AI Copilot 全能單機
category: server
date: 2026-02-14
description: 告別存算分離，擁抱 Ubuntu + ZFS + Cockpit + AI Copilot 的全能單機 HomeLab v2.0 架構分享。
---

# 前言：為什麼要重構？

熟悉我的朋友都知道，我的上一代 HomeLab (v1) 是一個經典的「存算分離」架構。那時候為了追求所謂的 Enterprise-grade（企業級）配置，我把儲存交給了 TrueNAS，運算則由 Proxmox VE (PVE) 負責，兩者透過網路協定連接。

看起來很美好，對吧？但隨著時間推移，現實的「維護成本」狠狠地打醒了我：

1.  **功耗焦慮**：為了這個分離架構，我必須維持多台機器運作。看著電費單，我不禁懷疑：對於現在的負載需求，真的需要兩台機器空轉嗎？
2.  **維護黑洞**：PVE 的 FreeNAS (TrueNAS) 儲存模組近年來維護狀況不佳，每次升級都像是在走鋼索，一旦 connection 出問題，整個 VM Cluster 就癱瘓。

於是，我決定進行一場徹底的「斷捨離」。我的需求已經變了，不再需要多機備援的複雜度。是時候回歸本質：**高效、單機、智慧化**。

歡迎來到我的 **HomeLab v2.0**。

# 核心思想一：化繁為簡，Hybrid All-in-One

v2 的首要目標只有一個：**存算一體 (Hybrid Storage/VM/Container)**。

我拋棄了專用的儲存 OS 和虛擬化 OS，轉而採用通用性最強的 **Ubuntu** 作為基底。這不僅大幅降低了硬體需求和功耗，更讓我擁有對系統底層由上到下完整的控制權。不需要再煩惱跨機器的 iSCSI 或 NFS 延遲，所有的 I/O 都在本機內完成，速度飛快且穩定。

# 核心思想二：Ubuntu + ZFS + Cockpit 的黃金三角

在作業系統層，我選擇了 **Ubuntu Server** 搭配 **ZFS**。
ZFS 的強大無須多言（Snapshot, Compression, ARC），在 Ubuntu 上它的支援度極高。

而在管理介面方面，我沒有選擇厚重的 Web 介面，而是選擇了 **Cockpit**。
Cockpit 非常輕量，它忠實地反應了 Linux 系統的狀態，不會像某些管理面板一樣在背後魔改系統設定檔。這讓我在享受 Web UI 便利的同時，依然能保留隨時切回 Terminal 手動操作的彈性。

# 核心思想三：徹底的 Rootless (VM & Container)

安全性與隔離性是 v2 架構的另一個重點。在 Cockpit 上，我充分利用了現有的 Plugin 體系：

*   **Virtual Machines (libvirt)**：用於運行需要完整 OS 的服務。
*   **Containers (Podman)**：用於運行輕量級應用。

最關鍵的是，我全面採用了 **Rootless** 方案。
這意味著不管是 libvirt 還是 Podman，都是以非 root 使用者身份運行。這在安全性上是一個巨大的提升，即使容器被攻破，攻擊者拿到的權限也受到極大限制。Cockpit 對 Rootless 的支援相當完善，讓我可以在 Web 介面上無痛管理這些隔離環境。

# 核心思想四：注入靈魂 —— Cockpit Copilot (LLM + MCP)

這大概是 v2 架構最「Geek」也最讓我興奮的部分。

光有好的架構還不夠，我希望管理伺服器這件事能更「現代化」。既然 LLM 這麼強大，為什麼我要自己去查 `virsh` 或 `podman` 的冷門參數？

於是，我自製了一個專案：**[cockpit-copilot-agent](https://github.com/hans00/cockpit-copilot-agent)**。

這不只是一個聊天機器人，這是基於 **MCP (Model Context Protocol)** 打造的系統管理員助手：

1.  **MCP 工具包**：我將 Linux 系統管理工具封裝成 MCP tools。
2.  **LLM 決策**：透過語言模型理解我的自然語言指令（例如：「幫我把那個吃記憶體最兇的 Container 重啟」）。
3.  **自動執行**：Agent 會透過 MCP 安全地調用系統指令，並將結果回傳給我。

以前我要 SSH 進去敲 `podman stats` 然後 `podman restart <id>`，現在我只需要在 Cockpit 裡跟我的 Copilot 說一句話。它不僅是介面，更是我的 **Sidecar Admin**。

<vue-mermaid code="
graph TD
    User((User)) -->|Natural Language| Agent[Cockpit Copilot Agent]
    Agent -->|MCP Protocol| Tools[MCP Tools]
    Tools -->|Command| System[Ubuntu System]
    System --> Podman
    System --> Libvirt
    System --> ZFS
    subgraph Cockpit
        Agent
    end
"></vue-mermaid>

# 結語

HomeLab v2.0 不僅是一次硬體架構的縮減，更是一次管理思維的升級。

從「多機堆疊」回歸到「單機極致」，從「手動維護」進化到「AI 輔助」。這套 Ubuntu + ZFS + Cockpit + AI Copilot 的組合，完美解決了我舊架構的功耗痛點，同時也讓系統管理變得前所未有的有趣。

如果你也厭倦了維護龐大虛擬化叢集的疲憊感，或許這套 All-in-One 的智慧化方案，會是你下一個 HomeLab 的靈感來源。
