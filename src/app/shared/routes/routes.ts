export class routes {

  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  // AUTHENTICATION
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  // ADMINISTRADOR

  public static get adminDashboard(): string {
    return this.baseUrl + '/dashboard/admin-dashboard';
  }
  public static get registerRole(): string {
    return this.baseUrl + '/roles/register';
  }
  public static get listadoRole(): string {
    return this.baseUrl + '/roles/list';
  }
  public static get addStaff(): string {
    return this.baseUrl + '/staffs/add-staff';
  }
  public static get staffList(): string {
    return this.baseUrl + '/staffs/list-staff';
  }
  // OTROS
  public static get addPatient(): string {
    return this.baseUrl + '/patient-m/register';
  }
  public static get patientsList(): string {
    return this.baseUrl + '/patient-m/list';
  }
  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }

  // TRABAJADORES

  public static get addcesante(): string {
    return this.baseUrl + '/cesantes/add-cesante'
  }
  public static get listcesante(): string {
    return this.baseUrl + '/cesantes/list-cesante'
  }

  public static get addactivos(): string {
    return this.baseUrl + '/activos/add-activos'
  }
  public static get listactivos(): string {
    return this.baseUrl + '/activos/list-activos'
  }

  public static get addfuncionarios(): string {
    return this.baseUrl + '/funcionarios/add-funcionarios'
  }
  public static get listfuncionarios(): string {
    return this.baseUrl + '/funcionarios/list-funcionarios'
  }

  public static get addexfuncionarios(): string {
    return this.baseUrl + '/exfuncionarios/add-exfuncionarios'
  }
  public static get listexfuncionarios(): string {
    return this.baseUrl + '/exfuncionarios/list-exfuncionarios'
  }
  public static get addpracticantes(): string {
    return this.baseUrl + '/practicantes/add-practicantes'
  }
  public static get listpracticantes(): string {
    return this.baseUrl + '/practicantes/list-practicantes'
  }

  // PLANILLAS

  public static get addcasdirectivos(): string {
    return this.baseUrl + '/casdirectivos/add-casdirectivos'
  }
  public static get listcasdirectivos(): string {
    return this.baseUrl + '/casdirectivos/list-casdirectivos'
  }
  public static get addcasindeterminados(): string {
    return this.baseUrl + '/casindeterminados/add-casindeterminados'
  }
  public static get listcasindeterminados(): string {
    return this.baseUrl + '/casindeterminados/list-casindeterminados'
  }
  public static get addcastransitorios(): string {
    return this.baseUrl + '/castransitorios/add-castransitorios'
  }
  public static get listcastransitorios(): string {
    return this.baseUrl + '/castransitorios/list-castransitorios'
  }
  public static get adddescjudiciales(): string {
    return this.baseUrl + '/descjudiciales/add-descjudiciales'
  }
  public static get listdescjudiciales(): string {
    return this.baseUrl + '/descjudiciales/list-descjudiciales'
  }
  public static get addleyservir(): string {
    return this.baseUrl + '/leyservir/add-leyservir'
  }
  public static get listleyservir(): string {
    return this.baseUrl + '/leyservir/list-leyservir'
  }
  public static get addnombrados(): string {
    return this.baseUrl + '/nombrados/add-nombrados'
  }
  public static get listnombrados(): string {
    return this.baseUrl + '/nombrados/list-nombrados'
  }
  public static get addpensionistas(): string {
    return this.baseUrl + '/pensionistas/add-pensionistas'
  }
  public static get listpensionistas(): string {
    return this.baseUrl + '/pensionistas/list-pensionistas'
  }
  public static get addpermanentes(): string {
    return this.baseUrl + '/permanentes/add-permanentes'
  }
  public static get listpermanentes(): string {
    return this.baseUrl + '/permanentes/list-permanentes'
  }
  public static get addregidores(): string {
    return this.baseUrl + '/regidores/add-regidores'
  }
  public static get listregidores(): string {
    return this.baseUrl + '/regidores/list-regidores'
  }
  public static get addreposijudicial(): string {
    return this.baseUrl + '/reposijudicial/add-reposijudicial'
  }
  public static get listreposijudicial(): string {
    return this.baseUrl + '/reposijudicial/list-reposijudicial'
  }

  // BOLETAS DE PAGO
  public static get addcasdirectivosb(): string {
    return this.baseUrl + '/casdirectivosb/add-casdirectivosb'
  }
  public static get listcasdirectivosb(): string {
    return this.baseUrl + '/casdirectivosb/list-casdirectivosb'
  }
  public static get addcasregular(): string {
    return this.baseUrl + '/casregular/add-casregular'
  }
  public static get listcasregular(): string {
    return this.baseUrl + '/casregular/list-casregular'
  }
  public static get addcautelares(): string {
    return this.baseUrl + '/cautelares/add-cautelares'
  }
  public static get listcautelares(): string {
    return this.baseUrl + '/cautelares/list-cautelares'
  }
  public static get addcesantesb(): string {
    return this.baseUrl + '/cesantesb/add-cesantesb'
  }
  public static get listcesantesb(): string {
    return this.baseUrl + '/cesantesb/list-cesantesb'
  }
  public static get addnombradosb(): string {
    return this.baseUrl + '/nombradosb/add-nombradosb'
  }
  public static get listnombradosb(): string {
    return this.baseUrl + '/nombradosb/list-nombradosb'
  }
  public static get addpermanentesb(): string {
    return this.baseUrl + '/permanentesb/add-permanentesb'
  }
  public static get listpermanentesb(): string {
    return this.baseUrl + '/permanentesb/list-permanentesb'
  }
  public static get addreposijudicialb(): string {
    return this.baseUrl + '/reposijudicialb/add-reposijudicialb'
  }
  public static get listreposijudicialb(): string {
    return this.baseUrl + '/reposijudicialb/list-reposijudicialb'
  }

    // DOCUMENTOS EMITIDOS
    public static get addcartas(): string {
      return this.baseUrl + '/cartas/add-cartas'
    }
    public static get listcartas(): string {
      return this.baseUrl + '/cartas/list-cartas'
    }
    public static get addescalafonarios(): string {
      return this.baseUrl + '/escalafonarios/add-escalafonarios'
    }
    public static get listescalafonarios(): string {
      return this.baseUrl + '/escalafonarios/list-escalafonarios'
    }
    public static get addinformes(): string {
      return this.baseUrl + '/informes/add-informes'
    }
    public static get listinformes(): string {
      return this.baseUrl + '/informes/list-informes'
    }
    public static get addmemorandume(): string {
      return this.baseUrl + '/memorandume/add-memorandume'
    }
    public static get listmemorandume(): string {
      return this.baseUrl + '/memorandume/list-memorandume'
    }
    public static get addoficios(): string {
      return this.baseUrl + '/oficios/add-oficios'
    }
    public static get listoficios(): string {
      return this.baseUrl + '/oficios/list-oficios'
    }
    public static get addproveidos(): string {
      return this.baseUrl + '/proveidos/add-proveidos'
    }
    public static get listproveidos(): string {
      return this.baseUrl + '/proveidos/list-proveidos'
    }
    public static get addrequerimientos(): string {
      return this.baseUrl + '/requerimientos/add-requerimientos'
    }
    public static get listrequerimientos(): string {
      return this.baseUrl + '/requerimientos/list-requerimientos'
    }


  // DOCUMENTOS RECIBIDOS

  public static get adddocdiversos(): string {
    return this.baseUrl + '/docdiversos/add-docdiversos'
  }
  public static get listdocdiversos(): string {
    return this.baseUrl + '/docdiversos/list-docdiversos'
  }
  public static get addmemorandum(): string {
    return this.baseUrl + '/memorandum/add-memorandum'
  }
  public static get listmemorandum(): string {
    return this.baseUrl + '/memorandum/list-memorandum'
  }
  public static get addresoalcaldia(): string {
    return this.baseUrl + '/resoalcaldia/add-resoalcaldia'
  }
  public static get listresoalcaldia(): string {
    return this.baseUrl + '/resoalcaldia/list-resoalcaldia'
  }
  public static get addresogerencial(): string {
    return this.baseUrl + '/resogerencial/add-resogerencial'
  }
  public static get listresogerencial(): string {
    return this.baseUrl + '/resogerencial/list-resogerencial'
  }

}
