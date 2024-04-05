import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CesanteService } from '../service/cesante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cesante',
  templateUrl: './edit-cesante.component.html',
  styleUrl: './edit-cesante.component.scss'
})
export class EditCesanteComponent {
  public selectedValue !: string  ;
  public name:string = '';
  public surname:string = '';
  public dni:string = '';
  public ingreso_date:string = '';
  public cesante_date:string = '';

  public FILE_AVATAR:any;
  public IMAGEN_PREVIZUALIZA:any = 'assets/img/user-06.jpg';

  public text_success:string = '';
  public text_validation:string = '';

  public cesante_id:any;
  public cesante_selected:any;
  constructor(
    public cesanteService: CesanteService,
    public activedRoute: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {

    this.activedRoute.params.subscribe((resp:any) => {
      console.log(resp);
      this.cesante_id = resp.id;
    })
    
    this.cesanteService.showUser(this.cesante_id).subscribe((resp:any) => {
      console.log(resp);
      this.cesante_selected = resp.user;

      this.selectedValue = this.cesante_selected.role.id;
      this.name = this.cesante_selected.name ;
      this.surname = this.cesante_selected.surname ;
      this.dni = this.cesante_selected.dni ;
      this.ingreso_date = new Date(this.cesante_selected.ingreso_date).toISOString();
      this.cesante_date = new Date(this.cesante_selected.cesante_date).toISOString();

      this.IMAGEN_PREVIZUALIZA = this.cesante_selected.avatar;
    })
  }

  save(){
    this.text_validation = '';
    if(!this.name || !this.surname){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (name,surname)";
      return;
    }
    
    console.log(this.selectedValue);

    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("surname",this.surname);
    formData.append("dni",this.dni);
    formData.append("ingreso_date",this.ingreso_date);
    formData.append("cesante_date",this.cesante_date);

    formData.append("role_id",this.selectedValue);
    if(this.FILE_AVATAR){
      formData.append("imagen",this.FILE_AVATAR);
    }
    
    this.cesanteService.updateUser(this.cesante_id,formData).subscribe((resp:any) => {
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
