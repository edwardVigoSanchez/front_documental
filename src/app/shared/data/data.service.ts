import { Injectable } from '@angular/core';
import { routes } from '../routes/routes';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiResultFormat } from '../models/models';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }
  public getStaffList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/staff-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffHoliday(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/staff-holiday.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffLeave(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/staff-leave.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDataTables() {
    return this.http.get<apiResultFormat>('assets/json/data-tables.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public sideBar = [

    // ADMINISTRADOR
    {
      tittle: '',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'dashboard',
          route: 'dashboard',
          img: 'assets/img/icons/menu-icon-01.svg',
          subMenus: [
            {
              menuValue: 'Admin Dashboard',
              route: routes.adminDashboard,
              base: routes.adminDashboard,
              permision: 'admin_dashboard',
              show_nav: true,
            },

          ],
        },
            // ROLES Y PERMISOS

        {
          menuValue: 'Roles y Permisos',
          hasSubRoute: true,
          showSubRoute: false,
          base: '',
          base2: '',
          icon: 'fa-columns',
          faIcon: true,
          subMenus: [
            {
              menuValue: 'Registrar Rol',
              route: routes.registerRole,
              base: routes.registerRole,
              permision: 'register_rol',
              show_nav: true,
            },
            {
              menuValue: 'Listado',
              route: routes.listadoRole,
              base: routes.listadoRole,
              permision: 'list_rol',
              show_nav: true,
            },
            {
              menuValue: 'Edit Rol',
              route: '',
              base: '',
              permision: 'edit_rol',
              show_nav: false,
            },
            {
              menuValue: 'Delete Rol',
              route: '',
              base: '',
              permision: 'delete_rol',
              show_nav: false,
            },
          ],
        },
            // STAFF

        {
          menuValue: 'Staff',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'staffs',
          img: 'assets/img/icons/menu-icon-08.svg',
          subMenus: [

            {
              menuValue: 'Staff List',
              route: routes.staffList,
              base: routes.staffList,
              permision: 'list_staff',
              show_nav: true,
            },
            {
              menuValue: 'Add Staff',
              route: routes.addStaff,
              base: routes.addStaff,
              permision: 'register_staff',
              show_nav: true,
            },
            {
              menuValue: 'Edit Staff',
              route: '',
              base: '',
              permision: 'edit_staff',
              show_nav: false,
            },
            {
              menuValue: 'Delete Staff',
              route: '',
              base: '',
              permision: 'delete_staff',
              show_nav: false,
            },
            
          ],
        },
            // SUMARIZACIÓN

        {
          menuValue: 'Sumarización',
          hasSubRoute: true,
          showSubRoute: false,
          base: '',
          icon: 'fa-columns',
          faIcon:true,
          subMenus: []
        },

            // TRABAJADORES

        {
          menuValue: 'Trabajadores',
          hasSubRoute: true,
          showSubRoute: false,
          base: '',
          img: 'assets/img/icons/menu-icon-03.svg',
          subMenus: [
            {
              menuValue: 'ACTIVOS',
              route: routes.listactivos,
              base: routes.listactivos,
              permision: 'list_activos',
              hasSubRoute: true,
              showSubRoute: false,
              show_nav: true,
              
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_activos',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_activos',
              show_nav: false,
            },
            {
              menuValue: 'CESANTES',
              route: routes.listcesante,
              base: routes.listcesante,
              permision: 'list_cesante',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_cesante',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_cesante',
              show_nav: false,
            },
            {
              menuValue: 'Ex_FUNCIONARIOS',
              route: routes.listexfuncionarios,
              base: routes.listexfuncionarios,
              permision: 'list_exfuncionarios',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_exfuncionarios',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_exfuncionarios',
              show_nav: false,
            },
            {
              menuValue: 'FUNCIONARIOS',
              route: routes.listfuncionarios,
              base: routes.listfuncionarios,
              permision: 'list_funcionarios',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_funcionarios',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_funcionarios',
              show_nav: false,
            },
            {
              menuValue: 'PRACTICANTES',
              route: routes.listpracticantes,
              base: routes.listpracticantes,
              permision: 'list_practicantes',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_practicantes',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_practicantes',
              show_nav: false,
            },
          ]
        },
            // BOLETAS DE PAGO

        {
          menuValue: 'Boletas',
          hasSubRoute: true,
          showSubRoute: false,
          base: '',
          img: 'assets/sidebar/boletas.svg',
          subMenus: [
            {
              menuValue: 'CAS DIRECTIVOS',
              route: routes.listcasdirectivosb,
              base: routes.listcasdirectivosb,
              permision: 'list_casdirectivosb',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_casdirectivosb',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_casdirectivosb',
              show_nav: false,
            },
            {
              menuValue: 'CAS REGULAR',
              route: routes.listcasregular,
              base: routes.listcasregular,
              permision: 'list_casregular',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_casregular',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_casregular',
              show_nav: false,
            },
            {
              menuValue: 'CESANTES',
              route: routes.listcesantesb,
              base: routes.listcesantesb,
              permision: 'list_cesantesb',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_cesantesb',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_cesantesb',
              show_nav: false,
            },
            {
              menuValue: 'MEDIDAS CAUTELARES',
              route: routes.listcautelares,
              base: routes.listcautelares,
              permision: 'list_cautelares',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_cautelares',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_cautelares',
              show_nav: false,
            },
            {
              menuValue: 'NOMBRADOS',
              route: routes.listnombradosb,
              base: routes.listnombradosb,
              permision: 'list_nombradosb',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_nombradosb',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_nombradosb',
              show_nav: false,
            },
            {
              menuValue: 'PERMANENTES',
              route: routes.listpermanentesb,
              base: routes.listpermanentesb,
              permision: 'list_permanentesb',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_permanentesb',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_permanentesb',
              show_nav: false,
            },
            {
              menuValue: 'REPOSI. JUDICIALES',
              route: routes.listreposijudicialb,
              base: routes.listreposijudicialb,
              permision: 'list_reposijudicialb',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_reposijudicialesb',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_reposijudicialesb',
              show_nav: false,
            },
          ]
        },
            // PLANILLAS

        {
          menuValue: 'Planillas MDH',
          hasSubRoute: true,
          showSubRoute: false,
          base: '',
          img: 'assets/sidebar/planilla.svg',
          subMenus: [
            {
              menuValue: 'CAS DIRECTIVOS',
              route: routes.listcasdirectivos,
              base: routes.listcasdirectivos,
              permision: 'list_casdirectivos',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_casdirectivos',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_casdirectivos',
              show_nav: false,
            },
            {
              menuValue: 'CAS INDETERMINADOS',
              route: routes.listcasindeterminados,
              base: routes.listcasindeterminados,
              permision: 'list_casindeterminados',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_casindeterminados',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_casindeterminados',
              show_nav: false,
            },
            {
              menuValue: 'CAS TRANSITORIOS',
              route: routes.listcastransitorios,
              base: routes.listcastransitorios,
              permision: 'list_castransitorios',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_castransitorios',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_castransitorios',
              show_nav: false,
            },
            {
              menuValue: 'DESC. JUDICIALES',
              route: routes.listdescjudiciales,
              base: routes.listdescjudiciales,
              permision: 'list_descjudiciales',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_descjudiciales',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_descjudiciales',
              show_nav: false,
            },
            {
              menuValue: 'LEY SERVIR',
              route: routes.listleyservir,
              base: routes.listleyservir,
              permision: 'list_leyservir',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_leyservir',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_leyservir',
              show_nav: false,
            },
            {
              menuValue: 'NOMBRADOS',
              route: routes.listnombrados,
              base: routes.listnombrados,
              permision: 'list_nombrados',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_nombrados',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_nombrados',
              show_nav: false,
            },
            {
              menuValue: 'PENSIONISTAS',
              route: routes.listpensionistas,
              base: routes.listpensionistas,
              permision: 'list_pensionistas',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_pensionistas',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_pensionistas',
              show_nav: false,
            },
            {
              menuValue: 'PERMANENTES',
              route: routes.listpermanentes,
              base: routes.listpermanentes,
              permision: 'list_permanentes',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_permanentes',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_permanentes',
              show_nav: false,
            },
            {
              menuValue: 'REGIDORES',
              route: routes.listregidores,
              base: routes.listregidores,
              permision: 'list_regidores',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_regidores',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_regidores',
              show_nav: false,
            },
            {
              menuValue: 'REPOSI. JUDICIALES',
              route: routes.listreposijudicial,
              base: routes.listreposijudicial,
              permision: 'list_reposijudicial',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_reposijudicial',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_reposijudicial',
              show_nav: false,
            },
          ]
        },
            // DOCUMENTOS EMITIDOS

        {
          menuValue: 'Doc. Emitidos',
          hasSubRoute: true,
          showSubRoute: false,
          base: '',
          img: 'assets/sidebar/emitidos.svg',
          subMenus: [
            {
              menuValue: 'CARTAS',
              route: routes.listcartas,
              base: routes.listcartas,
              permision: 'list_cartas',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_cartas',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_cartas',
              show_nav: false,
            },
            {
              menuValue: 'INFORMES',
              route: routes.listinformes,
              base: routes.listinformes,
              permision: 'list_informes',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_informes',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_informes',
              show_nav: false,
            },
            {
              menuValue: 'INFOR. ESCALAFONARIOS',
              route: routes.listescalafonarios,
              base: routes.listescalafonarios,
              permision: 'list_escalafonarios',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_escalafonarios',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_escalafonarios',
              show_nav: false,
            },
            {
              menuValue: 'MEMORANDUM',
              route: routes.listmemorandume,
              base: routes.listmemorandume,
              permision: 'list_memorandume',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_memorandume',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_memorandume',
              show_nav: false,
            },
            {
              menuValue: 'OFICIOS',
              route: routes.listoficios,
              base: routes.listoficios,
              permision: 'list_oficios',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_oficios',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_oficios',
              show_nav: false,
            },
            {
              menuValue: 'PROVEIDOS',
              route: routes.listproveidos,
              base: routes.listproveidos,
              permision: 'list_proveidos',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_proveidos',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_proveidos',
              show_nav: false,
            },
            {
              menuValue: 'REQUERIMIENTOS',
              route: routes.listrequerimientos,
              base: routes.listrequerimientos,
              permision: 'list_requerimientos',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_requerimientos',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_requerimientos',
              show_nav: false,
            },
          ]
        },
             // DOCUMENTOS RECIBIDOS

        {
          menuValue: 'Doc. Recibidos',
          hasSubRoute: true,
          showSubRoute: false,
          base: '',
          img: 'assets/sidebar/recibidos.svg',
          subMenus: [
            {
              menuValue: 'DOCUMENTOS DIVERSOS',
              route: routes.listdocdiversos,
              base: routes.listdocdiversos,
              permision: 'list_docdiversos',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_docdiversos',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_docdiversos',
              show_nav: false,
            },
            {
              menuValue: 'MEMORANDUM',
              route: routes.listmemorandum,
              base: routes.listmemorandum,
              permision: 'list_memorandum',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_memorandum',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_memorandum',
              show_nav: false,
            },
            {
              menuValue: 'RESO. ALCALDIA',
              route: routes.listresoalcaldia,
              base: routes.listresoalcaldia,
              permision: 'list_resoalcaldia',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_resoalcaldia',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_resoalcaldia',
              show_nav: false,
            },
            {
              menuValue: 'RESO. GERENCIAL',
              route: routes.listresogerencial,
              base: routes.listresogerencial,
              permision: 'list_resogerencial',
              show_nav: true,
            },
            {
              menuValue: 'Editar',
              route: '',
              base: '',
              permision: 'edit_resogerencial',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar',
              route: '',
              base: '',
              permision: 'delete_resogerencial',
              show_nav: false,
            },
          ]
        }
      ],
    },
  ]
}

