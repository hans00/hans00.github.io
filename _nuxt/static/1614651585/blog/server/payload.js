__NUXT_JSONP__("/blog/server", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:[{articles:[{title:"我的 home lab",category:"server",description:"我的自管伺服器的架構與解決辦法",toc:[{id:p,depth:n,text:p},{id:q,depth:n,text:q},{id:v,depth:k,text:s},{id:w,depth:k,text:t},{id:x,depth:n,text:y},{id:r,depth:n,text:r},{id:z,depth:k,text:A},{id:B,depth:k,text:C},{id:D,depth:n,text:E},{id:F,depth:k,text:G},{id:H,depth:k,text:I}],body:{type:"root",children:[{type:b,tag:J,props:{id:K},children:[{type:b,tag:d,props:{href:"#%E5%AF%A6%E9%AB%94%E6%A9%9F%E6%9E%B6%E6%A7%8B",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:L,props:{code:"\ngraph LR\n    isp(ISP) --- router\n    router((路由器)) --- storage & vm-server & home\n    home[Home Group]\n    subgraph Server Group\n        storage[儲存] == Fiber === vm-server\n        subgraph DMZ\n            vm-server[VM]\n        end\n    end\n"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:p},children:[{type:b,tag:d,props:{href:"#%E8%B7%AF%E7%94%B1%E5%99%A8",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"我採用了 RouterOS，因為可以使用相對低的成本做到專業路由器的設定。"}]},{type:a,value:c},{type:b,tag:o,props:{id:q},children:[{type:b,tag:d,props:{href:"#%E5%84%B2%E5%AD%98",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在眾多專為儲存設計的作業系統中我最終採用 DIY 建置的方案。"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Debian"},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"XanMod kernel LTS"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"iSCSI: LIO"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:t},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Foptimans\u002Fcockpit-zfs-manager",rel:[M,N,O],target:P},children:[{type:a,value:"ZFS Manager"}]}]},{type:a,value:c}]}]},{type:a,value:c}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"原本是想選擇 FreeNAS，畢竟 iXsystems 在 FreeNAS 上做了不少優化。但 FreeBSD 的社群正在萎縮、維護速度趕不上 Linux。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"使用 XanMod kernel 是因為在加上 performance profile 之後擁有更佳的性能。\n而 iSCSI 採用 LIO 是因為它是執行在 kernel 內、支援各種協定，且它可以直接與 Proxmox VE 整合 (ZFS over iSCSI)。"}]},{type:a,value:c},{type:b,tag:m,props:{id:v},children:[{type:b,tag:d,props:{href:"#openzfs",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"非常強大，支援快照、區塊壓縮、RAM cache (ARC)、SSD cache (L2ARC) 等功能，且自有的 zpool 管理方式非常方便。"}]},{type:a,value:c},{type:b,tag:m,props:{id:w},children:[{type:b,tag:d,props:{href:"#cockpit",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"近期社群非常活躍的 Web 管理介面專案，它可以很容易的安裝第三方插件。"}]},{type:a,value:c},{type:b,tag:o,props:{id:x},children:[{type:b,tag:d,props:{href:"#vm",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"我選擇了 Proxmox VE，因為它是開源的而且有非常方便管理的 Web UI。\n並且由於該主機是自組的、沒有辦法放那麼多硬碟，所以我把儲存分離出去，為了保障資料傳輸還設定了直連光纖。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"所有的應用服務都是在這台上面開 LXC 或 VM 來解決。"}]},{type:a,value:c},{type:b,tag:o,props:{id:r},children:[{type:b,tag:d,props:{href:"#%E5%88%86%E5%8D%80%E7%AE%A1%E5%88%B6",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:m,props:{id:z},children:[{type:b,tag:d,props:{href:"#home-group",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"供給家裡使用，設定 DHCP 與 NAT 且獨立的網段。"}]},{type:a,value:c},{type:b,tag:m,props:{id:B},children:[{type:b,tag:d,props:{href:"#server-group",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"供給伺服器使用，獨立的網段且有分區管制，僅 PVE 內。"}]},{type:a,value:c},{type:b,tag:J,props:{id:Q},children:[{type:b,tag:d,props:{href:"#%E6%87%89%E7%94%A8%E5%B1%A4%E6%9E%B6%E6%A7%8B",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:L,props:{code:"\ngraph TB\n    envoy -- WAF --\u003E iis & http1 & http2\n    envoy --\u003E other-services\n    rdp-proxy --\u003E rdp & vnc\n    subgraph front-vm [Bastion host VM]\n        envoy(envoy proxy)\n        rdp-proxy(RDP proxy)\n    end\n    subgraph windows-vm [Windows VM]\n        rdp(RDP)\n        iis(IIS)\n    end\n    subgraph linux-1 [Linux VM 1]\n        vnc(VNC)\n        http1(HTTP)\n    end\n    subgraph linux-2 [Linux VM 2]\n        http2(HTTP)\n    end\n    subgraph linux-3 [Linux VM 3]\n        other-services(Other services)\n    end\n"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:D},children:[{type:b,tag:d,props:{href:"#bastion-host",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"採用類似雲端的管理方式，由 bastion host 統一對外。"}]},{type:a,value:c},{type:b,tag:m,props:{id:F},children:[{type:b,tag:d,props:{href:"#envoy-proxy",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"envoy proxy 是 CNCF 的一個專案，就是專門進行高效能代理服務用的伺服器。"}]},{type:a,value:c},{type:b,tag:R,props:{id:"modsecurity-filter"},children:[{type:b,tag:d,props:{href:"#modsecurity-filter",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"ModSecurity filter"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"為了安全性，我在 HTTP 服務加上 ModSecurity filter 作為 WAF。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"這個模組雖然有找到現成的，但似乎有段時間沒維護且留下了一些 TODO code，所以我花了時間整理了一下。envoy proxy 內部程式碼似乎沒有文件，於是我是一層一層追蹤來找到正確寫法的。"}]},{type:a,value:c},{type:b,tag:m,props:{id:H},children:[{type:b,tag:d,props:{href:"#rdp-proxy",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"我找到了 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fwallix\u002Fredemption",rel:[M,N,O],target:P},children:[{type:a,value:"redemption"}]},{type:a,value:" 這個專案可以在 Linux 上建置統一對外用的 proxy，所以我選用這個並依他的 "},{type:b,tag:S,props:{},children:[{type:a,value:T}]},{type:a,value:" 範本加寫了限制連線範圍的規則。"}]},{type:a,value:c},{type:b,tag:R,props:{id:"auto-ban"},children:[{type:b,tag:d,props:{href:"#auto-ban",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"auto ban"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在 "},{type:b,tag:S,props:{},children:[{type:a,value:T}]},{type:a,value:" 這邊辨識連線目標為範圍外時會記錄下來，再透過 fail2ban 進行封鎖。"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fhome-lab",extension:".md",slug:"home-lab",createdAt:U,updatedAt:U}]}],fetch:[],mutations:void 0}}("text","element","\n","a","p","true",-1,"span","icon","icon-link",3,"li","h3",2,"h2","路由器","儲存","分區管制","OpenZFS","Cockpit","ul","openzfs","cockpit","vm","VM","home-group","Home group","server-group","Server group","bastion-host","Bastion host","envoy-proxy","envoy proxy","rdp-proxy","RDP proxy","h1","實體機架構","vue-mermaid","nofollow","noopener","noreferrer","_blank","應用層架構","h4","code","passthrough.py","2021-03-02T02:18:14.896Z")));