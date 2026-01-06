
import { Lecturer } from './types';

export const RAW_CSV_DATA = `DOSEN;NM_MATA_KULIAH;TAHUN_AJARAN;GROUP_SEMESTER;NIP_DOSEN;NM_STATUS_KEPEGAWAIAN;NM_JABATAN_FUNGSIONAL
ABDUL RAHEM;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196602052014091001;PNS;Lektor
ACHMAD CHUSAIRI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197501311999031002;PNS;Lektor
ADITEA ETNAWATI PUTRI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198310142010122002;PNS;Asisten Ahli
ALFINDA NOVI KRISTANTI;Kimia Dasar;2025/2026;Ganjil;196711151991022001;PNS;Guru Besar
ALI ROHMAN;Kimia Dasar;2025/2026;Ganjil;196808071994031003;PNS;Lektor Kepala
ALPHA FARDAH ATHIYYAH;Etika dan Hukum Kesehatan;2025/2026;Ganjil;197308232005012001;PNS;Lektor Kepala
ANDRI SETIYA WAHYUDI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198206192015041001;PNS;Lektor
ANING PURWANINGSIH;Kimia Dasar;2025/2026;Ganjil;196603101991022001;PNS;Lektor Kepala
ANITA KURNIATI;Kimia Dasar;2025/2026;Ganjil;198209132016033201;TETAP NON PNS;Asisten Ahli
ANJAR TRI WIBOWO;Biologi Dasar;2025/2026;Ganjil;198607252019083101;TETAP NON PNS;Lektor
ANWAR MA RUF;Kewarganegaraan;2025/2026;Ganjil;196509051993031004;PNS;Guru Besar
ARI PRASETYO;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197101162005011002;PNS;Lektor Kepala
ARIF HABIB FASYA;Agama Islam 1;2025/2026;Ganjil;198511062015041001;PNS;Lektor
ARIFA MUSTIKA;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;197009151998022001;PNS;Guru Besar
ASTIKA GITA NINGRUM;Etika dan Hukum Kesehatan;2025/2026;Ganjil;199002262018032001;PNS;Asisten Ahli
AYIK MIRAYANTI MANDAGI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198801222015042002;PNS;Lektor
Adam Muhshi;Pancasila;2025/2026;Ganjil;198210042006041015;PNS;Lektor
Ahmad Syauqi;Agama Islam 1;2025/2026;Ganjil;199012232024023101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Anestasia Pangestu Mei Tyas;Etika dan Hukum Kesehatan;2025/2026;Ganjil;198805182019032018;PNS;Lektor
Anisa Nur Halimah;Biologi Dasar;2025/2026;Ganjil;199001242022013201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Arif Rahman Hakim;Data dan Pustaka;2025/2026;Ganjil;198502042023103101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Arindita Niatazya Novianti;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;199211122023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Astri Dewayani;Etika dan Hukum Kesehatan;2025/2026;Ganjil;199209202020063201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Aziz Nashiruddin Habibie;Agama Islam 1;2025/2026;Ganjil;199605132023103101;TETAP NON PNS;Belum Punya Jabatan Fungsional
BAMBANG PURWANTO;Agama Islam 1;2025/2026;Ganjil;198008282006041002;PNS;Guru Besar
BRIAN EKA RACHMAN;Data dan Pustaka;2025/2026;Ganjil;198606262015041003;PNS;Lektor
Bani Bacan Hacantya Yudanagara;Kewarganegaraan;2025/2026;Ganjil;199109042022013201;TETAP NON PNS;Asisten Ahli
Bian Shabri Putri Irwanto;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199702012023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
CANDRA PANJI ASMORO;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198706032019031009;PNS;Asisten Ahli
CHOLICHUL HADI;Pancasila;2025/2026;Ganjil;196403231989031002;PNS;Guru Besar
DANI NASIRUL HAQI;Data dan Pustaka;2025/2026;Ganjil;198711112015041005;PNS;Lektor
DEDDY KURNIAWANSYAH;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198909232016113101;TETAP NON PNS;Lektor
DESSY HARISANTY;Data dan Pustaka;2025/2026;Ganjil;198412152009122007;PNS;Guru Besar
DEWI RATNA SARI;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198306282009122006;PNS;Lektor Kepala
DEWI RETNO SUMINAR;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;196703131991032002;PNS;Lektor Kepala
DIAH ARIANI ARIMBI;Pancasila;2025/2026;Ganjil;197004051994032003;PNS;Guru Besar
DIAN YULIE REINDRAWATI;Data dan Pustaka;2025/2026;Ganjil;197607071999032001;PNS;Guru Besar
DINI SETYOWATI;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198412082008012004;PNS;Lektor Kepala
DJOKO ADI PRASETYO;Kewarganegaraan;2025/2026;Ganjil;196211161989031001;PNS;Lektor Kepala
DWI HANDAYANI;Bahasa Indonesia;2025/2026;Ganjil;196702161992032001;PNS;Lektor Kepala
DWI KUSUMA WAHYUNI;Biologi Dasar;2025/2026;Ganjil;197701152006042002;PNS;Lektor
DWI SETIANI SUMARDIKO;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199012032019032020;PNS;Asisten Ahli
DYAH PUSPITASARI SRIRAHAYU;Data dan Pustaka;2025/2026;Ganjil;197905152007012001;PNS;Lektor Kepala
Danang Dwi Atmojo;Agama Islam 1;2025/2026;Ganjil;198706282023113101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Dananti Kusumawindani;Kewarganegaraan;2025/2026;Ganjil;199112022024062001;PNS;Belum Punya Jabatan Fungsional
Dina Utami;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197804102024083201;CALON TETAP NON PNS;Belum Punya Jabatan Fungsional
EDUARDUS BIMO AKSONO HERUPRADOTO;Logika dan Pemikiran Kritis;2025/2026;Ganjil;196609201992031003;PNS;Guru Besar
EIGHTY MARDIYAN KURNIAWATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197708142005012001;PNS;Guru Besar
EKA SAPUTRA;Biologi Dasar;2025/2026;Ganjil;198610252015041002;PNS;Lektor
EMY KOESTANTI SABDONINGRUM;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197012101999032002;PNS;Lektor Kepala
ENI SUGIARTI;Kewarganegaraan;2025/2026;Ganjil;197011131998022001;PNS;Lektor Kepala
Elsha Sophia;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199203132022013201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Elva Farihah;Data dan Pustaka;2025/2026;Ganjil;198803122022013201;TETAP NON PNS;Asisten Ahli
Ervan Kus Indarto;Kewarganegaraan;2025/2026;Ganjil;198211252020103101;TETAP NON PNS;Asisten Ahli
FAISAL FIKRI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198812082015041003;PNS;Lektor
FANNI OKVIASANTI;Data dan Pustaka;2025/2026;Ganjil;198604082009122003;PNS;Lektor
FARIED EFFENDY;Data dan Pustaka;2025/2026;Ganjil;198206062007101001;PNS;Lektor
FRANKY CHANDRA SATRIA ARISGRAHA;Agama Islam 1;2025/2026;Ganjil;198301282009121004;PNS;Lektor
HAMIDAH;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;196306101987012001;PNS;Lektor Kepala
HANDOKO DARMOKOESOEMO;Kimia Dasar;2025/2026;Ganjil;196211021988101001;PNS;Lektor Kepala
HANIK ENDANG NIHAYATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197606162014092006;PNS;Lektor
HARI SOEPRIANDONO;Biologi Dasar;2025/2026;Ganjil;196711221994121001;PNS;Lektor
HARMAYETTY;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197004102000122001;PNS;Lektor
HARTATI;Kimia Dasar;2025/2026;Ganjil;195911151987032002;PNS;Guru Besar
HAYURIS KINANDITA SETIAWAN;Data dan Pustaka;2025/2026;Ganjil;198206072008122003;PNS;Lektor
HERDINA INDRIJATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197203211997022001;PNS;Lektor Kepala
Heny Arwati;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;196402291991022001;PNS;Guru Besar
Herman Bagus Dwicahyo;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;199312272023103101;TETAP NON PNS;Belum Punya Jabatan Fungsional
IKA NUR PRATIWI;Pancasila;2025/2026;Ganjil;198711022015042003;PNS;Lektor
ILHAM NUR ALFIAN;Data dan Pustaka;2025/2026;Ganjil;197609012003121001;PNS;Lektor
INDAH LUTFIYA;Data dan Pustaka;2025/2026;Ganjil;199310122019032017;PNS;Asisten Ahli
IQLIMA DWI KURNIA;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198601252016113201;TETAP NON PNS;Lektor
IRA NURMALA;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197710172003122001;PNS;Guru Besar
IRA SUARILAH;Data dan Pustaka;2025/2026;Ganjil;197708012014092002;PNS;Lektor
IZZATO MILLATI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198606032014093201;TETAP NON PNS;Lektor
Iswatun;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197203311994032004;PNS;Lektor
JAYANTI DIAN EKA SARI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198409172015043201;TETAP NON PNS;Lektor
JIWANGGA HADI NATA;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198601172018083101;TETAP NON PNS;Asisten Ahli
JUNAIRIAH;Data dan Pustaka;2025/2026;Ganjil;197107142002122002;PNS;Lektor Kepala
KHULIYAH CANDRANING DIYANAH;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198611102012122002;PNS;Lektor
Khotibul Umam;Etika dan Hukum Kesehatan;2025/2026;Ganjil;197308231998031008;PNS;Lektor Kepala
Kurnia Alisaputri;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198707132023113201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Kusuma Scorpia Lestari;Data dan Pustaka;2025/2026;Ganjil;198011072008122003;PNS;Lektor
LASTIKO ENDI RAHMANTYO;Kewarganegaraan;2025/2026;Ganjil;198302112014041001;PNS;Lektor
LESTARI SUDARYANTI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197507012005012008;PNS;Lektor
LILLA MUSYAHDA;Logika dan Pemikiran Kritis;2025/2026;Ganjil;196612102007012001;PNS;Lektor
LYNDA ROSSYANTI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198205092012122002;PNS;Asisten Ahli
Langgeng Agung Waskito;Etika dan Hukum Kesehatan;2025/2026;Ganjil;199008282021093101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Lingga Curnia Dewi;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;199012162024062002;PNS;Asisten Ahli
Lukman Danu Saputra;Data dan Pustaka;2025/2026;Ganjil;198508182023113101;TETAP NON PNS;Belum Punya Jabatan Fungsional
M. GANDUL ATIK YULIANI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197107161999032001;PNS;Lektor
MAHMUD ADITYA RIFQI;Data dan Pustaka;2025/2026;Ganjil;198812072015041003;PNS;Lektor
MAKHFUDLI;Etika dan Hukum Kesehatan;2025/2026;Ganjil;197902122014091003;PNS;Lektor Kepala
MANIK RETNO WAHYUNITISARI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;196605211997022001;PNS;Lektor Kepala
MARDHAYU WULAN SARI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198502042008122004;PNS;Asisten Ahli
MASLICHAH MAFRUCHATI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;196204101988032001;PNS;Lektor Kepala
MAYA NURWARTANTI Y.;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199006262015043201;TETAP NON PNS;Lektor
MIYAYU SONETA SOFYAN;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197602222015043201;TETAP NON PNS;Lektor
MOCH. JALAL;Bahasa Indonesia;2025/2026;Ganjil;196908101997021001;PNS;Lektor Kepala
MOCHAMAD ALI;Agama Islam 1;2025/2026;Ganjil;197210011998021001;PNS;Lektor Kepala
MOCHAMAD ZAKKI FAHMI;Kimia Dasar;2025/2026;Ganjil;198307022009121005;PNS;Guru Besar
MOCHTAR LUTFI;Bahasa Indonesia;2025/2026;Ganjil;196810041998021001;PNS;Lektor Kepala
MOH. NASIH;Agama Islam 1;2025/2026;Ganjil;196508061992031002;PNS;Guru Besar
MUHAMMAD ADIB;Kewarganegaraan;2025/2026;Ganjil;196011281988121001;PNS;Guru Besar
MUHAMMAD HILMAN FUADIL AMIN;Biologi Dasar;2025/2026;Ganjil;198712032015041005;PNS;Lektor
MUTHMAINNAH;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198806212015042005;PNS;Lektor
Maria Agustina Pardede;Agama Kristen Protestan 1;2025/2026;Ganjil;199708162023023201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Mhd. Zamal Nasution;Data dan Pustaka;2025/2026;Ganjil;198111272022013101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Mirza Ardella Saputra;Kimia Dasar;2025/2026;Ganjil;198512302022103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Muhammad Aldo Setiawan;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;199207142020073101;TETAP NON PNS;Asisten Ahli
Muhammad Irvan Avandi;Agama Islam 1;2025/2026;Ganjil;198808012023113101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Muhammad Surya Negara;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198703232023113101;TETAP NON PNS;Belum Punya Jabatan Fungsional
NANIK HIDAYATIK;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199003162019083201;TETAP NON PNS;Lektor
NEFFRETY NILAMSARI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197307191999032001;PNS;Lektor
NI NYOMAN PURWANI;Kimia Dasar;2025/2026;Ganjil;198410092016033201;TETAP NON PNS;Asisten Ahli
NIMATUZAHROH;Biologi Dasar;2025/2026;Ganjil;196801051992032003;PNS;Guru Besar
NINUK DIAN K.;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197703162005012001;PNS;Lektor
NUR AINI HIDAYATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197206282005012001;PNS;Lektor
NUR AINY FARDANA NAWANGSARI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197202271998022001;PNS;Lektor Kepala
NUR EMMA SURIANI;Data dan Pustaka;2025/2026;Ganjil;197512232003122001;PNS;Lektor
NURMAWATI FATIMAH;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198008172008012016;PNS;Lektor
NURUL FITRIYAH;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197511212005012002;PNS;Lektor
NURUL WIQOYAH;Pancasila;2025/2026;Ganjil;196409061991022001;PNS;Lektor
NUZUL QUR'ANIATI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197802082014092001;PNS;Lektor
Narta Nikita Sari;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198909212023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Nauvila Fitrotul 'Aini;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199211172023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Nimas Resti Panganggit;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198906142024083201;CALON TETAP NON PNS;Belum Punya Jabatan Fungsional
Nina Amalia;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199404122024053201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Noviyanti Eka Wardani;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198011092023113201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Nuri Hermawan;Bahasa Indonesia;2025/2026;Ganjil;199304292018013101;TETAP NON PNS;Belum Punya Jabatan Fungsional
PIRLINA UMIASTUTI;Etika dan Hukum Kesehatan;2025/2026;Ganjil;196807181997022001;PNS;Asisten Ahli
PRABA DIYAN RACHMAWATI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198611092015042002;PNS;Lektor
PRADANA ZAKY ROMADHON;Etika dan Hukum Kesehatan;2025/2026;Ganjil;198405292014041001;PNS;Lektor Kepala
PRADIPTO NIWANDHONO;Pancasila;2025/2026;Ganjil;198103062008011006;PNS;Asisten Ahli
PRATIWI PUDJIASTUTI;Kimia Dasar;2025/2026;Ganjil;196102051986012001;PNS;Guru Besar
PRIHARTINI WIDIYANTI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197502222009122001;PNS;Guru Besar
PUJO SAKTI NUR CAHYO;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198509232015041003;PNS;Asisten Ahli
PULUNG SISWANTARA;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198204242005011001;PNS;Lektor
Probo Darono Yakti;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199507152022013101;TETAP NON PNS;Asisten Ahli
R. MOH. QUDSI FAUZI;Agama Islam 1;2025/2026;Ganjil;196412212007011001;PNS;Lektor Kepala
RADEN ARGARINI;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198202042008012015;PNS;Lektor Kepala
RATIH NOVITA PRAJA;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198911062015043201;TETAP NON PNS;Lektor
RATNA DAMAYANTI;Kewarganegaraan;2025/2026;Ganjil;196609261994032001;PNS;Lektor
RATNA DWI JAYANTI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198510042020033201;TETAP NON PNS;Asisten Ahli
RATNA WAHYUNI;Biologi Dasar;2025/2026;Ganjil;197912192016043201;TETAP NON PNS;Asisten Ahli
RENY I'TISHOM;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197110232002121001;PNS;Lektor Kepala
RETNO INDARWATI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197803162008122002;PNS;Lektor
RIMA FIRDAUS;Bahasa Indonesia;2025/2026;Ganjil;198912242022013201;TETAP NON PNS;Asisten Ahli
RINI DEVIJANTI RIDWAN;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;196412161990022001;PNS;Guru Besar
ROCHMAH KURNIJASANTI;Pancasila;2025/2026;Ganjil;197007191996032002;PNS;Lektor Kepala
RR DIAN TRISTIANA;Etika dan Hukum Kesehatan;2025/2026;Ganjil;198705022015042002;PNS;Lektor
RUSTINSYAH;Pancasila;2025/2026;Ganjil;195812051984032002;PNS;Guru Besar
Raden Joko Kuncoroningrat Susilo;Biologi Dasar;2025/2026;Ganjil;199506232022103101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Ratna Dwi Puji Astuti;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;199408032024062001;PNS;Belum Punya Jabatan Fungsional
Regitta Indira Agusni;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198705252021093201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Rifky Octavia Pradipta;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199310192022013101;TETAP NON PNS;Asisten Ahli
Rindah Febriana Suryawati;Data dan Pustaka;2025/2026;Ganjil;197802012003122002;PNS;Lektor Kepala
Rini Hamsidi;Data dan Pustaka;2025/2026;Ganjil;198107052008122002;PNS;Lektor Kepala
Rizki Amalia;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199102282023113201;TETAP NON PNS;Belum Punya Jabatan Fungsional
SALAMUN;Biologi Dasar;2025/2026;Ganjil;196111101987031003;PNS;Guru Besar
SAMSRIYANINGSIH HANDAYANI;Data dan Pustaka;2025/2026;Ganjil;196506291994122001;PNS;Lektor
SATRIYO DWI SURYANTORO;Etika dan Hukum Kesehatan;2025/2026;Ganjil;198401272014041001;PNS;Lektor
SIANIWATI GOENHARTO;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196112121986012001;PNS;Lektor Kepala
SISCA MEIDA WATI;Data dan Pustaka;2025/2026;Ganjil;198805192012122002;PNS;Asisten Ahli
SITI ELIANA ROCHMI;Pancasila;2025/2026;Ganjil;199110152015043201;TETAP NON PNS;Lektor
SITI INAYATUL FAIZAH;Agama Islam 1;2025/2026;Ganjil;197404282007012002;PNS;Asisten Ahli
SITI KHAERUNNISA;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198804262019113201;TETAP NON PNS;Lektor
SITI NURAINI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198304212015043201;TETAP NON PNS;Lektor
SITI RAHAYU NADHIROH;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197505312006042001;PNS;Lektor Kepala
SRI WIDATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197701162005012002;PNS;Lektor Kepala
SUCIPTO HARIYANTO;Biologi Dasar;2025/2026;Ganjil;195609022022046101;KHUSUS;Guru Besar
SUCIYONO;Kewarganegaraan;2025/2026;Ganjil;198807222014093101;TETAP NON PNS;Lektor
SUGIHARTO;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197003011994121001;PNS;Lektor Kepala
SUKMAWATI BASUKI;Etika dan Hukum Kesehatan;2025/2026;Ganjil;196502051996012001;PNS;Lektor
SULISTIAWATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196502281990032002;PNS;Lektor Kepala
SUSY KATIKANA SEBAYANG;Data dan Pustaka;2025/2026;Ganjil;197303052015043201;TETAP NON PNS;Lektor
Shafira Meidyana;Data dan Pustaka;2025/2026;Ganjil;199305282023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Shinta Arta Mulia;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199508202023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Sri Musta'ina;Kewarganegaraan;2025/2026;Ganjil;196507232002122001;PNS;Lektor
TIKA WIDIASTUTI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198312302008122001;PNS;Guru Besar
TOKOK ADIARTO;Agama Kristen Protestan 1;2025/2026;Ganjil;196406291990021001;PNS;Lektor Kepala
TRIAS MAHMUDIONO;Data dan Pustaka;2025/2026;Ganjil;198103242003121001;PNS;Guru Besar
Terry Previo Avianto;Kewarganegaraan;2025/2026;Ganjil;199505222024061002;PNS;Belum Punya Jabatan Fungsional
VISKASARI PINTOKO KALANJATI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197603202005012003;PNS;Guru Besar
Valina Khiarin Nisa;Kewarganegaraan;2025/2026;Ganjil;199210272022013201;TETAP NON PNS;Asisten Ahli
WIDYA SYLVIANA;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198002072005012001;PNS;Lektor
WIWIN RETNOWATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196804091999032001;PNS;Lektor
Wahyu Firmandani;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199002162020073201;TETAP NON PNS;Lektor
Wahyuni Tri Lestari;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198707042020122007;PNS;Asisten Ahli
Winda Kusumawardani;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199309212022073201;TETAP NON PNS;Asisten Ahli
YANUARDI RAHARJO;Kimia Dasar;2025/2026;Ganjil;198401032012121005;PNS;Lektor Kepala
YUANI SETIAWATI;Etika dan Hukum Kesehatan;2025/2026;Ganjil;197806282005012002;PNS;Lektor
YUNIAS SETIAWATI;Data dan Pustaka;2025/2026;Ganjil;196212122016016201;KHUSUS;Lektor Kepala
Yoan Ary Wydianti;Data dan Pustaka;2025/2026;Ganjil;197705022023113201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Yuli Astuti;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;199007192024062001;PNS;Asisten Ahli
Yuli Puspita Devi;Data dan Pustaka;2025/2026;Ganjil;199607082024062001;PNS;Belum Punya Jabatan Fungsional
Zhaza Afililla;Etika dan Hukum Kesehatan;2025/2026;Ganjil;199509212024053201;TETAP NON PNS;Belum Punya Jabatan Fungsional
A SHOFY MUBARAK;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197311012001121002;PNS;Lektor Kepala
Annisa Rahma Febriyanti;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199802242023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Annisa Wulandari;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199805262023103101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Damai Arum Pratiwi;Data dan Pustaka;2025/2026;Ganjil;199206092023023201;TETAP NON PNS;Belum Punya Jabatan Fungsional
EDY SETITI WIDA UTAMI;Biologi Dasar;2025/2026;Ganjil;195704211984032003;PNS;Guru Besar
Nur Arifah Astri;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199601042023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
JOHNY ALFIAN KHUSYAIRI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197106201999031002;PNS;Lektor Kepala
KADEK RACHMAWATI;Kewarganegaraan;2025/2026;Ganjil;196807251997022001;PNS;Lektor
Sheila Maryam Gautama;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;199108252021093201;TETAP NON PNS;Belum Punya Jabatan Fungsional
ABU BAKAR;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198004272009121002;PNS;Lektor Kepala
BERLIANA DEVIANTI PUTRI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;199301132019032026;PNS;Lektor
Neisya Pratiwindya Sudarsiwi;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;199812032023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Muhammad Nazmuddin;Kewarganegaraan;2025/2026;Ganjil;199112072024023101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Salma Zulqaida;Pancasila;2025/2026;Ganjil;199504182023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Amillia Kartika Sari;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198405212020073201;TETAP NON PNS;Asisten Ahli
Arina Qona'ah;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198611242018032001;PNS;Lektor
ABDUL KHAIRUL RIZKI PURBA;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198402222008121004;PNS;Lektor Kepala
IMAM SISWANTO;Kimia Dasar;2025/2026;Ganjil;196809251993031001;PNS;Lektor
PURWO SRI REJEKI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197506122005012003;PNS;Lektor Kepala
KUSTIAWAN TRI PURSETYO;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198311062010121003;PNS;Asisten Ahli
KUSUMA EKO PURWANTARI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197801182010122001;PNS;Asisten Ahli
YOSSY IMAM CANDIKA;Pancasila;2025/2026;Ganjil;199011302016033101;TETAP NON PNS;Asisten Ahli
M. FARID DIMJATI LUSNO;Data dan Pustaka;2025/2026;Ganjil;197204242008121002;PNS;Lektor
ALFA AKUSTIA WIDATI;Kimia Dasar;2025/2026;Ganjil;198505052012122003;PNS;Lektor
ATINA SHOFAWATI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197709022008012012;PNS;Lektor
REBEKAH J.SETIABUDI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196606061997022001;PNS;Lektor Kepala
TRI WAHYU SUPRAYOGI;Pancasila;2025/2026;Ganjil;196304011990021001;PNS;Guru Besar
MUHAMMAD ATOILLAH ISFANDIARI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197603252003121002;PNS;Lektor
MUHAMMAD HANIF AZHAR;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198407182015041001;PNS;Asisten Ahli
ARIA AULIA NASTITI;Etika dan Hukum Kesehatan;2025/2026;Ganjil;198702232016113201;TETAP NON PNS;Lektor
BAMBANG TRI PURWANTO;Kewarganegaraan;2025/2026;Ganjil;195710061985031003;PNS;Guru Besar
SEPTA INDRA PUSPIKAWATI;Pancasila;2025/2026;Ganjil;198909292015042003;PNS;Lektor
RICO RAMADHAN;Kimia Dasar;2025/2026;Ganjil;198506182018083101;TETAP NON PNS;Lektor
Izmi Dwira Eriani;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199402082020013201;TETAP NON PNS;Asisten Ahli
Muhammad Browijoyo Santanumurti;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199111082018023101;TETAP NON PNS;Belum Punya Jabatan Fungsional
EDITH FREDERIKA PURUHITO;Etika dan Hukum Kesehatan;2025/2026;Ganjil;197912172015043201;TETAP NON PNS;Asisten Ahli
Radhi Bakarman;Agama Islam 1;2025/2026;Ganjil;197701242023113101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Rezi Delfianti;Data dan Pustaka;2025/2026;Ganjil;199609262023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
ASTARI PUTERI;Data dan Pustaka;2025/2026;Ganjil;199105202019032026;PNS;Asisten Ahli
SYAHRUR MARTA DWISUSILO;Kewarganegaraan;2025/2026;Ganjil;197603242002121001;PNS;Lektor Kepala
ANDINI DYAH SITAWATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198502142015042002;PNS;Asisten Ahli
JONI SUSANTO;Pancasila;2025/2026;Ganjil;196606151997021001;PNS;Asisten Ahli
FAHRUL MUZAQQI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198310072014041001;PNS;Lektor
TAUFIK;Logika dan Pemikiran Kritis;2025/2026;Ganjil;197101042008121001;PNS;Lektor
LAURA NAVIKA YAMANI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198601082018032001;PNS;Lektor Kepala
FATIN FADHILAH HASIB;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198212032009122003;PNS;Lektor
FATMA YASMIN MAHDANI;Data dan Pustaka;2025/2026;Ganjil;198812122015042001;PNS;Lektor
MUHAMMADUN;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198310272019031004;PNS;Asisten Ahli
NOVE HIDAJATI;Pancasila;2025/2026;Ganjil;196511151995032001;PNS;Lektor
Abimardha Kurniawan;Bahasa Indonesia;2025/2026;Ganjil;198603262022013101;TETAP NON PNS;Lektor
Sonny Kristianto;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198202012023023101;TETAP NON PNS;Lektor
HAPSARI KENCONOJATI;Kimia Dasar;2025/2026;Ganjil;198901202014093201;TETAP NON PNS;Lektor
TANIA ARDIANI SALEH;Biologi Dasar;2025/2026;Ganjil;196310061993032001;PNS;Asisten Ahli
WILLY SANDHIKA;Agama Kristen Protestan 1;2025/2026;Ganjil;196403141990021001;PNS;Lektor Kepala
ARI KURNIAWAN;Pancasila;2025/2026;Ganjil;198601112010121005;PNS;Asisten Ahli
IWAN SAHRIAL HAMID;Etika dan Hukum Kesehatan;2025/2026;Ganjil;196807131993031009;PNS;Guru Besar
HERU PRAMONO;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198609112014041001;PNS;Lektor
AMUNG LOGAM SAPUTRO;Kewarganegaraan;2025/2026;Ganjil;199004132015041001;PNS;Lektor
MOSES GLORINO RUMAMBO PANDIN;Data dan Pustaka;2025/2026;Ganjil;197011112007011002;PNS;Lektor
HARUM MUNAZHAROH;Bahasa Indonesia;2025/2026;Ganjil;198802142019032015;PNS;Asisten Ahli
LILIK DJUARI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;196503301997022001;PNS;Lektor Kepala
LILIK HERAWATI;Data dan Pustaka;2025/2026;Ganjil;197503142003122001;PNS;Lektor Kepala
MOCH. AFFANDI;Biologi Dasar;2025/2026;Ganjil;196404121991021001;PNS;Lektor Kepala
TIARA KUSUMANINGTIYAS;Pancasila;2025/2026;Ganjil;199207202019032027;PNS;Lektor
UPIK DYAH EKA NOVIYANTI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198411152016033201;TETAP NON PNS;Lektor
USMA NUR DIAN ROSYIDAH;Kewarganegaraan;2025/2026;Ganjil;198012012008122003;PNS;Asisten Ahli
MOCHAMMAD SOLEH;Agama Islam 1;2025/2026;Ganjil;198001132009101001;PNS;Lektor
ILYA KRISNANA;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198109282012122002;PNS;Lektor
MUCHAMMAD YUNUS;Logika dan Pemikiran Kritis;2025/2026;Ganjil;196612291993031001;PNS;Guru Besar
UMI FARICHAH BASCHA;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199008082019032023;PNS;Asisten Ahli
MUJI HARSINI;Kimia Dasar;2025/2026;Ganjil;196405021989032002;PNS;Guru Besar
FADILATUS SUKMA IKA NOVIARMI;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198907152016033201;TETAP NON PNS;Lektor
Ratnaningtyas Wahyu Kusuma Wardani;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199206092024062001;PNS;Belum Punya Jabatan Fungsional
PUJI KARYANTO;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196902031994031001;PNS;Lektor Kepala
Ajeng Rachma Pertiwi;Kewarganegaraan;2025/2026;Ganjil;198802212022013201;TETAP NON PNS;Asisten Ahli
Igo Syaiful Ihsan;Bahasa Indonesia;2025/2026;Ganjil;199202252024053101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Iif Hanifa Nurrosyidah;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198612312023103201;TETAP NON PNS;Lektor
Dewi Setyowati;Data dan Pustaka;2025/2026;Ganjil;199405222020073201;TETAP NON PNS;Asisten Ahli
Atika Anif Prameswari;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199601202023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
SUNAN FANANI;Agama Islam 1;2025/2026;Ganjil;197612252007011001;PNS;Asisten Ahli
SOFIATUN;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196509192006042001;PNS;Asisten Ahli
SOFIJAN HADI;Kimia Dasar;2025/2026;Ganjil;196507141992031001;PNS;Lektor Kepala
ESTI YUNITASARI;Kewarganegaraan;2025/2026;Ganjil;197706172003122002;PNS;Guru Besar
BAMBANG SUHARTO;Data dan Pustaka;2025/2026;Ganjil;197203032003121001;PNS;Guru Besar
Wimbuh Tri Widodo;Pancasila;2025/2026;Ganjil;199104092023023101;TETAP NON PNS;Lektor
MYRNA ADIANTI;Biologi Dasar;2025/2026;Ganjil;198203012016033201;TETAP NON PNS;Asisten Ahli
Meity Ardiana;Etika dan Hukum Kesehatan;2025/2026;Ganjil;197705052020096201;KHUSUS;Lektor
Ida Wijayanti;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199512112023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Wahyu Aditama Putra Mukti Wibawa;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198707222023103101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Manikya Pramudya;Biologi Dasar;2025/2026;Ganjil;199309232018083201;TETAP NON PNS;Asisten Ahli
SULISTYA RUSGIANTO;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197111012006041002;PNS;Lektor
HAFNA ILMY MUHALLA;Pancasila;2025/2026;Ganjil;197812202006042026;PNS;Lektor
Lintang Winantya Firdausy;Kewarganegaraan;2025/2026;Ganjil;199305252024053201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Waode Fifin Ervina Muslihi ;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199207102023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Suhailah;Biologi Dasar;2025/2026;Ganjil;199309032022103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
MAFTUCHAH ROCHMANTI;Etika dan Hukum Kesehatan;2025/2026;Ganjil;197408112003122001;PNS;Lektor
ENDYKA ERYE FRETY;Data dan Pustaka;2025/2026;Ganjil;198902202018032001;PNS;Asisten Ahli
Aditya Prana Iswara;Pancasila;2025/2026;Ganjil;198907132023033101;TETAP NON PNS;Lektor
Aditya Sita Sari;Data dan Pustaka;2025/2026;Ganjil;199307132024062001;PNS;Belum Punya Jabatan Fungsional
Sendy Ayu Mitra Uktutias;Pancasila;2025/2026;Ganjil;199210032023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
TRI NURHARIYATI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;196711131994032001;PNS;Lektor
SITI WAFIROH;Kimia Dasar;2025/2026;Ganjil;196812091994112001;PNS;Lektor Kepala
SITI ZULAIKHA;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198006102008012022;PNS;Lektor
SUKARDIMAN;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;196301091988101001;PNS;Guru Besar
Citra Dwi Novastuti;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198702102023113201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Riezky Januar Pramitha;Data dan Pustaka;2025/2026;Ganjil;198901032023113201;TETAP NON PNS;Belum Punya Jabatan Fungsional
ANIS IRMAWATI;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;197405271999032002;PNS;Lektor Kepala
VIQI ARDANIAH;Pancasila;2025/2026;Ganjil;198303272016113201;TETAP NON PNS;Lektor
ENY QURNIYAWATI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198808222019032013;PNS;Asisten Ahli
EPY MUHAMMAD LUQMAN;Kewarganegaraan;2025/2026;Ganjil;196712131993031001;PNS;Guru Besar
Widiya Ulfa;Kewarganegaraan;2025/2026;Ganjil;199612242023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Rury Eryna Putri;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199501072023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Lutfi Fajar Nuraidah;Data dan Pustaka;2025/2026;Ganjil;199507182024062002;PNS;Belum Punya Jabatan Fungsional
Dwi Retna Kumalaningrum;Bahasa Indonesia;2025/2026;Ganjil;199509292023023201;TETAP NON PNS;Belum Punya Jabatan Fungsional
PRAYOGO;Agama Islam 1;2025/2026;Ganjil;197505222003121002;PNS;Lektor
Sofia Al Farizi;Data dan Pustaka;2025/2026;Ganjil;199305222020073201;TETAP NON PNS;Asisten Ahli
Evhy Apryani;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198504072024023201;TETAP NON PNS;Belum Punya Jabatan Fungsional
HERLEY WINDO SETIAWAN;Etika dan Hukum Kesehatan;2025/2026;Ganjil;198503232010121006;PNS;Lektor
Dianis Wulan Sari;Kewarganegaraan;2025/2026;Ganjil;198805062017123201;TETAP NON PNS;Lektor
Prasetyo Widyo Iswara;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;198508282022013101;TETAP NON PNS;Asisten Ahli
NURINA HASANATULUDHHIYAH;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198110062008012018;PNS;Lektor
GANDEN SUPRIYANTO;Kimia Dasar;2025/2026;Ganjil;196812281993031001;PNS;Lektor
ANILA IMPIAN SUKORINI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197905302003122001;PNS;Lektor
SETHO HADISUYATMANA;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198505252016113101;TETAP NON PNS;Asisten Ahli
NIKO AZHARI HIDAYAT ;Biologi Dasar;2025/2026;Ganjil;198003312010121003;PNS;Lektor
NILY SULISTYORINI;Etika dan Hukum Kesehatan;2025/2026;Ganjil;198204152009122002;PNS;Lektor
KRISTIAWATI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197909112014092004;PNS;Asisten Ahli
KUNCORO PUGUH SANTOSO;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196612151992031014;PNS;Lektor
Nur Rusdiana;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;199108222024053201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Tridiganita Intan Solikhah;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;199311252018083201;TETAP NON PNS;Lektor
Rizqy Aiddha Yuniawati;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199106232020013201;TETAP NON PNS;Lektor
DEBY KUSUMANINGRUM;Pancasila;2025/2026;Ganjil;197904092008012013;PNS;Lektor
NURUL HARTINI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197104211997022001;PNS;Guru Besar
NURUL ISTIFADAH;Kewarganegaraan;2025/2026;Ganjil;196702101998022001;PNS;Lektor
LUTHFI NUR ROSYIDI;Logika dan Pemikiran Kritis;2025/2026;Ganjil;198204222014041001;PNS;Asisten Ahli
IDA NURUL CHASANAH;Bahasa Indonesia;2025/2026;Ganjil;196911141994032003;PNS;Lektor Kepala
BEA ANGGRAINI;Bahasa Indonesia;2025/2026;Ganjil;196909231994042001;PNS;Lektor
EMA QURNIANINGSIH;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;197912142005012003;PNS;Asisten Ahli
PURKAN;Kimia Dasar;2025/2026;Ganjil;197211161997021001;PNS;Guru Besar
MIRA TRIHARINI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197904242006042002;PNS;Lektor
LINDA DEWANTI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;196712271997022001;PNS;Guru Besar
INNA KUSWANDARI;Data dan Pustaka;2025/2026;Ganjil;196609051991022001;PNS;Lektor
Aries Widya Gunawan;Pancasila;2025/2026;Ganjil;197104092020123101;TETAP NON PNS;Belum Punya Jabatan Fungsional
INDIRA RETNO ARYATIE;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198003202005012002;PNS;Lektor
Eka Cahya Febriyanto;Pancasila;2025/2026;Ganjil;199202162018013101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Sulistyowati;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198702022023113201;TETAP NON PNS;Belum Punya Jabatan Fungsional
Rizal Agung Kurnia;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;199003222024023101;TETAP NON PNS;Belum Punya Jabatan Fungsional
Hariyono;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198102182022013101;TETAP NON PNS;Lektor
LAILATUL MUNIROH;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198005252005012004;PNS;Lektor Kepala
LAILATUN NIMAH;Kewarganegaraan;2025/2026;Ganjil;198606022015042001;PNS;Lektor
LAILY HIDAYATI;Pancasila;2025/2026;Ganjil;198304052014042002;PNS;Lektor
PRIMA AYU WIBAWATI;Bahasa Indonesia;2025/2026;Ganjil;199002062015042004;PNS;Lektor
EKA PRAMYRTHA HESTIANAH;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;196403161990022001;PNS;Lektor Kepala
RISTA FAUZININGTYAS;Komunikasi Kesehatan dan Layanan Dasar Kesehatan;2025/2026;Ganjil;198707172015042002;PNS;Lektor
DIANSANTO PRAYOGA;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198604122015043101;TETAP NON PNS;Lektor
Nuke Faridha Wardhani;Logika dan Pemikiran Kritis;2025/2026;Ganjil;199407252022013201;TETAP NON PNS;Asisten Ahli
RR. RETNO WIDYOWATI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197701052002122002;PNS;Guru Besar
RR.JUNI TRIASTUTI;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;196906211997032001;PNS;Lektor
RIMBUN;Data dan Pustaka;2025/2026;Ganjil;198505282009122005;PNS;Lektor
SRI PUJI ASTUTI WAHYUNINGSIH;Biologi Dasar;2025/2026;Ganjil;196602211992032001;PNS;Guru Besar
SRI PURWANINGSIH;Kewarganegaraan;2025/2026;Ganjil;197101131998022001;PNS;Lektor
SRI SUBEKTI;Data dan Pustaka;2025/2026;Ganjil;195205172022066201;KHUSUS;Guru Besar
SRI SUMARSIH;Kimia Dasar;2025/2026;Ganjil;196001101988102001;PNS;Guru Besar
YUNI SUFYANTI ARIEF;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;197806062001122001;PNS;Guru Besar
DIAH INDRIANI;Data dan Pustaka;2025/2026;Ganjil;197605032002122001;PNS;Lektor Kepala
DIAH PUSPITA RINI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197905012014042001;PNS;Lektor
TIYAS KUSUMANINGRUM;Etika dan Hukum Kesehatan;2025/2026;Ganjil;198307032014042001;PNS;Lektor
Dita Wisudyawati;Kewarganegaraan;2025/2026;Ganjil;199105252023103201;TETAP NON PNS;Belum Punya Jabatan Fungsional
RETNAYU PRADANIE;Pengantar Kolaborasi Keilmuan;2025/2026;Ganjil;198406062015042001;PNS;Lektor
RETNO ADRIYANI;Komunikasi dan Pengembangan Diri;2025/2026;Ganjil;197506092003122001;PNS;Lektor`;

export const parseCSV = (csv: string): Lecturer[] => {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(';');
  return lines.slice(1).map(line => {
    const values = line.split(';');
    const obj: any = {};
    headers.forEach((header, index) => {
      obj[header] = values[index];
    });
    return obj as Lecturer;
  });
};
