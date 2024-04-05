import { Component } from '@angular/core';
import { ExfuncionariosService } from '../service/exfuncionarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-exfuncionarios',
  templateUrl: './add-exfuncionarios.component.html',
  styleUrl: './add-exfuncionarios.component.scss'
})
export class AddExfuncionariosComponent {
  public selectedValue !: string  ;
  public name:string = '';
  public surname:string = '';
  public dni:string = '';

  public cargo:string = '';
  public fecha_ingreso:string = '';
  public fecha_cesante:string = '';

  public FILE_AVATAR:any;
  public IMAGEN_PREVIZUALIZA:any = 'assets/img/user-06.jpg';

  public text_success:string = '';
  public text_validation:string = '';
  constructor(
    public exfuncionariosService: ExfuncionariosService,
  ) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.exfuncionariosService.listConfig().subscribe((resp:any) => {
      console.log(resp);
    })
  }

  save(){
    this.text_validation = '';
    if(!this.name ||  !this.surname || !this.FILE_AVATAR ){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (name,surname,avatar)";
      return;
    }
    console.log(this.selectedValue);

    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("surname",this.surname);
    formData.append("dni",this.dni);
    formData.append("cargo",this.cargo);
    formData.append("fecha_ingreso",this.fecha_ingreso);
    formData.append("fecha_cesante",this.fecha_cesante);

    formData.append("role_id",this.selectedValue);
    formData.append("imagen",this.FILE_AVATAR);
    
    this.exfuncionariosService.registerUser(formData).subscribe((resp:any) => {
      console.log(resp);

      if(resp.message == 403){
        this.text_validation = resp.message_text;
      }else{
        this.text_success = 'El usuario ha sido registrado correctamente';

        this.name = '';
        this.surname = '';
        this.dni = '';
        this.cargo  = '';
        this.fecha_ingreso  = '';
        this.fecha_cesante  = '';

        this.selectedValue  = '';
        this.FILE_AVATAR = null;
        this.IMAGEN_PREVIZUALIZA = null;
      }

    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se agregó Correctamente',
      showConfirmButton: false,
      timer: 1500
    });

  }

  loadFile($event:any){
    if($event.target.files[0].type.indexOf("image") < 0){
      // alert("SOLAMENTE PUEDEN SER ARCHIVOS DE TIPO IMAGEN");
      this.text_validation = "SOLAMENTE PUEDEN SER ARCHIVOS DE TIPO IMAGEN";
      return;
    }
    this.text_validation = '';
    this.FILE_AVATAR = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.FILE_AVATAR);
    reader.onloadend = () => this.IMAGEN_PREVIZUALIZA = reader.result;
  }
}
