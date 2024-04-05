import { Component } from '@angular/core';
import { ActivosService } from '../service/activos.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adit-activos',
  templateUrl: './adit-activos.component.html',
  styleUrl: './adit-activos.component.scss'
})
export class AditActivosComponent {
  public selectedValue !: string  ;
  public name:string = '';
  public surname:string = '';
  public dni:string = '';
  public area:string = '';
  public fecha_ingreso:string = '';
  public cargo:string = '';
  public FILE_documento:any;
  public IMAGEN_PREVIZUALIZA:any = 'assets/img/user-06.jpg';

  public text_success:string = '';
  public text_validation:string = '';

  public activos_id:any;
  public activos_selected:any;
  constructor(
    public activosService: ActivosService,
    public activedRoute: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activedRoute.params.subscribe((resp:any) => {
      console.log(resp);
      this.activos_id = resp.id;
    })
    
    this.activos_selected.showUser(this.activos_id).subscribe((resp:any) => {
      console.log(resp);
      this.activos_selected = resp.user;

      this.selectedValue = this.activos_selected.role.id;
      this.name = this.activos_selected.name ;
      this.surname = this.activos_selected.surname ;
      this.dni = this.activos_selected.dni ;
      this.area = this.activos_selected.area ;
      this.fecha_ingreso = new Date(this.activos_selected.fecha_ingreso).toISOString();
      this.cargo = this.activos_selected.cargo ;

      this.IMAGEN_PREVIZUALIZA = this.activos_selected.documento;
    })

    this.activos_selected.listConfig().subscribe((resp:any) => {
      console.log(resp);
    })
  }

  save(){
    this.text_validation = '';
    if(!this.name || !this.area || !this.surname){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (name,surname,area)";
      return;
    }

    console.log(this.selectedValue);

    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("surname",this.surname);
    formData.append("area",this.area);
    formData.append("dni",this.dni);
    formData.append("fecha_ingreso",this.fecha_ingreso);
    formData.append("cargo",this.cargo+"");

    if(this.FILE_documento){
      formData.append("imagen",this.FILE_documento);
    }
    
    this.activos_selected.updateUser(this.activos_id,formData).subscribe((resp:any) => {
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
    this.FILE_documento = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.FILE_documento);
    reader.onloadend = () => this.IMAGEN_PREVIZUALIZA = reader.result;
  }

}
