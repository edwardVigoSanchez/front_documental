import { Component } from '@angular/core';
import { ExfuncionariosService } from '../service/exfuncionarios.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adit-exfuncionarios',
  templateUrl: './adit-exfuncionarios.component.html',
  styleUrl: './adit-exfuncionarios.component.scss'
})
export class AditExfuncionariosComponent {

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

  public exfuncionarios_id:any;
  public exfuncionarios_selected:any;
  constructor(
    public exfuncionariosService: ExfuncionariosService,
    public activedRoute: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activedRoute.params.subscribe((resp:any) => {
      console.log(resp);
      this.exfuncionarios_id = resp.id;
    })
    
    this.exfuncionariosService.showUser(this.exfuncionarios_id).subscribe((resp:any) => {
      console.log(resp);
      this.exfuncionarios_selected = resp.user;

      this.selectedValue = this.exfuncionarios_selected.role.id;
      this.name = this.exfuncionarios_selected.name ;
      this.surname = this.exfuncionarios_selected.surname ;
      this.dni = this.exfuncionarios_selected.dni ;
      this.cargo = this.exfuncionarios_selected.cargo ;
      this.fecha_ingreso = new Date(this.exfuncionarios_selected.fecha_ingreso).toISOString();
      this.fecha_cesante = new Date(this.exfuncionarios_selected.fecha_cesante).toISOString();

      this.IMAGEN_PREVIZUALIZA = this.exfuncionarios_selected.avatar;
    })

    this.exfuncionariosService.listConfig().subscribe((resp:any) => {
      console.log(resp);
    })
  }

  save(){
    this.text_validation = '';
    if(!this.name || !this.surname){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (name,surname,email)";
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
    if(this.FILE_AVATAR){
      formData.append("imagen",this.FILE_AVATAR);
    }
    
    this.exfuncionariosService.updateUser(this.exfuncionarios_id,formData).subscribe((resp:any) => {
      console.log(resp);

      if(resp.message == 403){
        this.text_validation = resp.message_text;
      }else{
        this.text_success = 'El usuario ha editado correctamente';
      }
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se modificó Correctamente',
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
