export interface pageSelection {
  skip: number;
  limit: number;
}
export interface apiResultFormat {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  totalData: number;
}
export interface staffholidays {
  title: string;
  holidayDate: number;
  day: string;
  description: string;
}
export interface staffleave {
  employeeName: string;
  leaveType: string;
  from: number;
  to: number;
  noOfDays: number | string;
  reason: string;
  status: string;
  img: string;
}
export interface patientDashboard {
  doctorName: string;
  diagnosis: string;
  date: number;
  img: string;
  status: string;
}
export interface staffList {
  name: string;
  department: string;
  specialization: string;
  degree: string;
  password: string;
  password_confirmation: string;
  email: string;
  registro_date: number;
  area:string;
  img: string;
}
export interface patientsList {
  name: string;
  department: string;
  specialization: string;
  degree: string;
  mobile: string;
  email: string;
  joiningDate: number;
  img: string;
}
export interface recentPatients {
  no: string;
  patientName: string;
  age: number | string;
  date: string | number;
  dateOfBirth: string | number;
  diagnosis: string;
  img: string;
  triage: string;
}
export interface upcomingAppointments {
  no: string;
  patientName: string;
  doctor: string;
  date: string | number;
  time: string | number;
  disease: string;
  img: string;
}
export interface SubMenu {
  menuValue: string;
  route: string;
  base: string;
  permision?: string;
  show_nav?:boolean;
}
export interface MenuItem {
  menuValue: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  base: string;
  route?: string;
  img?: string;
  icon?: string;
  faIcon?: boolean;
  subMenus: SubMenu[];
  
}
export interface SideBarData {
  tittle: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: MenuItem[];
} 
  

