import { FAQItem } from '../types';

export const MIKROTIK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Winbox tidak bisa connect via MAC Address',
    answer: 'Pastikan PC dan Mikrotik terhubung langsung atau melalui switch layer 2 yang sama. Matikan firewall atau antivirus di PC yang mungkin memblokir port UDP 20561 (MNDP). Coba nonaktifkan adapter jaringan virtual (VirtualBox/VMware) yang mungkin mengganggu discovery.',
    category: 'Troubleshooting'
  },
  {
    id: 'faq-2',
    question: 'Lupa password admin Mikrotik',
    answer: 'Jika tidak ada backup user lain, satu-satunya cara adalah melakukan Hard Reset (tombol fisik) atau Netinstall. Ini akan menghapus seluruh konfigurasi router. Pastikan untuk selalu membackup konfigurasi Anda secara berkala.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'Cara reset konfigurasi ke pengaturan pabrik',
    answer: 'Via CLI: ketik `/system reset-configuration`. Via fisik: Cabut power, tekan tahan tombol reset, colok power, tunggu hingga lampu ACT berkedip, lalu lepas tombol reset.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'Internet lambat padahal bandwidth besar',
    answer: 'Cek penggunaan CPU di `/system resource monitor`. Jika CPU 100%, router mungkin overload. Cek apakah ada Simple Queue yang membatasi bandwidth. Pastikan rule "Fasttrack" aktif di `/ip firewall filter` untuk mempercepat forwarding paket.',
    category: 'Troubleshooting'
  },
  {
    id: 'faq-5',
    question: 'Cara mengamankan Router dari serangan Bruteforce',
    answer: '1. Matikan service yang tidak perlu di menu IP -> Services (seperti www, ftp, telnet). 2. Ubah port default SSH dan Winbox. 3. Gunakan password yang kuat. 4. Batasi akses manajemen hanya dari IP tertentu di menu IP -> Services -> Available From.',
    category: 'Security'
  },
  {
    id: 'faq-6',
    question: 'Jam di Router tidak sesuai (NTP)',
    answer: 'MikroTik tidak memiliki baterai RTC (kecuali beberapa tipe). Anda perlu mengaktifkan NTP Client. Masuk ke System -> SNTP Client, centang Enabled, isi Primary NTP Server dengan `id.pool.ntp.org`. Pastikan juga Timezone benar di System -> Clock.',
    category: 'General'
  },
  {
    id: 'faq-7',
    question: 'Apa bedanya Chain Input, Output, dan Forward?',
    answer: '**Input**: Paket yang ditujukan ke router itu sendiri (contoh: login Winbox, ping ke router). **Output**: Paket yang berasal dari router itu sendiri (contoh: router ping ke google). **Forward**: Paket yang melewati router (contoh: client LAN browsing internet).',
    category: 'General'
  },
  {
    id: 'faq-8',
    question: 'Kenapa script scheduler tidak jalan?',
    answer: 'Pastikan user policy pada script memiliki permissions yang cukup (read, write, test, policy). Periksa interval schedule dan pastikan jam router (NTP) sudah sinkron.',
    category: 'Troubleshooting'
  }
];