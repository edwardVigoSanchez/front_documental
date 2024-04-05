import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CesanteService } from '../service/cesante.service';

@Component({
  selector: 'app-add-cesante',
  templateUrl: './add-cesante.component.html',
  styleUrl: './add-cesante.component.scss'
})
export class AddCesanteComponent {

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
  constructor(
    public cesanteService: CesanteService,
  ) {
    
  }
  ngOnInit(): void {

    this.cesanteService.listConfig().subscribe((resp:any) => {
      console.log(resp);
    })
  }

  save(){
    this.text_validation = '';
    if(!this.name || !this.surname){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (Nombres,Apellidos)";
      return;
    }
    console.log(this.selectedValue);

    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("surname",this.surname);
    formData.append("dni",this.dni);
    formData.append("ingreso_date",this.ingreso_date);
    formData.append("cesante_date",this.cesante_date);
    formData.append("imagen",this.FILE_AVATAR);
    
    this.cesanteService.registerUser(formData).subscribe((resp:any) => {
      console.log(resp);

      if(resp.message == 403){
        this.text_validation = resp.message_text;
      }else{
        this.text_success = 'El usuario ha sido registrado correctamente';

        this.name = '';
        this.surname = '';
        this.dni  = '';
        this.ingreso_date  = '';
        this.cesante_date  = '';

        this.selectedValue  = '';
        this.FILE_AVATAR = null;
        this.IMAGEN_PREVIZUALIZA = null;
      }

    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se registró Correctamente',
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
