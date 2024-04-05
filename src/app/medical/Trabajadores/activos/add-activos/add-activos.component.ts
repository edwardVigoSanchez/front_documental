import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivosService } from '../service/activos.service';

@Component({
  selector: 'app-add-activos',
  templateUrl: './add-activos.component.html',
  styleUrl: './add-activos.component.scss'
})
export class AddActivosComponent {
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
  constructor(
    public activosService: ActivosService,
  ) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activosService.listConfig().subscribe((resp:any) => {
      console.log(resp);
    })
  }

  save(){
    this.text_validation = '';
    if(!this.name || !this.area || !this.surname || !this.FILE_documento ){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (name,surname,area,documento)";
      return;
    }

    console.log(this.selectedValue);

    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("surname",this.surname);
    formData.append("area",this.area);
    formData.append("dni",this.dni);
    formData.append("fecha_ingreso",this.fecha_ingreso);
    formData.append("imagen",this.FILE_documento);
    
    this.activosService.registerUser(formData).subscribe((resp:any) => {
      console.log(resp);

      if(resp.message == 403){
        this.text_validation = resp.message_text;
      }else{
        this.text_success = 'El usuario ha sido registrado correctamente';

        this.name = '';
        this.surname = '';
        this.area  = '';
        this.dni  = '';
        this.fecha_ingreso  = '';
        this.selectedValue  = '';
        this.FILE_documento = null;
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
    this.FILE_documento = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.FILE_documento);
    reader.onloadend = () => this.IMAGEN_PREVIZUALIZA = reader.result;
  }
}
