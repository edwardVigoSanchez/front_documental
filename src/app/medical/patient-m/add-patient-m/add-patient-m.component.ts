import { Component } from '@angular/core';
import { PatientMService } from '../service/patient-m.service';
import { routes } from '../../../shared/routes/routes';


@Component({
  selector: 'app-add-patient-m',
  templateUrl: './add-patient-m.component.html',
  styleUrls: ['./add-patient-m.component.scss']
})
export class AddPatientMComponent {
  public routes = routes;
  public selectedValue !: string  ;
  public name = '';
  public surname = '';
  public mobile = '';
  public email = '';

  public birth_date = '';
  public education = '';
  public address = '';

  public n_document:any = null;

  public roles:any = [];

  public FILE_AVATAR:any;
  public IMAGEN_PREVIZUALIZA:any = 'assets/img/user-06.jpg';

  public text_success = '';
  public text_validation = '';


  constructor(public patientService: PatientMService) {}
  

  save(){
    this.text_validation = '';
    if(!this.name || !this.n_document || !this.surname || !this.mobile){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (Nombre,Apellido,° n de document, telefono)";
      return;
    }
    console.log(this.selectedValue);

    const formData = new FormData();
    formData.append("name",this.name);
    formData.append("surname",this.surname);
    if(this.email){
      formData.append("email",this.email);
    }
    formData.append("mobile",this.mobile);
    formData.append("n_document",this.n_document);
    if(this.birth_date){
      formData.append("birth_date",this.birth_date);
    }
    if(this.education){
      formData.append("education",this.education);
    }
    if(this.address){
      formData.append("address",this.address);
    }
    if(this.FILE_AVATAR){
      formData.append("imagen",this.FILE_AVATAR);
    }
    
    this.patientService.registerPatient(formData).subscribe((resp:any) => {
      console.log(resp);

      if(resp.message == 403){
        this.text_validation = resp.message_text;
      }else{
        this.text_success = 'El paciente ha sido registrado correctamente';

        this.name = '';
        this.surname = '';
        this.email  = '';
        this.mobile  = '';
        this.birth_date  = '';
        this.education  = '';

        this.n_document  = '';
        this.selectedValue  = '';
        this.FILE_AVATAR = null;
        this.IMAGEN_PREVIZUALIZA = null;
      }
    })
  }

  loadFile($event:any){
    if($event.target.files[0].type.indexOf("image") < 0){
      // alert("SOLAMENTE PUEDEN SER ARCHIVOS DE TIPO IMAGEN");
      this.text_validation = "SOLAMENTE PUEDEN SER ARCHIVOS DE TIPO IMAGEN";
      return;
    }
    this.text_validation = '';
    this.FILE_AVATAR = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.FILE_AVATAR);
    reader.onloadend = () => this.IMAGEN_PREVIZUALIZA = reader.result;
  }
}
