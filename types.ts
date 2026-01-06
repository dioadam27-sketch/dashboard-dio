
export interface Lecturer {
  DOSEN: string;
  NM_MATA_KULIAH: string;
  TAHUN_AJARAN: string;
  GROUP_SEMESTER: string;
  NIP_DOSEN: string;
  NM_STATUS_KEPEGAWAIAN: string;
  NM_JABATAN_FUNGSIONAL: string;
}

export interface DashboardStats {
  totalLecturers: number;
  totalCourses: number;
  professorsCount: number;
  pnsPercentage: number;
}
