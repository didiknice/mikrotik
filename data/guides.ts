
import { Topic } from '../types';

export const MIKROTIK_GUIDES: Topic[] = [
  // --- LEVEL 1: FONDASI DASAR (BASIC) ---
  {
    id: 'winbox-menu-nav',
    title: 'Pengenalan & Navigasi Menu WinBox',
    category: 'Management',
    difficulty: 'Beginner',
    steps: [
      {
        id: 'nav-1',
        title: '1. Quick Set s/d Bridge (Layer Fisik & Data Link)',
        description: 'Menu bagian atas fokus pada konfigurasi interface fisik dan penggabungan jaringan. [Unduh WinBox Terbaru](https://mikrotik.com/download) dari situs resmi.',
        guiInstructions: [
          'Quick Set: Mode konfigurasi instan (Cth: CPE, HomeAP) - Hati-hati menimpa config manual.',
          'CAPsMAN: Controller untuk mengatur banyak AP MikroTik secara terpusat.',
          'Interfaces: Daftar seluruh port fisik (Ethernet, SFP) dan virtual (VLAN). Tempat ganti nama port.',
          'Wireless: Pengaturan Radio WiFi, Security Profile (Password), dan Access List.',
          'Bridge: Menggabungkan beberapa port interface agar menjadi satu segmen network (Switching software).'
        ],
        cliCommand: `# Melihat daftar interface
/interface print

# Melihat status wireless
/interface wireless print

# Melihat konfigurasi bridge
/interface bridge print`,
        explanation: 'Ini adalah menu yang paling sering diakses pertama kali. Pelajari lebih lanjut tentang [Interface Ethernet](https://help.mikrotik.com/docs/display/ROS/Ethernet) dan [Bridge](https://help.mikrotik.com/docs/display/ROS/Bridge) di Wiki resmi.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Interfaces+&+Bridge+Menu&font=roboto'
      },
      {
        id: 'nav-2',
        title: '2. PPP s/d Mesh (Tunneling & Switching)',
        description: 'Menu untuk koneksi Point-to-Point dan fitur switching lanjutan. Untuk konfigurasi VPN spesifik, lihat panduan [L2TP/IPsec](topic://vpn-l2tp-ipsec) atau [OpenVPN](topic://vpn-ovpn-server).',
        guiInstructions: [
          'PPP: Point-to-Point Protocol. Tempat setting PPPoE Client (IndiHome), PPPoE Server, L2TP, OVPN, dan Secret (User VPN).',
          'Switch: Konfigurasi chip switch hardware (VLAN Hardware offload) untuk performa tinggi.',
          'Mesh: Fitur untuk jaringan mesh (HWMP+), jarang digunakan di setup standar (biasanya digantikan oleh Bridge/CAPsMAN).'
        ],
        cliCommand: `# Melihat interface PPP (PPPoE/VPN)
/interface ppp-client print
/interface l2tp-server server print

# Melihat switch chip
/interface ethernet switch print`,
        explanation: 'Gunakan menu PPP untuk urusan koneksi ke ISP (PPPoE Client) atau menyediakan akses VPN kantor.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Menu+(VPN/PPPoE)&font=roboto'
      },
      {
        id: 'nav-3',
        title: '3. IP, MPLS, & Routing (Layer 3 Network)',
        description: 'Jantung konfigurasi jaringan. Menu IP memiliki submenu paling banyak. Pemahaman [OSI Layer 3](https://en.wikipedia.org/wiki/Network_layer) sangat dibutuhkan disini.',
        guiInstructions: [
          'IP -> Addresses: Menentukan IP Address router.',
          'IP -> DHCP Server/Client: Mengatur pembagian IP otomatis.',
          'IP -> DNS: Setting DNS Server (8.8.8.8) dan DNS Static.',
          'IP -> Firewall: Keamanan (Filter), NAT (Internet Sharing), dan Mangle.',
          'IP -> Hotspot: Sistem login WiFi voucher/tamu.',
          'IP -> Routes: Menentukan Gateway internet.',
          'Routing: Protokol routing dinamis (OSPF, BGP) untuk jaringan skala besar.'
        ],
        cliCommand: `# Cek IP Address
/ip address print

# Cek Tabel Routing
/ip route print

# Cek Rule Firewall
/ip firewall filter print`,
        explanation: 'Hampir 80% konfigurasi router dilakukan di dalam submenu "IP". Pastikan Anda memahami fungsi Address, Route, dan Firewall. Lihat [Panduan Dasar Internet](topic://basic-internet).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Submenu+List&font=roboto'
      },
      {
        id: 'nav-4',
        title: '4. System & Queues (Manajemen & Bandwidth)',
        description: 'Pengaturan sistem router dan pembatasan kecepatan. Untuk manajemen bandwidth lanjutan, pelajari [Queue Tree](topic://queue-tree-shaping).',
        guiInstructions: [
          'System: Menu administratif. Berisi Identity (Nama Router), Clock (Jam), Users (Password Admin), Reboot, Reset Configuration, dan Resources (Cek CPU/RAM).',
          'Queues: Manajemen Bandwidth. Gunakan "Simple Queues" untuk membatasi kecepatan download/upload client secara sederhana.'
        ],
        cliCommand: `# Cek Resource (CPU/RAM/Uptime)
/system resource print

# Cek Limit Bandwidth
/queue simple print`,
        explanation: 'Jika router terasa lambat, cek menu System -> Resources (CPU Load) atau Queues (apakah traffic penuh).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+System+&+Queues+Menu&font=roboto'
      },
      {
        id: 'nav-5',
        title: '5. Files, Log, & Tools (Maintenance)',
        description: 'Menu bagian bawah untuk penyimpanan, monitoring, dan terminal.',
        guiInstructions: [
          'Files: Tempat file backup (.backup/.rsc) dan halaman login hotspot.',
          'Log: Catatan aktivitas router (Error, Info, Warning). Wajib dicek saat troubleshooting.',
          'RADIUS: Untuk koneksi ke server database user eksternal (Usermanager/Mikhmon).',
          'Tools: Alat diagnosa seperti Ping, Traceroute, Bandwidth Test, dan Netwatch.',
          'New Terminal: Membuka Command Line Interface (CLI) langsung di WinBox.'
        ],
        cliCommand: `# Melihat Log terakhir
/log print

# Melakukan Ping
/ping 8.8.8.8

# Melihat file tersimpan
/file print`,
        explanation: 'Selalu cek menu "Log" jika ada masalah koneksi. Gunakan "New Terminal" untuk copy-paste script konfigurasi massal. Lihat cara [Analisis Log](topic://troubleshoot-logs).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Logs,+Files+&+Terminal&font=roboto'
      }
    ]
  },
  {
    id: 'basic-internet',
    title: 'Konfigurasi Dasar Gateway (Static/DHCP)',
    category: 'Basic',
    difficulty: 'Beginner',
    steps: [
      {
        id: 'step-1',
        title: 'Beri Nama Interface',
        description: 'Agar mudah dikenali, ubah nama interface default (ether1, ether2) sesuai fungsinya. Baca tentang [Interface Naming](https://wiki.mikrotik.com/wiki/Manual:Interface).',
        guiInstructions: [
          'Menu Interfaces',
          'Double click ether1 -> Name: "ether1-internet"',
          'Double click ether2 -> Name: "ether2-lan"',
          'Klik OK'
        ],
        cliCommand: `/interface set ether1 name=ether1-internet
/interface set ether2 name=ether2-lan`,
        explanation: 'Mengubah nama interface membantu mencegah kesalahan konfigurasi di masa depan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Interface+List+Rename&font=roboto'
      },
      {
        id: 'step-2',
        title: 'Konfigurasi IP Address',
        description: 'Tambahkan IP Address ke interface LAN dan Internet (jika Static). [Subnet Calculator](https://www.calculator.net/ip-subnet-calculator.html) bisa membantu menghitung CIDR.',
        guiInstructions: [
          'Menu IP -> Addresses',
          'Klik tombol (+)',
          'Address: 192.168.1.1/24',
          'Network: (Biarkan kosong/otomatis)',
          'Interface: ether2-lan',
          'Klik OK'
        ],
        cliCommand: `/ip address add address=192.168.1.1/24 interface=ether2-lan comment="LAN Gateway"`,
        explanation: 'IP ini akan menjadi gateway bagi client yang terhubung ke ether2.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Address+Add+New&font=roboto'
      },
      {
        id: 'step-3',
        title: 'Konfigurasi DHCP Client (Internet)',
        description: 'Jika internet dari ISP menggunakan DHCP (otomatis). Jika ISP menggunakan PPPoE, lihat panduan [PPPoE Client](topic://pppoe-direct).',
        guiInstructions: [
          'Menu IP -> DHCP Client',
          'Klik tombol (+)',
          'Interface: ether1-internet',
          'Pastikan "Use Peer DNS" dan "Use Peer NTP" dicentang',
          'Add Default Route: yes',
          'Klik OK'
        ],
        cliCommand: `/ip dhcp-client add interface=ether1-internet disabled=no`,
        explanation: 'MikroTik akan meminta IP secara otomatis dari modem/ISP.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+DHCP+Client+Settings&font=roboto'
      },
      {
        id: 'step-4',
        title: 'Konfigurasi NAT (Masquerade)',
        description: 'Wajib agar client LAN bisa akses internet. Pelajari lebih lanjut tentang [NAT](https://help.mikrotik.com/docs/display/ROS/NAT).',
        guiInstructions: [
          'Menu IP -> Firewall -> Tab NAT',
          'Klik tombol (+)',
          'Chain: srcnat',
          'Out. Interface: ether1-internet',
          'Tab Action -> Action: masquerade',
          'Klik OK'
        ],
        cliCommand: `/ip firewall nat add chain=srcnat out-interface=ether1-internet action=masquerade`,
        explanation: 'Mengubah IP private client menjadi IP public router saat mengakses internet.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+NAT+Masquerade&font=roboto'
      }
    ]
  },
  {
    id: 'dhcp-server',
    title: 'Setup DHCP Server LAN',
    category: 'Basic',
    difficulty: 'Beginner',
    steps: [
      {
        id: 'dhcp-1',
        title: '1. Buat IP Pool',
        description: 'Tentukan rentang IP yang akan dipinjamkan kepada client secara otomatis.',
        guiInstructions: [
          'Menu IP -> Pool',
          'Klik tombol (+)',
          'Name: dhcp_pool0',
          'Addresses: 192.168.1.10-192.168.1.254',
          'Klik OK'
        ],
        cliCommand: `/ip pool add name=dhcp_pool0 ranges=192.168.1.10-192.168.1.254`,
        explanation: 'Rentang IP ini (10-254) akan diberikan ke client. IP 1.1 - 1.9 bisa digunakan untuk IP statis perangkat lain.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Pool+Configuration&font=roboto'
      },
      {
        id: 'dhcp-2',
        title: '2. Konfigurasi Networks',
        description: 'Mengatur informasi gateway dan DNS yang akan diterima client. Gunakan [Google Public DNS](https://developers.google.com/speed/public-dns) (8.8.8.8).',
        guiInstructions: [
          'Menu IP -> DHCP Server -> Tab Networks',
          'Klik tombol (+)',
          'Address: 192.168.1.0/24',
          'Gateway: 192.168.1.1',
          'DNS Servers: 8.8.8.8, 8.8.4.4',
          'Klik OK'
        ],
        cliCommand: `/ip dhcp-server network add address=192.168.1.0/24 gateway=192.168.1.1 dns-server=8.8.8.8,8.8.4.4`,
        explanation: 'Network address harus sesuai dengan subnet IP Address yang terpasang di interface LAN.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+DHCP+Server+Networks&font=roboto'
      },
      {
        id: 'dhcp-3',
        title: '3. Aktifkan DHCP Server',
        description: 'Memasang service DHCP pada interface LAN.',
        guiInstructions: [
          'Menu IP -> DHCP Server -> Tab DHCP',
          'Klik tombol (+)',
          'Name: server-lan',
          'Interface: ether2-lan',
          'Address Pool: dhcp_pool0',
          'Lease Time: 00:10:00 (default 10 menit)',
          'Klik OK'
        ],
        cliCommand: `/ip dhcp-server add name=server-lan interface=ether2-lan address-pool=dhcp_pool0 disabled=no lease-time=10m`,
        explanation: 'Pastikan interface yang dipilih adalah interface yang mengarah ke switch/client (ether2-lan), bukan internet. Pelajari [DHCP Lease](https://help.mikrotik.com/docs/display/ROS/DHCP) untuk manajemen lanjutan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+DHCP+Server+Add&font=roboto'
      }
    ]
  },
  {
    id: 'wifi-basic',
    title: 'Setup WiFi Basic (SSID, Password, Channel)',
    category: 'Wireless',
    difficulty: 'Beginner',
    steps: [
      {
        id: 'wifi-1',
        title: 'Aktifkan Interface Wireless',
        description: 'Secara default, interface wlan1 dalam keadaan disable.',
        guiInstructions: [
          'Menu Wireless -> Tab WiFi Interfaces',
          'Pilih wlan1 (baris berwarna abu-abu)',
          'Klik tombol Centang (Enable) di toolbar',
          'Interface akan berubah menjadi warna hitam (aktif)'
        ],
        cliCommand: `/interface wireless enable wlan1`,
        explanation: 'Interface wireless harus diaktifkan terlebih dahulu sebelum bisa dikonfigurasi.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Enable+Wireless+Interface&font=roboto'
      },
      {
        id: 'wifi-2',
        title: 'Buat Security Profile (Password)',
        description: 'Membuat profil keamanan untuk password WiFi. Standar keamanan saat ini adalah WPA2.',
        guiInstructions: [
          'Menu Wireless -> Tab Security Profiles',
          'Klik (+)',
          'Name: profile-secure',
          'Mode: dynamic keys',
          'Authentication Types: centang WPA2 PSK',
          'WPA2 Pre-Shared Key: isikan_password_anda',
          'Klik OK'
        ],
        cliCommand: `/interface wireless security-profiles add name=profile-secure mode=dynamic-keys authentication-types=wpa2-psk wpa2-pre-shared-key="rahasia123"`,
        explanation: 'Disarankan menggunakan WPA2-PSK dengan AES untuk keamanan standar saat ini.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Wireless+Security+Profile&font=roboto'
      },
      {
        id: 'wifi-3',
        title: 'Konfigurasi Interface Wireless',
        description: 'Mengatur SSID, Mode AP, dan menautkan password. Jika sinyal putus-putus, cek [Panduan Troubleshooting Wireless](topic://troubleshoot-logs).',
        guiInstructions: [
          'Menu Wireless -> Tab WiFi Interfaces',
          'Double click wlan1',
          'Tab Wireless -> Mode: ap bridge',
          'SSID: "MikroTik-WiFi"',
          'Security Profile: profile-secure',
          'Frequency: auto',
          'Klik OK'
        ],
        cliCommand: `/interface wireless set wlan1 mode=ap-bridge ssid="MikroTik-WiFi" security-profile=profile-secure band=2ghz-b/g/n disabled=no`,
        explanation: 'Mode "ap bridge" menjadikan router sebagai Access Point. Pastikan memilih security profile yang telah dibuat sebelumnya. Lihat [Wireless Manual](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless) untuk detail channel width.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Wireless+Interface+Config&font=roboto'
      }
    ]
  },

  // --- LEVEL 2: MANAJEMEN & MONITORING (INTERMEDIATE) ---
  {
    id: 'simple-queue',
    title: 'Manajemen Bandwidth (Simple Queue)',
    category: 'Management',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'queue-1',
        title: 'Batasi Bandwidth Per IP',
        description: 'Membatasi kecepatan download/upload untuk IP tertentu. Lihat [QoS MikroTik](https://wiki.mikrotik.com/wiki/Manual:Queue).',
        guiInstructions: [
          'Menu Queues -> Tab Simple Queues',
          'Klik (+)',
          'Name: Limit-Boss',
          'Target: 192.168.1.10',
          'Max Limit (Upload): 5M',
          'Max Limit (Download): 10M',
          'Klik OK'
        ],
        cliCommand: `/queue simple add name="Limit-Boss" target=192.168.1.10 max-limit=5M/10M`,
        explanation: 'Client dengan IP 192.168.1.10 hanya akan mendapat max 5Mbps Upload dan 10Mbps Download.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Simple+Queue+Add+New&font=roboto'
      },
      {
        id: 'queue-2',
        title: 'Batasi Total LAN',
        description: 'Membatasi total bandwidth untuk seluruh jaringan LAN.',
        guiInstructions: [
          'Menu Queues -> Tab Simple Queues',
          'Klik (+)',
          'Name: Total-LAN',
          'Target: 192.168.1.0/24',
          'Max Limit: 20M/50M',
          'Klik OK'
        ],
        cliCommand: `/queue simple add name="Total-LAN" target=192.168.1.0/24 max-limit=20M/50M`,
        explanation: 'Seluruh subnet LAN berbagi bandwidth maksimum yang ditentukan. Untuk manajemen tingkat lanjut, gunakan [Queue Tree](topic://queue-tree-shaping).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Simple+Queue+Subnet+Limit&font=roboto'
      }
    ]
  },
  {
    id: 'log-analysis-deep-dive',
    title: 'Analisis Log Lengkap (Normal vs Error)',
    category: 'Monitoring',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'log-1',
        title: '1. Struktur Dasar & Kategori Log',
        description: 'Log memiliki struktur: Time, Topics (kategori), dan Message. Warna log di Winbox membantu identifikasi: Abu-abu (Normal), Biru (Script/System), Merah (Error/Critical).',
        guiInstructions: [
          'Menu Log',
          'Lihat kolom "Topics":',
          'system, info: Aktivitas normal sistem (login, config change).',
          'dhcp, info: Aktivitas pemberian IP address.',
          'interface, warning: Masalah koneksi fisik (link down).',
          'error, critical: Kerusakan sistem atau kegagalan service fatal.',
          'firewall, info: Log paket yang di-log oleh rule firewall.'
        ],
        cliCommand: `# Melihat semua log
/log print

# Filter log hanya error
/log print where topics~"error"

# Mengikuti log secara live (seperti tail -f)
/log print follow`,
        explanation: 'Secara default, Log disimpan di Memory (RAM). Jika router reboot, log akan hilang. Untuk menyimpan permanen, lihat langkah "Simpan Log ke Disk".',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Log+Window+Structure&font=roboto'
      },
      {
        id: 'log-2',
        title: '2. Log Masalah (Error & Warning)',
        description: 'Daftar pesan error yang umum terjadi dan maknanya.',
        guiInstructions: [
          '1. "FCS error on ether1": Kabel LAN rusak, crimping jelek, atau interferensi listrik.',
          '2. "login failure for user X from IP Y": Serangan Brute Force (Percobaan hack).',
          '3. "pppoe-out1: terminating... - peer is not responding": Koneksi ke ISP putus (kabel modem atau gangguan pusat).',
          '4. "interface ether1 link down": Kabel dicabut atau lawan mati.',
          '5. "extensive data loss" pada Wireless: Interferensi sinyal parah.'
        ],
        cliCommand: `# Cek apakah ada serangan login
/log print where message~"login failure"

# Cek masalah interface/kabel
/log print where message~"link down" || message~"FCS error"`,
        explanation: 'Jika Anda melihat "login failure" terus menerus dari IP asing, segera amankan router Anda (Ganti port, aktifkan firewall). FCS error = Ganti kabel LAN.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Common+Error+Logs&font=roboto'
      },
      {
        id: 'log-3',
        title: '3. Log Normal (Info & Debug)',
        description: 'Pesan ini menandakan router bekerja dengan baik.',
        guiInstructions: [
          '1. "dhcp-server assigned 192.168.1.50 to MAC...": Router sukses memberikan IP ke HP/Laptop.',
          '2. "user admin logged in from...": Ada admin masuk ke router.',
          '3. "pppoe-out1: connected": Internet berhasil tersambung.',
          '4. "system, info, account user admin changed...": Ada perubahan konfigurasi yang dilakukan admin.',
          '5. "firewall, info input: in:ether1...": Paket tercatat oleh rule firewall log=yes.'
        ],
        cliCommand: `# Cek siapa saja yang login baru-baru ini
/log print where message~"logged in"

# Cek pemberian IP DHCP
/log print where topics~"dhcp"`,
        explanation: 'Jangan panik melihat log yang berjalan cepat, terutama log firewall atau DHCP di jaringan besar. Itu tanda router sedang bekerja melayani client.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Normal+Activity+Logs&font=roboto'
      },
      {
        id: 'log-4',
        title: '4. Menyimpan Log ke Disk (Persisten)',
        description: 'Agar log tidak hilang saat mati lampu/reboot, ubah action ke "disk".',
        guiInstructions: [
          'Menu System -> Logging -> Tab Actions',
          'Double click "disk"',
          'File Name: log-mikrotik',
          'Lines: 1000 (Jumlah baris yang disimpan)',
          'Stop on Full: Uncheck (agar log lama tertimpa otomatis)',
          'Kembali ke Tab Rules -> Double click "info" -> Action: disk'
        ],
        cliCommand: `/system logging action set disk disk-file-name=log-mikrotik disk-lines=1000
/system logging set [find topics~"info"] action=disk`,
        explanation: 'Log akan tersimpan sebagai file teks di menu "Files". Hati-hati jangan menyimpan terlalu banyak topik debug ke disk karena bisa merusak Flash memory (Write cycle limit).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+System+Logging+Config&font=roboto'
      }
    ]
  },
  {
    id: 'mon-graphing',
    title: 'Graphing (Web Resource Monitor)',
    category: 'Monitoring',
    difficulty: 'Beginner',
    steps: [
      {
        id: 'gr-1',
        title: '1. Atur Aturan Graphing',
        description: 'Mengizinkan IP mana saja yang boleh melihat grafik.',
        guiInstructions: [
          'Menu Tools -> Graphing',
          'Tab Interface Rules -> (+)',
          'Interface: all, Allow Address: 192.168.1.0/24 (Network LAN)',
          'Tab Resource Rules -> (+)',
          'Allow Address: 192.168.1.0/24'
        ],
        cliCommand: `/tool graphing interface add interface=all allow-address=192.168.1.0/24
/tool graphing resource add allow-address=192.168.1.0/24`,
        explanation: 'Ini akan merekam penggunaan bandwidth (Interface) dan CPU/RAM (Resource). Data disimpan di disk router.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Tools+Graphing+Rules&font=roboto'
      },
      {
        id: 'gr-2',
        title: '2. Akses Grafik',
        description: 'Melihat hasil monitoring lewat browser. Pastikan [Service WWW](topic://harden-services) aktif pada port yang sesuai.',
        guiInstructions: [
          'Buka browser (Chrome/Firefox)',
          'Ketik: http://192.168.1.1/graphs',
          'Pilih interface atau resource yang ingin dilihat'
        ],
        cliCommand: `# Tidak ada command CLI untuk melihat grafik (harus via Web)`,
        explanation: 'Grafik ini sangat berguna untuk melihat tren penggunaan bandwidth harian, mingguan, atau bulanan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=Browser:+MikroTik+Graphs+Page&font=roboto'
      }
    ]
  },
  {
    id: 'mon-torch',
    title: 'Torch (Realtime Traffic Inspection)',
    category: 'Monitoring',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'tr-1',
        title: '1. Menjalankan Torch',
        description: 'Melihat siapa yang menghabiskan bandwidth saat ini. Mirip dengan tool [Wireshark](https://www.wireshark.org/).',
        guiInstructions: [
          'Menu Tools -> Torch',
          'Interface: ether2-lan (Pilih interface LAN)',
          'Centang: Src. Address, Dst. Address, Protocol, Port',
          'Klik Start'
        ],
        cliCommand: `/tool torch ether2-lan src-address=0.0.0.0/0 dst-address=0.0.0.0/0`,
        explanation: 'Torch akan menampilkan daftar koneksi aktif secara realtime beserta kecepatan Tx/Rx masing-masing IP.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Tools+Torch+Interface&font=roboto'
      },
      {
        id: 'tr-2',
        title: '2. Filter Spesifik',
        description: 'Mencari traffic spesifik (misal: siapa yang download via port 80). Lihat daftar [Port TCP/UDP](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers).',
        guiInstructions: [
          'Pada jendela Torch:',
          'Protocol: tcp',
          'Port: 80',
          'Klik Start lagi'
        ],
        cliCommand: `/tool torch ether2-lan protocol=tcp port=80`,
        explanation: 'Gunakan filter ini jika Anda mencurigai adanya aktivitas abnormal pada port atau protokol tertentu.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Torch+With+Filter&font=roboto'
      }
    ]
  },
  {
    id: 'mon-netwatch',
    title: 'Netwatch (Auto Reboot/Script on Down)',
    category: 'Monitoring',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'nw-1',
        title: '1. Setup Netwatch Host',
        description: 'Menambahkan host (IP) yang akan dipantau statusnya. Gunakan IP yang stabil seperti Google DNS (8.8.8.8) atau Cloudflare (1.1.1.1).',
        guiInstructions: [
          'Menu Tools -> Netwatch -> (+)',
          'Host: 8.8.8.8 (IP yang stabil)',
          'Interval: 00:01:00 (Cek setiap 1 menit)',
          'Timeout: 1000ms',
          'Tab Down: Isi script jika koneksi mati'
        ],
        cliCommand: `/tool netwatch add host=8.8.8.8 interval=1m timeout=1s down-script="/log warning message=\"Internet Down!\"" comment="Monitor Google DNS"`,
        explanation: 'Netwatch akan melakukan ping ke Host secara berkala. Jika RTO (Request Timed Out), script di tab "Down" akan dijalankan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Netwatch+Add+New&font=roboto'
      },
      {
        id: 'nw-2',
        title: '2. Contoh Script Failover Sederhana',
        description: 'Script untuk menonaktifkan route utama jika ping gagal. Berguna untuk [ISP Failover](topic://isp-failover).',
        guiInstructions: [
          'Pada tab Down di Netwatch:',
          'Ketik: /ip route set [find comment="ISP Utama"] disabled=yes',
          'Pada tab Up di Netwatch:',
          'Ketik: /ip route set [find comment="ISP Utama"] disabled=no'
        ],
        cliCommand: `# Script saat Down
/ip route set [find comment="ISP Utama"] disabled=yes
/tool e-mail send to="admin@email.com" subject="Internet Mati" body="Koneksi ke 8.8.8.8 putus"

# Script saat Up
/ip route set [find comment="ISP Utama"] disabled=no`,
        explanation: 'Pastikan Anda sudah memberi comment "ISP Utama" pada route yang dimaksud agar script bisa menemukannya.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Netwatch+Script+Tab&font=roboto'
      }
    ]
  },
  {
    id: 'mon-snmp',
    title: 'Setup SNMP (For Zabbix/The Dude)',
    category: 'Monitoring',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'snmp-1',
        title: '1. Aktifkan SNMP',
        description: 'Mengizinkan aplikasi monitoring eksternal mengambil data router. Baca [Panduan SNMP](https://help.mikrotik.com/docs/display/ROS/SNMP).',
        guiInstructions: [
          'Menu IP -> SNMP',
          'Centang Enabled',
          'Contact: Admin Network',
          'Location: Server Room',
          'Klik Apply'
        ],
        cliCommand: `/ip snmp set enabled=yes contact="Admin Network" location="Server Room"`,
        explanation: 'SNMP (Simple Network Management Protocol) adalah standar protokol untuk monitoring perangkat jaringan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+SNMP+Settings&font=roboto'
      },
      {
        id: 'snmp-2',
        title: '2. Konfigurasi Community',
        description: 'Mengatur password (community string) untuk akses baca.',
        guiInstructions: [
          'Menu IP -> SNMP -> Communities',
          'Double click "public"',
          'Addresses: 192.168.1.50 (IP Server Monitoring)',
          'Security: none (SNMPv1/v2) atau private (SNMPv3)',
          'Klik OK'
        ],
        cliCommand: `/ip snmp community set [find name="public"] addresses=192.168.1.50`,
        explanation: 'Sangat disarankan membatasi "Addresses" hanya ke IP server monitoring Anda agar tidak sembarang orang bisa membaca data router.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+SNMP+Community+Setup&font=roboto'
      }
    ]
  },

  // --- LEVEL 3: KONEKSI WAN VARIASI (INTERMEDIATE) ---
  {
    id: 'pppoe-direct',
    title: 'WAN: PPPoE Client (Direct)',
    category: 'Basic',
    difficulty: 'Beginner',
    steps: [
      {
        id: 'pppoe-1',
        title: 'Buat Interface PPPoE Client',
        description: 'Dial koneksi PPPoE langsung pada interface fisik (misal: ether1) tanpa VLAN atau Bridge.',
        guiInstructions: [
          'Menu Interfaces -> Tab Interface',
          'Klik tombol (+), pilih PPPoE Client',
          'Tab General -> Interface: ether1 (atau port ke modem)',
          'Tab Dial Out -> User: (username dari ISP)',
          'Tab Dial Out -> Password: (password dari ISP)',
          'Centang "Use Peer DNS" dan "Add Default Route"',
          'Klik OK'
        ],
        cliCommand: `/interface pppoe-client add name="pppoe-out1" interface=ether1 user="user_isp" password="password_isp" disabled=no use-peer-dns=yes add-default-route=yes`,
        explanation: 'Router akan melakukan dial ke ISP. Jika berhasil, status akan menjadi "connected" (R) dan muncul IP Public di menu IP Address.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPPoE+Client+Dial+Out&font=roboto'
      },
      {
        id: 'pppoe-2',
        title: 'Konfigurasi NAT Masquerade',
        description: 'Agar client LAN bisa browsing menggunakan koneksi PPPoE. Jika gagal akses internet, cek [Panduan Troubleshooting](topic://troubleshoot-logs).',
        guiInstructions: [
          'Menu IP -> Firewall -> Tab NAT',
          'Klik (+)',
          'Chain: srcnat',
          'Out. Interface: pppoe-out1 (Pilih interface PPPoE, BUKAN ether1)',
          'Tab Action -> Action: masquerade',
          'Klik OK'
        ],
        cliCommand: `/ip firewall nat add chain=srcnat out-interface=pppoe-out1 action=masquerade`,
        explanation: 'PENTING: Interface fisik (ether1) hanya berfungsi sebagai media transport (kabel), sedangkan identitas IP Public melekat pada interface virtual (pppoe-out1). \n\nAnalogi: Ether1 adalah "Jalan Raya", pppoe-out1 adalah "Mobil" Anda. Plat nomor (IP Public) menempel pada mobil, bukan pada jalan. Agar dikenali, paket data harus keluar menggunakan identitas mobil tersebut.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+NAT+for+PPPoE+Client&font=roboto'
      }
    ]
  },
  {
    id: 'pppoe-bridge',
    title: 'WAN: PPPoE Client via Bridge',
    category: 'Basic',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'pb-1',
        title: 'Buat Interface Bridge WAN',
        description: 'Membuat bridge untuk menampung port WAN. Berguna jika modem bridge masuk ke switch port router atau perlu mirroring. Pelajari [Bridge Interface](https://help.mikrotik.com/docs/display/ROS/Bridge).',
        guiInstructions: [
          'Menu Bridge -> Tab Bridge',
          'Klik (+), Name: bridge-wan, Klik OK',
          'Tab Ports -> Klik (+)',
          'Interface: ether1, Bridge: bridge-wan',
          'Klik OK'
        ],
        cliCommand: `/interface bridge add name=bridge-wan
/interface bridge port add interface=ether1 bridge=bridge-wan`,
        explanation: 'Port fisik (ether1) dimasukkan ke dalam logical interface Bridge. Konfigurasi selanjutnya akan mengacu pada nama bridge.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Bridge+Port+Configuration&font=roboto'
      },
      {
        id: 'pb-2',
        title: 'Buat Interface PPPoE Client',
        description: 'Dial PPPoE dilakukan di atas interface Bridge.',
        guiInstructions: [
          'Menu Interfaces -> (+) -> PPPoE Client',
          'Tab General -> Interface: bridge-wan',
          'Tab Dial Out -> Isi User & Password ISP',
          'Klik OK'
        ],
        cliCommand: `/interface pppoe-client add name="pppoe-out1" interface=bridge-wan user="user_isp" password="password_isp" disabled=no use-peer-dns=yes add-default-route=yes`,
        explanation: 'Interface induk adalah bridge-wan, bukan ether1 langsung.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPPoE+over+Bridge+Interface&font=roboto'
      },
      {
        id: 'pb-3',
        title: 'Konfigurasi NAT',
        description: 'Masquerade untuk interface PPPoE. Lihat [Penjelasan NAT](topic://basic-internet).',
        guiInstructions: [
          'Menu IP -> Firewall -> NAT -> (+)',
          'Chain: srcnat',
          'Out. Interface: pppoe-out1',
          'Action: masquerade'
        ],
        cliCommand: `/ip firewall nat add chain=srcnat out-interface=pppoe-out1 action=masquerade`,
        explanation: 'Walaupun traffic lewat bridge, IP Public ada di interface PPPoE. Masquerade bertugas mengganti Source IP (LAN) dengan IP Public dinamis router agar dikenali di internet.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+NAT+Configuration&font=roboto'
      }
    ]
  },
  {
    id: 'pppoe-vlan',
    title: 'WAN: PPPoE Client via VLAN',
    category: 'Basic',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'pv-1',
        title: 'Buat Interface VLAN',
        description: 'Membuat sub-interface VLAN pada ether1 (Contoh: VLAN ID 100 dari ISP). Pelajari [Konsep VLAN](topic://basic-vlan).',
        guiInstructions: [
          'Menu Interfaces -> Tab VLAN',
          'Klik (+)',
          'Name: vlan100-wan',
          'VLAN ID: 100',
          'Interface: ether1',
          'Klik OK'
        ],
        cliCommand: `/interface vlan add name=vlan100-wan vlan-id=100 interface=ether1`,
        explanation: 'VLAN ID harus sesuai dengan informasi dari penyedia layanan internet. Traffic akan di-tag dengan ID tersebut.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+VLAN+Interface+Add&font=roboto'
      },
      {
        id: 'pv-2',
        title: 'Buat Interface PPPoE Client',
        description: 'Dial PPPoE dilakukan di atas interface VLAN.',
        guiInstructions: [
          'Menu Interfaces -> (+) -> PPPoE Client',
          'Tab General -> Interface: vlan100-wan',
          'Tab Dial Out -> Isi User & Password ISP',
          'Klik OK'
        ],
        cliCommand: `/interface pppoe-client add name="pppoe-out1" interface=vlan100-wan user="user_isp" password="password_isp" disabled=no use-peer-dns=yes add-default-route=yes`,
        explanation: 'Router berkomunikasi via VLAN tagging untuk mencapai server PPPoE ISP.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPPoE+over+VLAN&font=roboto'
      },
      {
        id: 'pv-3',
        title: 'Konfigurasi NAT',
        description: 'Masquerade untuk internet akses.',
        guiInstructions: [
          'Menu IP -> Firewall -> NAT -> (+)',
          'Chain: srcnat',
          'Out. Interface: pppoe-out1',
          'Action: masquerade'
        ],
        cliCommand: `/ip firewall nat add chain=srcnat out-interface=pppoe-out1 action=masquerade`,
        explanation: 'VLAN hanya transport layer. Koneksi IP logis terjadi di pppoe-out1. Masquerade memastikan paket keluar menggunakan IP Public, bukan IP lokal yang tidak bisa di-routing di internet.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+NAT+Configuration&font=roboto'
      }
    ]
  },

  // --- LEVEL 4: SEGMENTASI & LAYANAN (INTERMEDIATE) ---
  {
    id: 'basic-vlan',
    title: 'Konfigurasi VLAN Dasar (Create VLAN Interface)',
    category: 'Basic',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'vlan-1',
        title: '1. Tentukan Interface Trunk (Parent)',
        description: 'Pilih interface fisik yang akan membawa traffic VLAN (Trunk Port) menuju Switch atau AP. Lihat [IEEE 802.1Q](https://en.wikipedia.org/wiki/IEEE_802.1Q).',
        guiInstructions: [
           'Menu Interfaces',
           'Pilih interface fisik (misal: ether2)',
           'Opsional: Rename menjadi "ether2-trunk" agar jelas',
           'Pastikan interface dalam keadaan Enable'
        ],
        cliCommand: `/interface set ether2 name=ether2-trunk comment="Trunk to Switch"`,
        explanation: 'Interface fisik ini akan bertugas mengantarkan paket data yang memiliki "Tag" VLAN. Jangan pasang IP Address di interface fisik ini jika sudah digunakan untuk VLAN.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Interface+Rename+Trunk&font=roboto'
      },
      {
        id: 'vlan-2',
        title: '2. Membuat Interface VLAN',
        description: 'Membuat sub-interface virtual dengan ID tertentu.',
        guiInstructions: [
          'Menu Interfaces -> Tab VLAN',
          'Klik tombol (+)',
          'Name: vlan10-office (Format: vlanID-nama)',
          'VLAN ID: 10',
          'Interface: ether2-trunk',
          'Klik OK'
        ],
        cliCommand: `/interface vlan add name=vlan10-office vlan-id=10 interface=ether2-trunk`,
        explanation: 'VLAN ID harus match (sama) dengan konfigurasi di Managed Switch atau Access Point lawan. Range ID valid: 1-4094.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+VLAN+Interface+Creation&font=roboto'
      },
      {
        id: 'vlan-3',
        title: '3. Konfigurasi IP Address VLAN',
        description: 'Memberikan IP Gateway untuk network VLAN tersebut.',
        guiInstructions: [
          'Menu IP -> Addresses',
          'Klik tombol (+)',
          'Address: 192.168.10.1/24',
          'Network: (kosongkan)',
          'Interface: vlan10-office (PENTING: Pilih interface VLAN, bukan fisik)',
          'Klik OK'
        ],
        cliCommand: `/ip address add address=192.168.10.1/24 interface=vlan10-office comment="Gateway VLAN 10"`,
        explanation: 'Router akan mengenali network 192.168.10.0/24 berasal dari VLAN 10. Lakukan langkah yang sama untuk VLAN lain (misal VLAN 20, 30, dst).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Address+on+VLAN&font=roboto'
      }
    ]
  },
  {
    id: 'hotspot-server',
    title: 'Setup Hotspot Server',
    category: 'Basic',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'hs-1',
        title: 'Konfigurasi IP & Pool',
        description: 'Tentukan IP Gateway untuk interface Hotspot dan range IP untuk client.',
        guiInstructions: [
          'Menu IP -> Addresses -> (+) Address: 10.5.50.1/24, Interface: ether3-hotspot',
          'Menu IP -> Pool -> (+) Name: hs-pool-1, Ranges: 10.5.50.2-10.5.50.254',
          'Klik OK'
        ],
        cliCommand: `# Tambahkan IP Address untuk interface Hotspot
/ip address add address=10.5.50.1/24 interface=ether3-hotspot comment="Hotspot GW"

# Buat IP Pool (Rentang IP untuk user)
/ip pool add name=hs-pool-1 ranges=10.5.50.2-10.5.50.254`,
        explanation: 'Interface Hotspot harus memiliki IP sendiri (terpisah dari LAN/WAN). Pool digunakan untuk meminjamkan IP ke HP/Laptop tamu.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Address+and+Pool&font=roboto'
      },
      {
        id: 'hs-2',
        title: 'Setup Server & Profile',
        description: 'Membuat profil server (DNS, HTML Directory) dan mengaktifkan service Hotspot. Dokumentasi lengkap: [MikroTik Hotspot](https://help.mikrotik.com/docs/display/ROS/Hotspot).',
        guiInstructions: [
          'Menu IP -> Hotspot -> Server Profiles -> (+) Name: hsprof1, DNS Name: login.wifi (wajib ada titik)',
          'Menu IP -> Hotspot -> Servers -> (+) Name: server1, Interface: ether3-hotspot, Address Pool: hs-pool-1, Profile: hsprof1',
          'Klik OK'
        ],
        cliCommand: `# Buat Hotspot Server Profile (DNS name wajib agar bisa login via domain)
/ip hotspot profile add name=hsprof1 dns-name="login.wifi" html-directory=hotspot login-by=http-chap,cookie

# Buat Hotspot Server yang mengikat interface dan pool
/ip hotspot add name=server1 interface=ether3-hotspot address-pool=hs-pool-1 profile=hsprof1 disabled=no`,
        explanation: 'DNS Name digunakan agar user bisa membuka halaman login dengan mengetik nama (cth: login.wifi) bukan IP. Pastikan HTML Directory terpilih agar halaman login muncul.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Hotspot+Server+Setup&font=roboto'
      },
      {
        id: 'hs-3',
        title: 'Manajemen User (User Manager)',
        description: 'Membuat paket (User Profile) dan akun user untuk login.',
        guiInstructions: [
          'Menu IP -> Hotspot -> User Profiles -> (+) Name: Tamu, Rate Limit: 2M/5M',
          'Menu IP -> Hotspot -> Users -> (+) Name: user1, Password: 123, Profile: Tamu',
          'Klik OK'
        ],
        cliCommand: `# Buat User Profile untuk membatasi bandwidth (Upload/Download)
/ip hotspot user profile add name="Tamu" rate-limit=2M/5M shared-users=1

# Buat User baru dengan profile tersebut
/ip hotspot user add name="user1" password="123" profile="Tamu"`,
        explanation: 'Rate Limit formatnya [Upload]/[Download]. User Profile memudahkan pengaturan bandwidth untuk banyak user sekaligus.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Hotspot+User+Profiles&font=roboto'
      }
    ]
  },

  // --- LEVEL 5: KEAMANAN & FILTERING (INTERMEDIATE/EXPERT) ---
  {
    id: 'harden-users',
    title: 'User Management Best Practices',
    category: 'Security Hardening',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'usr-1',
        title: '1. Buat User Admin Baru',
        description: 'Jangan gunakan user "admin". Buat user baru dengan grup "full".',
        guiInstructions: [
          'Menu System -> Users -> (+)',
          'Name: myadmin (contoh)',
          'Group: full',
          'Password: (Gunakan password kuat)',
          'Klik OK'
        ],
        cliCommand: `/user add name=myadmin group=full password="StrongPassword123!"`,
        explanation: 'User "admin" adalah target default serangan. Membuat user unik mempersulit penyerang.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+System+Users+Add&font=roboto'
      },
      {
        id: 'usr-2',
        title: '2. Hapus User Default',
        description: 'Setelah login dengan user baru, hapus user lama.',
        guiInstructions: [
          'Logout dan Login kembali menggunakan user "myadmin"',
          'Menu System -> Users',
          'Pilih user "admin"',
          'Klik tombol (-) Remove'
        ],
        cliCommand: `/user remove admin`,
        explanation: 'Pastikan Anda sudah login dengan user baru sebelum menghapus admin agar tidak terkunci.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+System+Users+Remove&font=roboto'
      },
      {
        id: 'usr-3',
        title: '3. Batasi Akses IP (Allowed Address)',
        description: 'Hanya izinkan login dari IP tertentu (IP Laptop/Kantor).',
        guiInstructions: [
          'Menu System -> Users',
          'Double click user "myadmin"',
          'Allowed Address: 192.168.1.0/24 (Subnet LAN)',
          'Klik OK'
        ],
        cliCommand: `/user set myadmin allowed-address=192.168.1.0/24`,
        explanation: 'Fitur ini sangat powerful. Meskipun hacker tahu password Anda, mereka tidak bisa login dari luar network yang diizinkan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+User+Allowed+Address&font=roboto'
      }
    ]
  },
  {
    id: 'harden-services',
    title: 'Disable Unnecessary Services',
    category: 'Security Hardening',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'srv-1',
        title: '1. Matikan Neighbor Discovery',
        description: 'MNDP/CDP memungkinkan router terlihat oleh perangkat lain di jaringan layer 2. Sebaiknya matikan pada interface publik.',
        guiInstructions: [
          'Menu IP -> Neighbors -> Discovery Settings',
          'Pilih "LAN-List" atau "none"',
          'Jika memilih "none", router tidak akan terlihat di WinBox Neighbors tab orang lain.',
          'Klik OK'
        ],
        cliCommand: `/ip neighbor discovery-settings set discover-interface-list=none`,
        explanation: 'Mematikan discovery mencegah hacker mengetahui keberadaan router Anda saat scanning jaringan lokal.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Neighbor+Discovery+Settings&font=roboto'
      },
      {
        id: 'srv-2',
        title: '2. Disable Service Insecure',
        description: 'Matikan service yang mengirim password tanpa enkripsi (Telnet, FTP, HTTP).',
        guiInstructions: [
          'Menu IP -> Services',
          'Pilih "telnet", "ftp", "www"',
          'Klik tombol X (Disable)',
          'Sisakan hanya "winbox" dan "ssh" (jika perlu)'
        ],
        cliCommand: `/ip service disable telnet,ftp,www,api,api-ssl`,
        explanation: 'Service ini sangat rentan diintip (sniffing). Gunakan SSH atau Winbox untuk manajemen yang lebih aman.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Services+List&font=roboto'
      },
      {
        id: 'srv-3',
        title: '3. Ganti Port Default SSH',
        description: 'Ubah port default 22 untuk menghindari script kiddies bruteforce. Jangan lupa update rule [Firewall Input](topic://harden-firewall).',
        guiInstructions: [
          'Menu IP -> Services',
          'Double click "ssh"',
          'Ganti Port menjadi angka acak, misal 2299',
          'Klik OK'
        ],
        cliCommand: `/ip service set ssh port=2299`,
        explanation: 'Mengganti port default tidak menjamin keamanan 100%, tapi mengurangi drastis log spam percobaan login.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Change+Service+Port&font=roboto'
      }
    ]
  },
  {
    id: 'block-site',
    title: 'Blokir Situs (Layer 7 Protocol)',
    category: 'Security',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'l7-1',
        title: 'Buat Definisi Regex',
        description: 'Mendefinisikan pola situs yang akan diblokir. Referensi Regex: [Regex101](https://regex101.com/).',
        guiInstructions: [
          'Menu IP -> Firewall -> Tab Layer7 Protocols',
          'Klik (+)',
          'Name: block-socmed',
          'Regexp: ^.+(facebook.com|twitter.com|instagram.com).*$',
          'Klik OK'
        ],
        cliCommand: `/ip firewall layer7-protocol add name="block-socmed" regexp="^.+(facebook.com|twitter.com|instagram.com).*$"` ,
        explanation: 'Layer 7 menggunakan Regular Expression untuk mencocokkan konten paket.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+Layer7+Protocol&font=roboto'
      },
      {
        id: 'l7-2',
        title: 'Buat Filter Rule',
        description: 'Menerapkan aksi drop packet berdasarkan definisi L7.',
        guiInstructions: [
          'Menu IP -> Firewall -> Tab Filter Rules',
          'Klik (+)',
          'Chain: forward',
          'Src. Address: 192.168.1.0/24 (Target Client)',
          'Tab Advanced -> Layer7 Protocol: block-socmed',
          'Tab Action -> Action: drop',
          'Klik OK'
        ],
        cliCommand: `/ip firewall filter add chain=forward src-address=192.168.1.0/24 layer7-protocol=block-socmed action=drop comment="Block Social Media"`,
        explanation: 'Paket dari LAN yang cocok dengan pola L7 akan dibuang (drop).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+Filter+Drop+L7&font=roboto'
      }
    ]
  },
  {
    id: 'isolir-pelanggan',
    title: 'Isolir Pelanggan (Blokir Internet)',
    category: 'Advanced Config',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'iso-1',
        title: '1. Buat Address List Isolir',
        description: 'Membuat daftar IP pelanggan yang akan diblokir.',
        guiInstructions: [
          'IP -> Firewall -> Address Lists',
          'Klik (+)',
          'Name: isolir',
          'Address: 192.168.1.50 (IP Pelanggan)',
          'Klik OK'
        ],
        cliCommand: `/ip firewall address-list add list=isolir address=192.168.1.50 comment="Telat Bayar"`,
        explanation: 'Anda bisa menambahkan banyak IP ke dalam list dengan nama yang sama "isolir".',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+Address+Lists&font=roboto'
      },
      {
        id: 'iso-2',
        title: '2. Filter Rule Drop',
        description: 'Memblokir akses internet untuk daftar isolir.',
        guiInstructions: [
          'IP -> Firewall -> Filter Rules -> (+)',
          'Chain: forward',
          'Src. Address List: isolir',
          'Action: drop',
          'Comment: BLOKIR ISOLIR',
          'Pindahkan rule ini ke baris paling atas (urutan 0)'
        ],
        cliCommand: `/ip firewall filter add chain=forward src-address-list=isolir action=drop comment="BLOKIR ISOLIR" place-before=0`,
        explanation: 'Chain "forward" memblokir paket yang melintasi router (menuju internet). Pastikan rule ini berada di posisi paling atas agar dieksekusi duluan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+Filter+Drop+Rule&font=roboto'
      }
    ]
  },
  {
    id: 'harden-firewall',
    title: 'IP Filtering Rules (Input Chain Protection)',
    category: 'Security Hardening',
    difficulty: 'Expert',
    steps: [
      {
        id: 'fw-1',
        title: '1. Accept Established & Related',
        description: 'Izinkan paket yang merupakan bagian dari koneksi yang sudah valid. Wajib ada di urutan pertama. Pelajari [Connection State](https://wiki.mikrotik.com/wiki/Manual:IP/Firewall/Filter#Connection_State).',
        guiInstructions: [
          'Menu IP -> Firewall -> Filter Rules -> (+)',
          'Chain: input',
          'Connection State: established, related',
          'Action: accept',
          'Comment: Accept Established/Related'
        ],
        cliCommand: `/ip firewall filter add chain=input connection-state=established,related action=accept comment="Accept Established/Related" place-before=0`,
        explanation: 'Ini mengurangi beban CPU karena paket lanjutan tidak perlu dicek rule lain di bawahnya.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Filter+Accept+Established&font=roboto'
      },
      {
        id: 'fw-2',
        title: '2. Drop Invalid',
        description: 'Buang paket yang tidak valid status koneksinya.',
        guiInstructions: [
          'Menu IP -> Firewall -> Filter Rules -> (+)',
          'Chain: input',
          'Connection State: invalid',
          'Action: drop',
          'Comment: Drop Invalid'
        ],
        cliCommand: `/ip firewall filter add chain=input connection-state=invalid action=drop comment="Drop Invalid"`,
        explanation: 'Paket invalid bisa jadi indikasi error jaringan atau serangan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Filter+Drop+Invalid&font=roboto'
      },
      {
        id: 'fw-3',
        title: '3. Allow Management (Winbox)',
        description: 'Izinkan akses Winbox hanya dari interface LAN.',
        guiInstructions: [
          'Menu IP -> Firewall -> Filter Rules -> (+)',
          'Chain: input',
          'Protocol: tcp, Dst. Port: 8291',
          'In. Interface: ether2-lan (Interface Lokal)',
          'Action: accept'
        ],
        cliCommand: `/ip firewall filter add chain=input protocol=tcp dst-port=8291 in-interface=ether2-lan action=accept comment="Allow Winbox LAN"`,
        explanation: 'Pastikan Anda mengizinkan akses manajemen sebelum membuat rule Drop All di akhir.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Filter+Allow+Management&font=roboto'
      },
      {
        id: 'fw-4',
        title: '4. Drop All Other Input',
        description: 'Blokir semua akses lain menuju router dari internet.',
        guiInstructions: [
          'Menu IP -> Firewall -> Filter Rules -> (+)',
          'Chain: input',
          'Action: drop',
          'Comment: Drop All Input',
          'Pastikan rule ini berada di POSISI PALING BAWAH'
        ],
        cliCommand: `/ip firewall filter add chain=input action=drop comment="Drop All Other Input"`,
        explanation: 'Rule "Sapu Jagat". Apa pun yang tidak diizinkan secara eksplisit di atas rule ini akan diblokir. Hati-hati jangan sampai terkunci (pastikan rule Allow Management sudah benar).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Filter+Drop+All+Rule&font=roboto'
      }
    ]
  },
  {
    id: 'firewall-comprehensive',
    title: 'Konfigurasi Firewall Dasar & Filter Rules',
    category: 'Security',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'fw-concept-1',
        title: '1. Memahami Chain (Input, Output, Forward)',
        description: 'Firewall MikroTik bekerja berdasarkan 3 Chain utama. Sangat penting memahaminya sebelum membuat rule.',
        guiInstructions: [
          'Chain Input: Paket yang ditujukan UNTUK router itu sendiri (Contoh: Login Winbox, Ping ke Router).',
          'Chain Output: Paket yang berasal DARI router itu sendiri (Contoh: Router ping ke Google, Router update NTP).',
          'Chain Forward: Paket yang MELEWATI router (Contoh: Laptop LAN browsing ke Internet).',
          'Pergi ke Menu IP -> Firewall -> Tab Filter Rules untuk melihat rule yang ada.'
        ],
        cliCommand: `/ip firewall filter print`,
        explanation: 'Kesalahan umum pemula adalah mencoba memblokir akses internet client menggunakan chain "input". Padahal seharusnya menggunakan chain "forward".',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=Diagram:+Input+vs+Forward+Chain&font=roboto'
      },
      {
        id: 'fw-concept-2',
        title: '2. Connection State (Stateful Firewall)',
        description: 'MikroTik melacak status setiap koneksi. Memfilter berdasarkan status jauh lebih efisien daripada memfilter setiap paket secara buta.',
        guiInstructions: [
          'Established: Koneksi yang sudah terbentuk dan valid.',
          'Related: Koneksi baru yang berhubungan dengan koneksi yang sudah ada (misal: FTP Data transfer).',
          'New: Permintaan koneksi baru (paket pertama).',
          'Invalid: Paket rusak atau tidak memiliki status yang jelas (wajib di-drop).'
        ],
        cliCommand: `# Rule standar untuk menerima paket established/related di chain Forward
/ip firewall filter add chain=forward connection-state=established,related action=accept comment="Accept Established/Related"

# Rule untuk membuang paket invalid
/ip firewall filter add chain=forward connection-state=invalid action=drop comment="Drop Invalid"`,
        explanation: 'Dengan mengizinkan "Established & Related" di paling atas, CPU router bekerja lebih ringan karena tidak perlu memeriksa rule di bawahnya untuk paket-paket selanjutnya.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+Connection+State&font=roboto'
      },
      {
        id: 'fw-concept-3',
        title: '3. Filter Rule Actions (Drop, Reject, Tarpit)',
        description: 'Tindakan yang diambil jika paket cocok dengan kriteria rule.',
        guiInstructions: [
          'Accept: Paket diizinkan lewat.',
          'Drop: Paket dibuang diam-diam (pengirim tidak tahu, akan timeout). Hemat resource.',
          'Reject: Paket dibuang tapi router mengirim pesan error (ICMP Unreachable) ke pengirim.',
          'Tarpit: Menahan koneksi TCP tetap terbuka tapi tidak mengirim data (berguna untuk menahan serangan DoS agar resource penyerang habis).'
        ],
        cliCommand: `/ip firewall filter add chain=input src-address=192.168.1.50 action=drop comment="Blokir IP 1.50 ke Router"`,
        explanation: 'Gunakan "Drop" untuk keamanan internet (agar port terlihat stealth). Gunakan "Reject" untuk jaringan internal agar user langsung tahu akses ditolak.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+Actions&font=roboto'
      },
      {
        id: 'fw-concept-4',
        title: '4. Fasttrack Connection (Optimasi CPU)',
        description: 'Fitur wajib untuk router rumahan/SOHO dengan bandwidth besar (>100Mbps). Fasttrack mem-bypass proses firewall yang berat untuk koneksi yang sudah established.',
        guiInstructions: [
          'Menu IP -> Firewall -> Filter Rules -> (+)',
          'Chain: forward',
          'Connection State: established, related',
          'Action: fasttrack-connection',
          'Klik OK. Pindahkan rule ini ke baris paling atas (urutan 0 atau 1).'
        ],
        cliCommand: `/ip firewall filter add chain=forward connection-state=established,related action=fasttrack-connection comment="Fasttrack"
/ip firewall filter add chain=forward connection-state=established,related action=accept comment="Accept Fasttrack Helper"`,
        explanation: 'PENTING: Fasttrack membuat fitur Queues (Limit Bandwidth) dan IPsec kadang tidak berjalan semestinya. Matikan Fasttrack jika Anda menggunakan Simple Queue yang kompleks.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Fasttrack+Rule&font=roboto'
      }
    ]
  },

  // --- LEVEL 6: VPN & REMOTE ACCESS (INTERMEDIATE) ---
  {
    id: 'vpn-concepts',
    title: 'Konsep Dasar VPN & PPP (Profile, Secret, Interface)',
    category: 'VPN',
    difficulty: 'Beginner',
    steps: [
      {
        id: 'vpn-c1',
        title: '1. Apa itu PPP (Point-to-Point Protocol)?',
        description: 'PPP adalah protokol dasar untuk membuat tunnel (terowongan) virtual.',
        guiInstructions: [
          'Menu PPP pada WinBox adalah pusat kontrol untuk semua jenis VPN (PPPoE, L2TP, OVPN, SSTP, PPTP).',
          'Interface: Tempat melihat interface VPN yang sedang aktif (Running).',
          'Interface fisik tidak memiliki IP public (di sisi client), IP menempel pada interface PPP virtual.'
        ],
        cliCommand: `/interface ppp-client print
/interface l2tp-server server print`,
        explanation: 'Bayangkan PPP sebagai kabel virtual yang membentang di atas internet publik. Interface ini menghubungkan client ke router secara privat.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Menu+Overview&font=roboto'
      },
      {
        id: 'vpn-c2',
        title: '2. PPP Profile (Aturan & Limitasi)',
        description: 'Profile menentukan konfigurasi jaringan yang akan didapat client saat connect.',
        guiInstructions: [
          'Menu PPP -> Profiles -> (+)',
          'Name: nama_profil (misal: "kantor_10mbps")',
          'Local Address: IP Gateway Router (Virtual IP)',
          'Remote Address: IP Pool untuk Client',
          'Rate Limit: Batas kecepatan (rx/tx), misal 10M/10M',
          'DNS Server: DNS yang akan diberikan ke client'
        ],
        cliCommand: `/ppp profile add name="kantor_10m" local-address=10.10.10.1 remote-address=pool-vpn rate-limit=10M/10M dns-server=8.8.8.8`,
        explanation: 'Profile mirip dengan "Paket Langganan". Anda bisa membuat satu profile untuk banyak user. Setting enkripsi dan limit bandwidth diatur di sini.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Profile+Config&font=roboto'
      },
      {
        id: 'vpn-c3',
        title: '3. PPP Secret (Manajemen User)',
        description: 'Secret adalah database username dan password untuk login VPN.',
        guiInstructions: [
          'Menu PPP -> Secrets -> (+)',
          'Name: Username login',
          'Password: Password login',
          'Service: Jenis VPN yang diizinkan (any, l2tp, ovpn, pppoe)',
          'Profile: Pilih profile yang dibuat sebelumnya'
        ],
        cliCommand: `/ppp secret add name="budi" password="rahasia" service=l2tp profile="kantor_10m"`,
        explanation: 'Secret mengikat user tertentu dengan Profile tertentu. Jika Profile kosong, user akan menggunakan profile "default" (tanpa limit).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Secrets+(User)&font=roboto'
      },
      {
        id: 'vpn-c4',
        title: '4. Active Connections (Monitoring)',
        description: 'Melihat siapa saja yang sedang terhubung saat ini.',
        guiInstructions: [
          'Menu PPP -> Tab Active Connections',
          'Terlihat Nama User, IP Asal (Caller ID), IP yang didapat, dan Uptime.',
          'Klik kanan -> Remove untuk memutus paksa koneksi user.'
        ],
        cliCommand: `/ppp active print
/ppp active remove [find name="budi"]`,
        explanation: 'Tab ini sangat penting untuk troubleshooting. Jika user komplain tidak bisa connect, cek apakah user tersebut sudah "nyangkut" di active connection.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Active+Connections&font=roboto'
      }
    ]
  },
  {
    id: 'vpn-l2tp-ipsec',
    title: 'Setup VPN L2TP/IPsec Server',
    category: 'VPN',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'vpn-1',
        title: 'Buat IP Pool & PPP Profile',
        description: 'Menentukan range IP untuk client VPN dan profil enkripsi.',
        guiInstructions: [
          'Menu IP -> Pool -> (+) Name: vpn-pool, Ranges: 192.168.89.2-192.168.89.20',
          'Menu PPP -> Profiles -> (+) Name: profile-vpn',
          'Local Address: 192.168.89.1, Remote Address: vpn-pool',
          'Tab Protocols -> Use Encryption: yes',
          'Klik OK'
        ],
        cliCommand: `# Buat IP Pool untuk client VPN
/ip pool add name=vpn-pool ranges=192.168.89.2-192.168.89.20

# Buat PPP Profile dengan enkripsi
/ppp profile add name=profile-vpn local-address=192.168.89.1 remote-address=vpn-pool use-encryption=yes dns-server=8.8.8.8`,
        explanation: 'Local Address adalah IP router di dalam tunnel VPN, Remote Address adalah IP yang akan didapat client.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Pool+and+Profile&font=roboto'
      },
      {
        id: 'vpn-2',
        title: 'Buat User VPN (PPP Secret)',
        description: 'Membuat akun username dan password untuk client yang akan connect.',
        guiInstructions: [
          'Menu PPP -> Secrets -> (+)',
          'Name: user_vpn1',
          'Password: password_rahasia',
          'Service: l2tp',
          'Profile: profile-vpn',
          'Klik OK'
        ],
        cliCommand: `/ppp secret add name="user_vpn1" password="password_rahasia" service=l2tp profile=profile-vpn`,
        explanation: 'Pastikan memilih service l2tp agar user hanya bisa login menggunakan protokol tersebut.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Secrets+Add&font=roboto'
      },
      {
        id: 'vpn-3',
        title: 'Aktifkan L2TP Server & IPsec',
        description: 'Mengaktifkan service server dan mengatur kunci rahasia IPsec. Pelajari [IPsec Standards](https://tools.ietf.org/html/rfc6071).',
        guiInstructions: [
          'Menu PPP -> Tab Interface -> Tombol "L2TP Server"',
          'Centang "Enabled"',
          'Use IPsec: yes',
          'IPsec Secret: kuncirahasia123 (Wajib diisi)',
          'Klik OK'
        ],
        cliCommand: `/interface l2tp-server server set enabled=yes use-ipsec=yes ipsec-secret="kuncirahasia123" default-profile=profile-vpn`,
        explanation: 'IPsec Secret (Pre-Shared Key) harus sama persis dengan yang dimasukkan di sisi client (Android/Windows).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+L2TP+Server+Settings&font=roboto'
      },
      {
        id: 'vpn-4',
        title: 'Setting Firewall Filter',
        description: 'Membuka port yang diperlukan agar koneksi VPN bisa masuk dari internet.',
        guiInstructions: [
          'Menu IP -> Firewall -> Filter Rules',
          'Buat rule Accept untuk UDP port 500, 1701, 4500 (Chain: input)',
          'Buat rule Accept untuk Protocol ipsec-esp (Chain: input)',
          'Pastikan posisi rule berada di atas rule "Drop"',
          'Klik OK'
        ],
        cliCommand: `# Allow UDP Ports untuk L2TP/IPsec
/ip firewall filter add chain=input protocol=udp dst-port=500,1701,4500 action=accept comment="Allow L2TP IPsec" place-before=0

# Allow Protocol ESP (Encap Security Payload)
/ip firewall filter add chain=input protocol=ipsec-esp action=accept comment="Allow IPSec ESP" place-before=0`,
        explanation: 'Tanpa membuka port ini di firewall, paket request VPN dari luar akan diblokir oleh router.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+VPN+Rules&font=roboto'
      }
    ]
  },
  {
    id: 'remote-access-vpn',
    title: 'Akses Router dari Luar (VPN Remote & IP Cloud)',
    category: 'VPN',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'ra-1',
        title: '1. Pahami Metode Akses',
        description: 'Ada 2 cara utama mengakses router dari internet: 1) Jika punya IP Public Dinamis, gunakan IP Cloud (DDNS). 2) Jika tidak punya IP Public (IP Private/NAT), gunakan VPN Remote (Dial ke VPS/Router Kantor).',
        guiInstructions: [
          'Metode IP Cloud: Router langsung diakses via domain (cth: a1b2.sn.mynetname.net).',
          'Metode VPN Remote: Router melakukan "Dial Out" ke server VPN yang punya IP Public. Kita akses router melalui IP VPN tersebut.'
        ],
        cliCommand: `# Cek IP Public di router
/ip cloud print
# Jika status: "DDNS Enabled: yes" dan "Public IP" muncul, gunakan metode IP Cloud.`,
        explanation: 'VPN Remote lebih aman dan fleksibel karena tidak tergantung pada IP Public di sisi router client.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=Diagram:+Direct+Access+vs+VPN+Tunnel&font=roboto'
      },
      {
        id: 'ra-2',
        title: '2. Setup VPN Client (L2TP)',
        description: 'Konfigurasi ini dilakukan di router yang ingin diremote (Client). Asumsi Anda sudah memiliki akun VPN dari Kantor atau penyedia layanan.',
        guiInstructions: [
          'Menu Interfaces -> (+) -> L2TP Client',
          'Tab Dial Out -> Connect To: IP_Server_VPN (misal IP VPS)',
          'User: user_remote, Password: password123',
          'Profile: default-encryption',
          'Centang "Use IPsec" dan isi "IPsec Secret" jika server mewajibkan.',
          'Klik OK'
        ],
        cliCommand: `/interface l2tp-client add name="l2tp-remote" connect-to=203.0.113.10 user="user_remote" password="password123" profile=default-encryption use-ipsec=yes ipsec-secret="rahasia" disabled=no`,
        explanation: 'Setelah connected (status R), router akan mendapatkan IP Private dari VPN Server (misal 192.168.99.2). Anda bisa login Winbox ke IP 192.168.99.2 tersebut dari mana saja selama terhubung ke jaringan VPN yang sama.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+L2TP+Client+Setup&font=roboto'
      },
      {
        id: 'ra-3',
        title: '3. Konfigurasi Firewall (Allow VPN Input)',
        description: 'Pastikan router mengizinkan akses Winbox dari interface VPN.',
        guiInstructions: [
          'Menu IP -> Firewall -> Filter Rules',
          'Cari rule "Drop All Input" atau sejenisnya.',
          'Tambahkan rule baru DI ATAS rule drop: Chain=input, In-Interface=l2tp-remote, Action=accept',
          'Atau, tambahkan IP VPN Server ke "Allowed Address" user admin.'
        ],
        cliCommand: `/ip firewall filter add chain=input in-interface=l2tp-remote action=accept comment="Allow Winbox from VPN" place-before=0`,
        explanation: 'Jika firewall memblokir input dari interface VPN, Anda tidak akan bisa login meskipun VPN sudah terkoneksi.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+Allow+VPN+Input&font=roboto'
      },
      {
        id: 'ra-4',
        title: '4. Alternatif: IP Cloud (DDNS)',
        description: 'Gunakan ini jika router mendapatkan IP Public dari ISP tapi sering berubah (Dynamic).',
        guiInstructions: [
          'Menu IP -> Cloud',
          'Centang "DDNS Enabled"',
          'Tunggu status "Updated"',
          'Catat "DNS Name" (contoh: xxxxxxxxx.sn.mynetname.net)',
          'Gunakan DNS Name tersebut di Winbox Address.'
        ],
        cliCommand: `/ip cloud set ddns-enabled=yes`,
        explanation: 'MikroTik menyediakan domain gratis *.sn.mynetname.net yang akan selalu mengarah ke IP Public router Anda. Pastikan port Winbox (8291) tidak diblokir firewall ISP.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Cloud+DDNS&font=roboto'
      }
    ]
  },
  {
    id: 'vpn-ovpn-server',
    title: 'Setup VPN OpenVPN Server (SSL/TLS)',
    category: 'VPN',
    difficulty: 'Expert',
    steps: [
      {
        id: 'ovpn-1',
        title: '1. Buat Sertifikat (CA, Server, Client)',
        description: 'OpenVPN menggunakan SSL/TLS. Kita perlu membuat 3 sertifikat: CA (Authority), Server, dan Client. Baca [MikroTik Certificates](https://help.mikrotik.com/docs/display/ROS/Certificates).',
        guiInstructions: [
          'System -> Certificates -> (+)',
          '1. Buat CA: Name=ca-template, Common Name=myCA, Key Usage=key cert sign, crl sign. Klik Apply -> Sign (pilih ca-template).',
          '2. Buat Server: Name=server-template, Common Name=server@vpn, Key Usage=digital sig, key encipherment, tls server. Klik Apply -> Sign (CA=myCA).',
          '3. Buat Client: Name=client-template, Common Name=client1@vpn, Key Usage=tls client. Klik Apply -> Sign (CA=myCA).',
          'Double click sertifikat CA dan Server, centang "Trusted".'
        ],
        cliCommand: `# 1. Buat & Sign CA
/certificate add name=ca-template common-name=myCa key-usage=key-cert-sign,crl-sign
/certificate sign ca-template name=myCa
/certificate set myCa trusted=yes

# 2. Buat & Sign Server
/certificate add name=server-template common-name=server@vpn key-usage=digital-signature,key-encipherment,tls-server
/certificate sign server-template ca=myCa name=server@vpn
/certificate set server@vpn trusted=yes

# 3. Buat & Sign Client
/certificate add name=client-template common-name=client1@vpn key-usage=tls-client
/certificate sign client-template ca=myCa name=client1@vpn`,
        explanation: 'Sertifikat adalah kunci keamanan OpenVPN. CA bertugas memvalidasi identitas Server dan Client. Tanpa sertifikat "Trusted", koneksi tidak akan terbentuk.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+System+Certificates&font=roboto'
      },
      {
        id: 'ovpn-2',
        title: '2. IP Pool & PPP Profile',
        description: 'Menentukan range IP untuk client dan profil enkripsi.',
        guiInstructions: [
          'IP -> Pool -> (+): Name=pool-ovpn, Ranges=10.10.10.2-10.10.10.20',
          'PPP -> Profiles -> (+): Name=prof-ovpn',
          'Local Addr: 10.10.10.1, Remote Addr: pool-ovpn',
          'DNS Server: 8.8.8.8',
          'Change TCP MSS: yes (Penting untuk stabilitas)'
        ],
        cliCommand: `/ip pool add name=pool-ovpn ranges=10.10.10.2-10.10.10.20
/ppp profile add name=prof-ovpn local-address=10.10.10.1 remote-address=pool-ovpn dns-server=8.8.8.8 change-tcp-mss=yes`,
        explanation: 'Local Address adalah IP Gateway tunnel. Change TCP MSS membantu mencegah paket loss jika MTU di jalur internet kecil.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Profile+OpenVPN&font=roboto'
      },
      {
        id: 'ovpn-3',
        title: '3. Konfigurasi OpenVPN Server',
        description: 'Mengaktifkan instance server dan mengikat sertifikat.',
        guiInstructions: [
          'PPP -> Interface -> tombol "OVPN Server"',
          'Centang Enabled',
          'Port: 1194 (Default), Mode: ip (TUN)',
          'Default Profile: prof-ovpn',
          'Certificate: server@vpn (Pilih cert server yang dibuat)',
          'Require Client Certificate: yes (Wajib untuk SSL/TLS)',
          'Auth: sha1, Cipher: aes128/aes256',
          'Klik OK'
        ],
        cliCommand: `/interface ovpn-server server set enabled=yes port=1194 mode=ip default-profile=prof-ovpn certificate=server@vpn require-client-certificate=yes auth=sha1 cipher=aes128,aes256`,
        explanation: 'Mode "ip" (TUN) lebih support banyak device (Android/iOS) dibanding "ethernet" (TAP). Pastikan sertifikat server dipilih.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+OVPN+Server+Settings&font=roboto'
      },
      {
        id: 'ovpn-4',
        title: '4. Buat User (Secrets)',
        description: 'Membuat akun username password untuk client.',
        guiInstructions: [
          'PPP -> Secrets -> (+)',
          'Name: user1',
          'Password: password123',
          'Service: ovpn',
          'Profile: prof-ovpn',
          'Klik OK'
        ],
        cliCommand: `/ppp secret add name="user1" password="password123" service=ovpn profile=prof-ovpn`,
        explanation: 'User ini nantinya akan dimasukkan di file config .ovpn atau aplikasi OpenVPN Connect.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Secrets+OVPN&font=roboto'
      },
      {
        id: 'ovpn-5',
        title: '5. Firewall & Export Config',
        description: 'Membuka port 1194 dan export sertifikat untuk client.',
        guiInstructions: [
          '1. Firewall: IP -> Firewall -> Filter -> (+), Chain: input, Protocol: tcp, Dst Port: 1194, Action: Accept.',
          '2. Export Cert: System -> Certificates. Klik kanan sertifikat "myCa" -> Export (Type PEM). Klik kanan "client1@vpn" -> Export (Type PEM, isi Passphrase).',
          '3. Download file .crt dan .key dari menu "Files" dan import ke device Client.'
        ],
        cliCommand: `# Allow Port 1194 TCP
/ip firewall filter add chain=input protocol=tcp dst-port=1194 action=accept comment="Allow OpenVPN" place-before=0

# Export Certificate (Hasil ada di menu Files)
/certificate export-certificate myCa type=pem
/certificate export-certificate client1@vpn type=pem export-passphrase=1234`,
        explanation: 'Di sisi client (HP/Laptop), Anda butuh file ca.crt, client.crt, dan client.key. Config .ovpn harus mengarah ke IP Public router.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Certificate+Export+Files&font=roboto'
      }
    ]
  },

  // --- LEVEL 7: FAILOVER & LOAD BALANCE (ADVANCED) ---
  {
    id: 'isp-failover',
    title: 'ISP Failover (Auto Backup Link)',
    category: 'Advanced Config',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'fo-1',
        title: '1. Konfigurasi Route ISP Utama',
        description: 'Setting route ke ISP utama dengan Check Gateway (Ping) dan Distance kecil (1). Baca tentang [Route Distance](https://help.mikrotik.com/docs/display/ROS/IP+Routing#IPRouting-RouteSelection).',
        guiInstructions: [
          'Menu IP -> Routes -> (+)',
          'Dst. Address: 0.0.0.0/0',
          'Gateway: 192.168.1.1 (IP Modem ISP 1)',
          'Check Gateway: ping (Wajib)',
          'Distance: 1',
          'Klik OK'
        ],
        cliCommand: `/ip route add dst-address=0.0.0.0/0 gateway=192.168.1.1 check-gateway=ping distance=1 comment="ISP Utama"`,
        explanation: 'Fitur "Check Gateway" akan melakukan ping rutin ke gateway. Jika timeout, route ini akan dinonaktifkan otomatis.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Route+Main+ISP&font=roboto'
      },
      {
        id: 'fo-2',
        title: '2. Konfigurasi Route ISP Backup',
        description: 'Setting route ke ISP backup dengan Distance lebih besar (2).',
        guiInstructions: [
          'Menu IP -> Routes -> (+)',
          'Dst. Address: 0.0.0.0/0',
          'Gateway: 192.168.2.1 (IP Modem ISP 2)',
          'Distance: 2 (Harus lebih besar dari ISP utama)',
          'Klik OK'
        ],
        cliCommand: `/ip route add dst-address=0.0.0.0/0 gateway=192.168.2.1 distance=2 comment="ISP Backup"`,
        explanation: 'Karena distancenya lebih besar (2), jalur ini hanya akan aktif jika jalur utama (distance 1) mati.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Route+Backup+ISP&font=roboto'
      },
      {
        id: 'fo-3',
        title: '3. Konfigurasi NAT',
        description: 'Pastikan NAT Masquerade dibuat untuk kedua interface ISP. Lihat [Setup NAT](topic://basic-internet).',
        guiInstructions: [
          'Menu IP -> Firewall -> NAT',
          'Buat Masquerade untuk Out-Interface: ether1-isp1',
          'Buat Masquerade untuk Out-Interface: ether2-isp2'
        ],
        cliCommand: `/ip firewall nat add chain=srcnat out-interface=ether1-isp1 action=masquerade
/ip firewall nat add chain=srcnat out-interface=ether2-isp2 action=masquerade`,
        explanation: 'Traffic harus bisa keluar melalui kedua ISP tersebut saat jalur aktif.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Firewall+NAT+Dual+ISP&font=roboto'
      }
    ]
  },
  {
    id: 'load-balance-pcc',
    title: 'Load Balance PCC (2 ISP Umum)',
    category: 'Advanced Config',
    difficulty: 'Expert',
    steps: [
      {
        id: 'pcc-1',
        title: '1. Mangle: Accept Traffic Lokal',
        description: 'Pastikan traffic antar network lokal tidak ikut di-load balance. Pelajari konsep [PCC](https://wiki.mikrotik.com/wiki/Manual:PCC).',
        guiInstructions: [
          'IP -> Firewall -> Mangle -> (+)',
          'Chain: prerouting',
          'Dst. Address: 192.168.0.0/16 (Subnet Lokal)',
          'Action: accept'
        ],
        cliCommand: `/ip firewall mangle add chain=prerouting dst-address=192.168.0.0/16 action=accept comment="Bypass Lokal"`,
        explanation: 'Mencegah router membelokkan traffic LAN-to-LAN ke internet.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Mangle+Accept+Local&font=roboto'
      },
      {
        id: 'pcc-2',
        title: '2. Mangle: PCC Classifier (Mark Connection)',
        description: 'Menandai koneksi yang masuk agar dibagi rata ke 2 ISP.',
        guiInstructions: [
          'IP -> Firewall -> Mangle -> (+)',
          'Chain: prerouting, In-Interface: LAN',
          'Tab Advanced -> Per Connection Classifier: both addresses : 2/0',
          'Action: mark-connection, New Mark: koneksi-isp1',
          'Ulangi untuk 2/1 dengan New Mark: koneksi-isp2'
        ],
        cliCommand: `/ip firewall mangle add chain=prerouting in-interface=ether-lan per-connection-classifier=both-addresses:2/0 action=mark-connection new-connection-mark=conn-isp1 passthrough=yes
/ip firewall mangle add chain=prerouting in-interface=ether-lan per-connection-classifier=both-addresses:2/1 action=mark-connection new-connection-mark=conn-isp2 passthrough=yes`,
        explanation: 'PCC 2/0 artinya "Sisa bagi 0" masuk ke ISP1, PCC 2/1 artinya "Sisa bagi 1" masuk ke ISP2.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Mangle+PCC+Rule&font=roboto'
      },
      {
        id: 'pcc-3',
        title: '3. Mangle: Mark Routing',
        description: 'Mengarahkan paket yang sudah ditandai ke jalur routing yang sesuai.',
        guiInstructions: [
          'IP -> Firewall -> Mangle -> (+)',
          'Chain: prerouting, In-Interface: LAN',
          'Connection Mark: koneksi-isp1',
          'Action: mark-routing, New Mark: jalur-isp1',
          'Ulangi untuk koneksi-isp2 -> jalur-isp2'
        ],
        cliCommand: `/ip firewall mangle add chain=prerouting in-interface=ether-lan connection-mark=conn-isp1 action=mark-routing new-routing-mark=route-isp1 passthrough=no
/ip firewall mangle add chain=prerouting in-interface=ether-lan connection-mark=conn-isp2 action=mark-routing new-routing-mark=route-isp2 passthrough=no`,
        explanation: 'Memastikan paket dalam satu sesi koneksi selalu lewat jalur yang sama.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Mangle+Mark+Routing&font=roboto'
      },
      {
        id: 'pcc-4',
        title: '4. IP Routes',
        description: 'Membuat default route berdasarkan Routing Mark.',
        guiInstructions: [
          'IP -> Routes -> (+)',
          'Gateway: IP_ISP1, Routing Mark: route-isp1',
          'Gateway: IP_ISP2, Routing Mark: route-isp2',
          'Gateway: IP_ISP1 (Main), Distance: 1',
          'Gateway: IP_ISP2 (Backup), Distance: 2'
        ],
        cliCommand: `/ip route add gateway=192.168.1.1 routing-mark=route-isp1
/ip route add gateway=192.168.2.1 routing-mark=route-isp2
/ip route add gateway=192.168.1.1 distance=1 comment="Default Main"
/ip route add gateway=192.168.2.1 distance=2 comment="Default Backup"`,
        explanation: 'Route dengan routing-mark adalah jalur khusus LB. Route tanpa mark adalah failover standar.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Routes+with+Marks&font=roboto'
      }
    ]
  },
  {
    id: 'lb-starlink-pcc',
    title: 'Load Balance PCC: 2x Starlink',
    category: 'Advanced Config',
    difficulty: 'Expert',
    steps: [
      {
        id: 'sl-1',
        title: '1. Identifikasi Interface & Subnet Conflict',
        description: 'Starlink biasanya memiliki IP LAN Default 192.168.1.1 atau 192.168.100.1. Jika Anda menggunakan 2 Starlink, pastikan Subnet tidak bentrok.',
        guiInstructions: [
          'Ganti nama interface: ether1-starlink1 & ether2-starlink2',
          'PENTING: Gunakan Starlink Ethernet Adapter dan atur salah satu router Starlink ke mode Bypass jika memungkinkan, atau ubah subnet LAN di aplikasi Starlink agar berbeda (misal: 192.168.1.1 & 192.168.2.1).'
        ],
        cliCommand: `/interface set ether1 name=ether1-starlink1
/interface set ether2 name=ether2-starlink2`,
        explanation: 'Jika kedua Starlink memberikan IP 192.168.1.1 ke Mikrotik, Load Balance akan GAGAL karena router bingung gateway mana yang dipakai. Solusi terbaik: Mode Bypass (dapat IP Publik CGNAT 100.x.x.x) atau bedakan subnet.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Interfaces+Rename+Starlink&font=roboto'
      },
      {
        id: 'sl-2',
        title: '2. Konfigurasi DHCP Client',
        description: 'Aktifkan DHCP Client pada kedua interface WAN Starlink.',
        guiInstructions: [
          'IP -> DHCP Client -> (+)',
          'Interface: ether1-starlink1',
          'Add Default Route: no (PENTING: Pilih NO karena kita akan buat route manual)',
          'Ulangi untuk ether2-starlink2',
          'Klik OK'
        ],
        cliCommand: `/ip dhcp-client add interface=ether1-starlink1 add-default-route=no disabled=no
/ip dhcp-client add interface=ether2-starlink2 add-default-route=no disabled=no`,
        explanation: 'Kita tidak menggunakan default route otomatis karena kita perlu memanipulasi routing menggunakan Mangle PCC.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+DHCP+Client+No+Default+Route&font=roboto'
      },
      {
        id: 'sl-3',
        title: '3. Mangle PCC (Inti Load Balance)',
        description: 'Script PCC untuk membagi traffic. Menggunakan "both-addresses" untuk kompatibilitas perbankan.',
        guiInstructions: [
          'Paste script berikut di Terminal untuk akurasi.',
          'Prerouting Accept: Traffic Lokal',
          'Input Mark Connection: Agar reply masuk ke interface yang benar',
          'Output Mark Routing: Agar reply keluar dari interface yang benar',
          'PCC Classifier: Membagi traffic LAN ke 2 WAN'
        ],
        cliCommand: `/ip firewall mangle
# 1. Accept traffic lokal (jangan di-LB)
add chain=prerouting dst-address=192.168.0.0/16 action=accept

# 2. Mark Connection Incoming (Pastikan traffic masuk dari WAN X dibalas via WAN X)
add chain=input in-interface=ether1-starlink1 action=mark-connection new-connection-mark=conn-sl1
add chain=input in-interface=ether2-starlink2 action=mark-connection new-connection-mark=conn-sl2

# 3. PCC Classifier (Membagi Traffic LAN)
add chain=prerouting in-interface=bridge-lan per-connection-classifier=both-addresses:2/0 action=mark-connection new-connection-mark=conn-sl1 passthrough=yes
add chain=prerouting in-interface=bridge-lan per-connection-classifier=both-addresses:2/1 action=mark-connection new-connection-mark=conn-sl2 passthrough=yes

# 4. Mark Routing (Mengarahkan ke Route List)
add chain=prerouting connection-mark=conn-sl1 in-interface=bridge-lan action=mark-routing new-routing-mark=to_sl1
add chain=prerouting connection-mark=conn-sl2 in-interface=bridge-lan action=mark-routing new-routing-mark=to_sl2

# 5. Output Chain (Untuk traffic dari router itu sendiri)
add chain=output connection-mark=conn-sl1 action=mark-routing new-routing-mark=to_sl1
add chain=output connection-mark=conn-sl2 action=mark-routing new-routing-mark=to_sl2`,
        explanation: 'Metode PCC membagi beban berdasarkan koneksi, bukan packet. Ini membuat koneksi stabil untuk game dan https.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Mangle+PCC+Rules&font=roboto'
      },
      {
        id: 'sl-4',
        title: '4. NAT Masquerade',
        description: 'Agar client bisa akses internet via kedua WAN.',
        guiInstructions: [
          'IP -> Firewall -> NAT',
          'Chain: srcnat',
          'Out. Interface: ether1-starlink1, Action: masquerade',
          'Chain: srcnat, Out-Interface: ether2-starlink2, Action: masquerade'
        ],
        cliCommand: `/ip firewall nat 
add chain=srcnat out-interface=ether1-starlink1 action=masquerade
add chain=srcnat out-interface=ether2-starlink2 action=masquerade`,
        explanation: 'Wajib ada agar IP Private LAN diterjemahkan ke IP Public Starlink.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+NAT+Masquerade+Both+WAN&font=roboto'
      },
      {
        id: 'sl-5',
        title: '5. Routing & Failover',
        description: 'Menentukan Gateway masing-masing mark dan failover otomatis.',
        guiInstructions: [
          'IP -> Routes -> (+)',
          'Route 1: Gateway=ether1-starlink1 (atau IP Gatewaynya), Routing Mark=to_sl1, Check Gateway=ping',
          'Route 2: Gateway=ether2-starlink2, Routing Mark=to_sl2, Check Gateway=ping',
          'Route 3 (Main Failover): Gateway=ether1-starlink1, Distance=1, Check Gateway=ping',
          'Route 4 (Backup Failover): Gateway=ether2-starlink2, Distance=2, Check Gateway=ping'
        ],
        cliCommand: `# Ganti G.G.G.G dengan IP Gateway Starlink Anda (Cek di IP -> DHCP Client -> Status)
# Jika mode bypass DHCP, gateway biasanya dinamis, gunakan script DHCP Client script untuk update gateway otomatis atau set manual jika statis.

/ip route
add gateway=ether1-starlink1 routing-mark=to_sl1 check-gateway=ping comment="Route PCC SL1"
add gateway=ether2-starlink2 routing-mark=to_sl2 check-gateway=ping comment="Route PCC SL2"

# Failover (Tanpa Routing Mark)
add gateway=ether1-starlink1 distance=1 check-gateway=ping comment="Main ISP"
add gateway=ether2-starlink2 distance=2 check-gateway=ping comment="Backup ISP"`,
        explanation: 'Check-gateway=ping sangat penting untuk Starlink karena terkadang koneksi satelit putus tapi port ethernet tetap up. Dengan ping, router tahu internet mati dan akan memindahkan jalur.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Routes+Final+Setup&font=roboto'
      }
    ]
  },
  {
    id: 'traffic-split-socmed',
    title: 'Pisah Trafik: Route Khusus Sosmed & Game',
    category: 'Advanced Config',
    difficulty: 'Expert',
    steps: [
      {
        id: 'split-1',
        title: '1. Identifikasi Trafik Sosmed (Layer 7)',
        description: 'Kita akan menggunakan Layer 7 Protocol Regex untuk menangkap domain media sosial. Cara ini paling mudah dipahami, meskipun menggunakan CPU lebih tinggi dibanding metode TLS-Host/Raw.',
        guiInstructions: [
          'IP -> Firewall -> Layer7 Protocols -> (+)',
          'Name: sosmed_l7',
          'Regexp: ^.+(facebook.com|instagram.com|tiktok.com|youtube.com|googlevideo.com).*$',
          'Klik OK'
        ],
        cliCommand: `/ip firewall layer7-protocol add name="sosmed_l7" regexp="^.+(facebook.com|instagram.com|tiktok.com|youtube.com|googlevideo.com).*$"`,
        explanation: 'Regex ini menangkap domain utama. Untuk YouTube, kita juga menyertakan googlevideo.com karena itu adalah domain CDN video mereka.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+L7+Protocol+Regex&font=roboto'
      },
      {
        id: 'split-2',
        title: '2. Drop QUIC (UDP 443)',
        description: 'PENTING: Aplikasi modern (Youtube/FB) menggunakan protokol QUIC (UDP Port 443) yang terenkripsi dan sulit ditangkap L7. Kita harus memblokirnya agar aplikasi fallback ke TCP standar.',
        guiInstructions: [
          'IP -> Firewall -> Filter Rules -> (+)',
          'Chain: forward, Protocol: udp, Dst. Port: 443',
          'Action: drop',
          'Move rule ini ke paling atas.'
        ],
        cliCommand: `/ip firewall filter add chain=forward protocol=udp dst-port=443 action=drop comment="Block QUIC to force TCP" place-before=0`,
        explanation: 'Jika QUIC tidak diblokir, L7 Regex seringkali tidak bekerja karena trafik lewat jalur UDP terenkripsi yang tidak bisa diintip isinya oleh Router.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Block+QUIC+UDP+443&font=roboto'
      },
      {
        id: 'split-3',
        title: '3. Mangle: Mark Connection & Routing',
        description: 'Menandai koneksi yang sesuai dengan L7 Sosmed, lalu memberinya Routing Mark agar bisa dibelokkan.',
        guiInstructions: [
          'IP -> Firewall -> Mangle',
          '1. Mark Connection: Chain=prerouting, Src. Address=192.168.0.0/16 (Lokal), Layer7=sosmed_l7, Action=mark-connection, New Mark=conn-sosmed',
          '2. Mark Routing: Chain=prerouting, Connection Mark=conn-sosmed, Action=mark-routing, New Mark=route-sosmed'
        ],
        cliCommand: `/ip firewall mangle
add chain=prerouting src-address=192.168.0.0/16 layer7-protocol=sosmed_l7 action=mark-connection new-connection-mark=conn-sosmed passthrough=yes comment="Mark Sosmed"
add chain=prerouting connection-mark=conn-sosmed action=mark-routing new-routing-mark=route-sosmed passthrough=no`,
        explanation: 'Rule pertama menandai "sesi" koneksi. Rule kedua memerintahkan router: "Paket ini jangan pakai jalur biasa, tapi pakai jalur khusus bernama route-sosmed".',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Mangle+Mark+Routing+Sosmed&font=roboto'
      },
      {
        id: 'split-4',
        title: '4. IP Route (Belokkan Trafik)',
        description: 'Membuat rute khusus agar trafik bertanda "route-sosmed" melewati ISP tertentu (misal: ISP 2).',
        guiInstructions: [
          'IP -> Routes -> (+)',
          'Dst. Address: 0.0.0.0/0',
          'Gateway: 192.168.2.1 (IP Modem ISP 2 / Starlink 2)',
          'Routing Mark: route-sosmed',
          'Check Gateway: ping',
          'Klik OK'
        ],
        cliCommand: `/ip route add dst-address=0.0.0.0/0 gateway=192.168.2.1 routing-mark=route-sosmed check-gateway=ping comment="Jalur Khusus Sosmed"`,
        explanation: 'Hasilnya: Game online (yang tidak kena mark) akan lewat ISP Utama (Default Route), sedangkan Sosmed akan dipaksa lewat ISP 2.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Route+Routing+Mark&font=roboto'
      }
    ]
  },
  {
    id: 'masking-speedtest-vpn',
    title: 'Masking Speedtest via VPN (Policy Routing)',
    category: 'Advanced Config',
    difficulty: 'Expert',
    steps: [
      {
        id: 'mask-1',
        title: '1. Persiapan VPN Client',
        description: 'Pastikan Anda sudah terhubung ke VPN (L2TP/PPTP/OVPN) yang akan digunakan sebagai jalur keluar. Pastikan statusnya "R" (Running).',
        guiInstructions: [
          'Cek Menu Interfaces',
          'Pastikan interface VPN (misal: l2tp-out1) sudah connected.',
          'Jangan centang "Add Default Route" pada setting VPN client.'
        ],
        cliCommand: `/interface print where type=l2tp-client`,
        explanation: 'Kita tidak menggunakan default route VPN karena kita hanya ingin membelokkan trafik Speedtest saja, bukan seluruh trafik internet router.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+VPN+Client+Check&font=roboto'
      },
      {
        id: 'mask-2',
        title: '2. Buat Layer 7 Protocol',
        description: 'Mendeteksi trafik yang menuju domain Speedtest/Ookla.',
        guiInstructions: [
          'IP -> Firewall -> Layer7 Protocols -> (+)',
          'Name: l7-speedtest',
          'Regexp: ^.+(speedtest|ookla|fast.com).*$',
          'Klik OK'
        ],
        cliCommand: `/ip firewall layer7-protocol add name="l7-speedtest" regexp="^.+(speedtest|ookla|fast.com).*$"`,
        explanation: 'Regex ini akan menangkap handshake awal koneksi ke situs speedtest.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+L7+Protocol+Speedtest&font=roboto'
      },
      {
        id: 'mask-3',
        title: '3. Mangle: Mark Routing',
        description: 'Tandai paket yang cocok dengan L7 agar menggunakan jalur khusus.',
        guiInstructions: [
          'IP -> Firewall -> Mangle -> (+)',
          'Chain: prerouting, Src. Address: 192.168.0.0/16 (Lokal)',
          'Layer7 Protocol: l7-speedtest',
          'Action: mark-routing, New Routing Mark: route-vpn-speedtest',
          'Passthrough: no'
        ],
        cliCommand: `/ip firewall mangle add chain=prerouting src-address=192.168.0.0/16 layer7-protocol=l7-speedtest action=mark-routing new-routing-mark=route-vpn-speedtest passthrough=no comment="Belokkan Speedtest"`,
        explanation: 'Setiap paket dari LAN yang mengakses Speedtest akan diberi label "route-vpn-speedtest".',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Mangle+Mark+Routing+VPN&font=roboto'
      },
      {
        id: 'mask-4',
        title: '4. Route & NAT',
        description: 'Arahkan paket bertanda khusus ke VPN dan jangan lupa NAT.',
        guiInstructions: [
          '1. IP -> Routes -> (+): Gateway=l2tp-out1, Routing Mark=route-vpn-speedtest',
          '2. IP -> Firewall -> NAT -> (+): Chain=srcnat, Out-Interface=l2tp-out1, Action=masquerade'
        ],
        cliCommand: `/ip route add gateway=l2tp-out1 routing-mark=route-vpn-speedtest comment="Jalur Speedtest VPN"
/ip firewall nat add chain=srcnat out-interface=l2tp-out1 action=masquerade comment="NAT VPN"`,
        explanation: 'Tanpa Route ini, paket tidak tahu jalan keluar. Tanpa NAT, paket akan dibuang oleh Server VPN karena IP source-nya private (LAN).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Route+and+NAT+Setup&font=roboto'
      }
    ]
  },

  // --- LEVEL 8: OPTICAL & FTTH (EXPERT) ---
  {
    id: 'olt-pppoe-setup',
    title: 'Setup PPPoE Server untuk OLT (2 PON / VLAN)',
    category: 'Optical',
    difficulty: 'Expert',
    steps: [
      {
        id: 'olt-1',
        title: '1. Topologi & VLAN Uplink OLT',
        description: 'Asumsi: Ether10 router terhubung ke Uplink OLT. OLT menggunakan mode VLAN Tagging (Service Port) untuk membedakan PON. Kita gunakan VLAN 100 untuk PON 1 dan VLAN 200 untuk PON 2.',
        guiInstructions: [
          'Interfaces -> VLAN -> (+)',
          'Name: vlan100-pon1, VLAN ID: 100, Interface: ether10',
          'Name: vlan200-pon2, VLAN ID: 200, Interface: ether10',
          'Klik OK'
        ],
        cliCommand: `/interface vlan add name=vlan100-pon1 vlan-id=100 interface=ether10 comment="Uplink PON 1"
/interface vlan add name=vlan200-pon2 vlan-id=200 interface=ether10 comment="Uplink PON 2"`,
        explanation: 'VLAN ID ini harus match dengan konfigurasi "Service Port" pada OLT Anda. Tanpa VLAN yang sesuai, trafik dari ONU tidak akan sampai ke router.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Interface+VLAN+Add&font=roboto'
      },
      {
        id: 'olt-2',
        title: '2. Bridge Concatenation (Penggabungan)',
        description: 'Untuk memudahkan manajemen, kita gabungkan kedua VLAN PON ke dalam satu Bridge logika agar cukup membuat 1 Service PPPoE Server.',
        guiInstructions: [
          'Bridge -> Tab Bridge -> (+)',
          'Name: bridge-fiber-olt, Klik OK',
          'Tab Ports -> (+)',
          'Interface: vlan100-pon1, Bridge: bridge-fiber-olt',
          'Interface: vlan200-pon2, Bridge: bridge-fiber-olt',
          'Klik OK'
        ],
        cliCommand: `/interface bridge add name=bridge-fiber-olt comment="Konsentrator OLT"
/interface bridge port add interface=vlan100-pon1 bridge=bridge-fiber-olt
/interface bridge port add interface=vlan200-pon2 bridge=bridge-fiber-olt`,
        explanation: 'Dengan cara ini, pelanggan di PON 1 dan PON 2 berada di segmen Layer 2 yang sama di mata router. PPPoE Server nanti akan berjalan di atas interface "bridge-fiber-olt".',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Bridge+VLAN+Ports&font=roboto'
      },
      {
        id: 'olt-3',
        title: '3. IP Pool & Address',
        description: 'Menyiapkan alamat IP untuk gateway dan range IP yang akan diberikan ke modem pelanggan (ONU).',
        guiInstructions: [
          'IP -> Pool -> (+): Name: pool-fiber, Ranges: 10.20.0.2-10.20.3.254',
          'IP -> Addresses -> (+): Address: 10.20.0.1/22, Interface: bridge-fiber-olt',
          'Klik OK'
        ],
        cliCommand: `/ip pool add name=pool-fiber ranges=10.20.0.2-10.20.3.254
/ip address add address=10.20.0.1/22 interface=bridge-fiber-olt comment="Gateway Fiber"`,
        explanation: 'Gunakan subnet yang cukup besar (contoh /22 untuk 1000 user) untuk mengantisipasi pertumbuhan pelanggan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Pool+Address+Setup&font=roboto'
      },
      {
        id: 'olt-4',
        title: '4. PPP Profile & Secrets',
        description: 'Membuat paket langganan dan akun pelanggan.',
        guiInstructions: [
          'PPP -> Profiles -> (+): Name: paket-10mbps, Local Address: 10.20.0.1, Remote Address: pool-fiber, Rate Limit: 10M/10M, DNS: 8.8.8.8',
          'PPP -> Secrets -> (+): Name: pelanggan1, Password: 123, Service: pppoe, Profile: paket-10mbps',
          'Klik OK'
        ],
        cliCommand: `/ppp profile add name="paket-10mbps" local-address=10.20.0.1 remote-address=pool-fiber rate-limit=10M/10M dns-server=8.8.8.8
/ppp secret add name="pelanggan1" password="123" service=pppoe profile="paket-10mbps"`,
        explanation: 'Pastikan Local Address diisi IP Gateway router agar routing berjalan lancar.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Profile+Secret&font=roboto'
      },
      {
        id: 'olt-5',
        title: '5. PPPoE Server Service',
        description: 'Mengaktifkan layanan server PPPoE pada interface Bridge OLT.',
        guiInstructions: [
          'PPP -> PPPoE Servers -> (+)',
          'Service Name: service-olt',
          'Interface: bridge-fiber-olt',
          'Default Profile: default (atau profil khusus isolir)',
          'One Session Per Host: Centang (Agar 1 user tidak login ganda)',
          'Klik OK'
        ],
        cliCommand: `/interface pppoe-server server add service-name="service-olt" interface=bridge-fiber-olt default-profile=default one-session-per-host=yes disabled=no`,
        explanation: 'Sekarang router siap menerima dial PPPoE dari modem ONU baik yang berasal dari PON 1 maupun PON 2.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPPoE+Server+Interface&font=roboto'
      },
      {
        id: 'olt-6',
        title: '6. NAT & Firewall',
        description: 'Langkah terakhir, pastikan pelanggan fiber bisa mengakses internet.',
        guiInstructions: [
          'IP -> Firewall -> NAT -> (+)',
          'Chain: srcnat',
          'Src. Address: 10.20.0.0/22 (Network Fiber)',
          'Out. Interface: ether1-internet (WAN Utama)',
          'Action: masquerade'
        ],
        cliCommand: `/ip firewall nat add chain=srcnat src-address=10.20.0.0/22 out-interface=ether1-internet action=masquerade comment="NAT Pelanggan Fiber"`,
        explanation: 'Tanpa NAT, pelanggan hanya bisa connect ke router tapi tidak bisa browsing Google/YouTube.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+NAT+Src+Address+Masquerade&font=roboto'
      }
    ]
  },
  {
    id: 'master-vlan-filtering',
    title: 'Master VLAN: Konsep & Implementasi (Bridge VLAN Filtering)',
    category: 'Advanced Config',
    difficulty: 'Expert',
    steps: [
      {
        id: 'vlan-c1',
        title: '1. Konsep Dasar VLAN & PVID',
        description: 'VLAN (Virtual LAN) memecah satu switch fisik menjadi beberapa broadcast domain terisolasi. Ini seperti memiliki 2 switch dalam 1 alat. Kita akan menggunakan metode "Bridge VLAN Filtering".',
        guiInstructions: [
          'Access Port (Untagged): Port yang terhubung ke perangkat akhir (PC, Laptop, CCTV). Perangkat ini tidak mengerti VLAN. Router akan menempelkan label VLAN (PVID) saat paket masuk, dan melepasnya saat paket keluar.',
          'Trunk Port (Tagged): Port penghubung antar perangkat jaringan (Switch-to-Switch, Router-to-AP). Paket dikirim beserta label VLAN-nya agar bisa dibedakan di ujung sana.',
          'Bridge VLAN Filtering: Fitur hardware offload modern yang memungkinkan switch chip MikroTik memproses VLAN tanpa membebani CPU.'
        ],
        cliCommand: `# Tidak ada command konfigurasi di tahap ini, hanya pemahaman konsep.
# Skenario kita: 
# VLAN 10 (Office) -> ether2 (PC Kantor)
# VLAN 20 (Guest) -> ether3 (AP Tamu)
# Trunk Uplink -> ether5 (Ke Switch lain)`,
        explanation: 'Kesalahan umum pemula adalah membuat "Interface VLAN" pada port fisik (metode lama). Pada metode baru, kita hanya main di menu Bridge > Ports dan Bridge > VLANs.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=Diagram:+VLAN+Trunk+vs+Access&font=roboto'
      },
      {
        id: 'vlan-c2',
        title: '2. Persiapan Bridge',
        description: 'Membuat satu bridge utama yang akan menampung semua port. Jangan aktifkan filtering dulu agar tidak terkunci.',
        guiInstructions: [
          'Menu Bridge -> Tab Bridge -> (+)',
          'Name: bridge-vlan',
          'VLAN Filtering: Uncheck (Jangan dicentang dulu!)',
          'Klik OK'
        ],
        cliCommand: `/interface bridge add name=bridge-vlan vlan-filtering=no`,
        explanation: 'Bridge ini akan menjadi "Switch Virtual" kita. Semua port fisik (ether2, ether3, ether5) akan dimasukkan ke sini nanti.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Bridge+Create+No+Filtering&font=roboto'
      },
      {
        id: 'vlan-c3',
        title: '3. Konfigurasi Access Port (Untagged)',
        description: 'Menghubungkan PC/Laptop ke VLAN tertentu. Kita set PVID di sini.',
        guiInstructions: [
          'Menu Bridge -> Tab Ports -> (+)',
          'Interface: ether2',
          'Bridge: bridge-vlan',
          'PVID: 10 (Ini akan jadi port VLAN 10)',
          'Klik OK',
          'Ulangi untuk ether3 dengan PVID 20'
        ],
        cliCommand: `/interface bridge port add bridge=bridge-vlan interface=ether2 pvid=10 comment="Access VLAN 10 Office"
/interface bridge port add bridge=bridge-vlan interface=ether3 pvid=20 comment="Access VLAN 20 Guest"`,
        explanation: 'Saat PC di ether2 mengirim data, Router otomatis memberi stempel "VLAN 10". Saat router membalas ke PC, stempel dicopot.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Bridge+Port+PVID+Setting&font=roboto'
      },
      {
        id: 'vlan-c4',
        title: '4. Konfigurasi Trunk Port (Tagged)',
        description: 'Menghubungkan ke Switch Manageable lain atau AP. Port ini membawa paket VLAN 10 dan 20.',
        guiInstructions: [
          'Menu Bridge -> Tab Ports -> (+)',
          'Interface: ether5',
          'Bridge: bridge-vlan',
          'PVID: 1 (Biarkan default 1 untuk Trunk)',
          'Klik OK'
        ],
        cliCommand: `/interface bridge port add bridge=bridge-vlan interface=ether5 pvid=1 comment="Trunk Uplink"`,
        explanation: 'Untuk trunk, PVID biasanya dibiarkan 1 (Native VLAN). Kita akan mendefinisikan tagged VLAN di langkah berikutnya.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Bridge+Port+Trunk&font=roboto'
      },
      {
        id: 'vlan-c5',
        title: '5. Mendaftarkan VLAN (Bridge VLAN Table)',
        description: 'Mendefinisikan aturan: VLAN X boleh lewat port mana saja (Tagged/Untagged).',
        guiInstructions: [
          'Menu Bridge -> Tab VLANs -> (+)',
          'Bridge: bridge-vlan',
          'VLAN ID: 10',
          'Tagged: ether5 (Trunk), bridge-vlan (CPU - Wajib agar router bisa akses VLAN ini)',
          'Untagged: (Biarkan kosong, router otomatis deteksi dari PVID di langkah 3)',
          'Klik OK. Ulangi untuk VLAN 20.'
        ],
        cliCommand: `/interface bridge vlan add bridge=bridge-vlan tagged=bridge-vlan,ether5 vlan-ids=10
/interface bridge vlan add bridge=bridge-vlan tagged=bridge-vlan,ether5 vlan-ids=20`,
        explanation: 'PENTING: Anda harus menambahkan interface "bridge-vlan" ke dalam daftar Tagged jika Anda ingin RouterMikrotik memiliki IP Address di VLAN tersebut (Inter-VLAN Routing).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Bridge+VLANs+Table&font=roboto'
      },
      {
        id: 'vlan-c6',
        title: '6. Inter-VLAN Routing (Layer 3)',
        description: 'Agar VLAN 10 dan 20 bisa internetan atau saling ping, kita buat Interface VLAN virtual yang menempel di Bridge.',
        guiInstructions: [
          'Menu Interfaces -> VLAN -> (+)',
          'Name: vlan10-office, VLAN ID: 10, Interface: bridge-vlan (Pilih Bridge, BUKAN ether!)',
          'Ulangi untuk VLAN 20',
          'Menu IP -> Addresses -> Beri IP untuk vlan10-office (misal 192.168.10.1/24)'
        ],
        cliCommand: `/interface vlan add interface=bridge-vlan name=vlan10-office vlan-id=10
/interface vlan add interface=bridge-vlan name=vlan20-guest vlan-id=20

/ip address add address=192.168.10.1/24 interface=vlan10-office
/ip address add address=192.168.20.1/24 interface=vlan20-guest`,
        explanation: 'Di metode lama, Interface VLAN ditempel di ether fisik. Di metode baru, Interface VLAN ditempel di Interface Bridge.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Interface+VLAN+on+Bridge&font=roboto'
      },
      {
        id: 'vlan-c7',
        title: '7. Aktivasi & Pengujian',
        description: 'Langkah terakhir dan paling berisiko. Aktifkan VLAN Filtering. Pastikan Anda terhubung via MAC Address atau lewat port Management (bukan port VLAN) jaga-jaga terputus.',
        guiInstructions: [
          'Menu Bridge -> Double click bridge-vlan',
          'Tab VLAN -> Centang VLAN Filtering',
          'Klik OK'
        ],
        cliCommand: `/interface bridge set bridge-vlan vlan-filtering=yes`,
        explanation: 'Setelah aktif, port access (ether2) hanya akan menerima paket dari VLAN 10. Port trunk (ether5) akan mengirim paket dengan tag.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Enable+VLAN+Filtering&font=roboto'
      }
    ]
  },
  {
    id: 'web-proxy-setup',
    title: 'Setup Web Proxy (Transparent Mode & Blocking)',
    category: 'Management',
    difficulty: 'Intermediate',
    steps: [
      {
        id: 'wp-1',
        title: '1. Mengaktifkan Web Proxy',
        description: 'Aktifkan layanan Web Proxy internal router. Layanan ini berjalan di port standar 8080.',
        guiInstructions: [
          'Menu IP -> Web Proxy',
          'Tab General -> Centang "Enabled"',
          'Port: 8080',
          'Cache Administrator: admin@sekolah.sch.id (Ganti sesuai identitas)',
          'Cache On Disk: Centang jika ingin menyimpan cache di storage (tidak disarankan untuk RB dengan storage kecil)',
          'Klik OK'
        ],
        cliCommand: `/ip proxy set enabled=yes port=8080 cache-administrator="admin@sekolah.sch.id"`,
        explanation: 'Web Proxy berfungsi sebagai perantara antara client dan internet. Router akan memproses request HTTP dari client.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Enable+Web+Proxy&font=roboto'
      },
      {
        id: 'wp-2',
        title: '2. Transparent Proxy (NAT Redirect)',
        description: 'Agar user tidak perlu setting proxy manual di browser, kita belokkan trafik port 80 ke port 8080 secara transparan.',
        guiInstructions: [
          'Menu IP -> Firewall -> NAT -> (+)',
          'Chain: dstnat',
          'Protocol: tcp, Dst. Port: 80',
          'In. Interface: ether2-lan (Interface menuju Client)',
          'Tab Action -> Action: redirect, To Ports: 8080',
          'Klik OK'
        ],
        cliCommand: `/ip firewall nat add chain=dstnat protocol=tcp dst-port=80 in-interface=ether2-lan action=redirect to-ports=8080 comment="Transparent Proxy"`,
        explanation: 'Rule ini "membajak" trafik browsing HTTP dan memaksanya masuk ke engine Proxy router. PENTING: Hanya bekerja untuk HTTP (Port 80), tidak bisa untuk HTTPS (Port 443).',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+NAT+Redirect+Rule&font=roboto'
      },
      {
        id: 'wp-3',
        title: '3. Blokir Situs & File (Access Rules)',
        description: 'Memblokir akses ke website tertentu atau tipe file tertentu (misal .mp3, .exe).',
        guiInstructions: [
          'Menu IP -> Web Proxy -> Access',
          'Klik (+)',
          'Dst. Host: *playboy* (blokir kata kunci playboy)',
          'Action: deny',
          'Klik OK',
          'Klik (+) lagi',
          'Path: *.mp3',
          'Action: deny',
          'Klik OK'
        ],
        cliCommand: `/ip proxy access
add dst-host=*playboy* action=deny comment="Blokir Situs Dewasa"
add path=*.mp3 action=deny comment="Blokir Download MP3"
add path=*.exe action=deny comment="Blokir Download EXE"`,
        explanation: 'Tanda bintang (*) adalah wildcard. Rule dibaca dari atas ke bawah. Jika cocok, rule dijalankan dan rule di bawahnya diabaikan.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+Proxy+Access+Rules&font=roboto'
      }
    ]
  },
  {
    id: 'pppoe-public-ip',
    title: 'Distribusi IP Public via PPPoE (Tanpa NAT)',
    category: 'Advanced Config',
    difficulty: 'Expert',
    steps: [
      {
        id: 'pub-1',
        title: '1. Skenario & Persiapan IP Pool',
        description: 'Digunakan jika Anda memiliki alokasi IP Public dari APJII/ISP dan ingin memberikannya langsung ke router pelanggan. Pelanggan tidak akan terkena NAT ganda.',
        guiInstructions: [
          'Menu IP -> Pool -> (+)',
          'Name: pool-public-wan',
          'Ranges: 203.0.113.2-203.0.113.62 (Sesuaikan dengan subnet IP Public Anda)',
          'Klik OK'
        ],
        cliCommand: `/ip pool add name=pool-public-wan ranges=203.0.113.2-203.0.113.62`,
        explanation: 'Pastikan IP 203.0.113.1 dipasang di interface Loopback atau Bridge sebagai Gateway.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+IP+Pool+Public+Setup&font=roboto'
      },
      {
        id: 'pub-2',
        title: '2. Konfigurasi PPP Profile',
        description: 'Membuat profil PPPoE yang meminjamkan IP Public.',
        guiInstructions: [
          'Menu PPP -> Profiles -> (+)',
          'Name: profile-public',
          'Local Address: 203.0.113.1 (Gateway IP Public Router)',
          'Remote Address: pool-public-wan',
          'DNS Server: 8.8.8.8 (Atau DNS IP Public sendiri)',
          'Rate Limit: 50M/50M (Sesuai paket)',
          'Klik OK'
        ],
        cliCommand: `/ppp profile add name=profile-public local-address=203.0.113.1 remote-address=pool-public-wan dns-server=8.8.8.8 rate-limit=50M/50M`,
        explanation: 'Saat client connect, mereka akan mendapat IP 203.0.113.x/32. Routing ke internet akan terjadi tanpa NAT.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+PPP+Profile+Public+IP&font=roboto'
      },
      {
        id: 'pub-3',
        title: '3. Bypass NAT (PENTING)',
        description: 'Agar IP Public tidak terkena Masquerade (menjadi IP Router), kita harus mengecualikannya dari aturan NAT.',
        guiInstructions: [
          'Menu IP -> Firewall -> NAT',
          'Buat Rule Baru (+)',
          'Chain: srcnat',
          'Src. Address: 203.0.113.0/26 (Subnet IP Public Client)',
          'Action: accept',
          'Klik OK',
          'Pindahkan rule ini ke URUTAN NOMOR 0 (Paling Atas)'
        ],
        cliCommand: `/ip firewall nat add chain=srcnat src-address=203.0.113.0/26 action=accept comment="Bypass NAT for Public IP" place-before=0`,
        explanation: 'Action "accept" di chain srcnat berarti "Jangan lakukan apa-apa, biarkan lewat as-is". Jika tidak ada rule ini, IP Client akan tertutup oleh Masquerade router utama.',
        imageUrl: 'https://placehold.co/800x450/e2e8f0/1e293b?text=WinBox:+NAT+Accept+Rule&font=roboto'
      }
    ]
  }
];
    