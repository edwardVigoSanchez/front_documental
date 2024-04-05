import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalComponent } from './medical.component';
import { AuthGuard } from '../shared/gaurd/auth.guard';

// http://localhost:4200/roles/register
const routes: Routes = [
  {
    path: '',
    component: MedicalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'roles',
        loadChildren: () =>
          import('./roles/roles.module').then((m) => m.RolesModule),
      },
      {
        path: 'staffs',
        loadChildren: () =>
          import('./staff/staff.module').then((m) => m.StaffModule),
      },

      {
        path: 'patient-m',
        loadChildren: () =>
          import('./patient-m/patient-m.module').then((m) => m.PatientMModule),
      },

      // TRABAJADORES
      {
        path: 'cesantes',
        loadChildren: () =>
          import('./Trabajadores/cesantes/cesantes.module').then((m) => m.CesantesModule),
      },
      {
        path: 'activos',
        loadChildren: () =>
          import('./Trabajadores/activos/activos.module').then((m) => m.ActivosModule),
      },
      {
        path: 'funcionarios',
        loadChildren: () =>
          import('./Trabajadores/funcionarios/funcionarios.module').then((m) => m.FuncionariosModule),
      },
      {
        path: 'exfuncionarios',
        loadChildren: () =>
          import('./Trabajadores/exfuncionarios/exfuncionarios.module').then((m) => m.ExfuncionariosModule),
      },
      {
        path: 'practicantes',
        loadChildren: () =>
          import('./Trabajadores/practicantes/practicantes.module').then((m) => m.PracticantesModule),
      },

      /// PLANILLAS ///
      {
        path: 'casdirectivos',
        loadChildren: () =>
          import('./Planillas/casdirectivos/casdirectivos.module').then((m) => m.CasdirectivosModule),
      },
      {
        path: 'casindeterminados',
        loadChildren: () =>
          import('./Planillas/casindeterminados/casindeterminados.module').then((m) => m.CasindeterminadosModule),
      },
      {
        path: 'castransitorios',
        loadChildren: () =>
          import('./Planillas/castransitorios/castransitorios.module').then((m) => m.CastransitoriosModule),
      },
      {
        path: 'descjudiciales',
        loadChildren: () =>
          import('./Planillas/descjudiciales/descjudiciales.module').then((m) => m.DescjudicialesModule),
      },
      {
        path: 'leyservir',
        loadChildren: () =>
          import('./Planillas/leyservir/leyservir.module').then((m) => m.LeyservirModule),
      },
      {
        path: 'nombrados',
        loadChildren: () =>
          import('./Planillas/nombrados/nombrados.module').then((m) => m.NombradosModule),
      },
      {
        path: 'pensionistas',
        loadChildren: () =>
          import('./Planillas/pensionistas/pensionistas.module').then((m) => m.PensionistasModule),
      },
      {
        path: 'permanentes',
        loadChildren: () =>
          import('./Planillas/permanentes/permanentes.module').then((m) => m.PermanentesModule),
      },
      {
        path: 'regidores',
        loadChildren: () =>
          import('./Planillas/regidores/regidores.module').then((m) => m.RegidoresModule),
      },
      {
        path: 'reposijudicial',
        loadChildren: () =>
          import('./Planillas/reposijudicial/reposijudicial.module').then((m) => m.ReposijudicialModule),
      },

      /// BOLETAS DE PAGO ///
      {
        path: 'casdirectivosb',
        loadChildren: () =>
          import('./Boletas/casdirectivosb/casdirectivosb.module').then((m) => m.CasdirectivosbModule),
      },
      {
        path: 'casregular',
        loadChildren: () =>
          import('./Boletas/casregular/casregular.module').then((m) => m.CasregularModule),
      },
      {
        path: 'cautelares',
        loadChildren: () =>
          import('./Boletas/cautelares/cautelares.module').then((m) => m.CautelaresModule),
      },
      {
        path: 'cesantesb',
        loadChildren: () =>
          import('./Boletas/cesantesb/cesantesb.module').then((m) => m.CesantesbModule),
      },
      {
        path: 'nombradosb',
        loadChildren: () =>
          import('./Boletas/nombradosb/nombradosb.module').then((m) => m.NombradosbModule),
      },
      {
        path: 'permanentesb',
        loadChildren: () =>
          import('./Boletas/permanentesb/permanentesb.module').then((m) => m.PermanentesbModule),
      },
      {
        path: 'reposijudicialb',
        loadChildren: () =>
          import('./Boletas/reposijudicialb/reposijudicialb.module').then((m) => m.ReposijudicialbModule),
      },

      /// DOCUMENTOS EMITIDOS ///
      {
        path: 'cartas',
        loadChildren: () =>
          import('./Documentos_Emitidos/cartas/cartas.module').then((m) => m.CartasModule),
      },
      {
        path: 'escalafonarios',
        loadChildren: () =>
          import('./Documentos_Emitidos/escalafonarios/escalafonarios.module').then((m) => m.EscalafonariosModule),
      },
      {
        path: 'informes',
        loadChildren: () =>
          import('./Documentos_Emitidos/informes/informes.module').then((m) => m.InformesModule),
      },
      {
        path: 'memorandume',
        loadChildren: () =>
          import('./Documentos_Emitidos/memorandume/memorandume.module').then((m) => m.MemorandumeModule),
      },
      {
        path: 'oficios',
        loadChildren: () =>
          import('./Documentos_Emitidos/oficios/oficios.module').then((m) => m.OficiosModule),
      },
      {
        path: 'proveidos',
        loadChildren: () =>
          import('./Documentos_Emitidos/proveidos/proveidos.module').then((m) => m.ProveidosModule),
      },
      {
        path: 'requerimientos',
        loadChildren: () =>
          import('./Documentos_Emitidos/requerimientos/requerimientos.module').then((m) => m.RequerimientosModule),
      },

      /// DOCUMENTOS RECIBIDOS ///
      {
        path: 'docdiversos',
        loadChildren: () =>
          import('./Documentos_recibidos/docdiversos/docdiversos.module').then((m) => m.DocdiversosModule),
      },
      {
        path: 'memorandum',
        loadChildren: () =>
          import('./Documentos_recibidos/memorandum/memorandum.module').then((m) => m.MemorandumModule),
      },
      {
        path: 'resoalcaldia',
        loadChildren: () =>
          import('./Documentos_recibidos/resoalcaldia/resoalcaldia.module').then((m) => m.ResoalcaldiaModule),
      },
      {
        path: 'resogerencial',
        loadChildren: () =>
          import('./Documentos_recibidos/resogerencial/resogerencial.module').then((m) => m.ResogerencialModule),
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRoutingModule { }
