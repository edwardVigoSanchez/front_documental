import { Component } from '@angular/core';
import { PracticantesService } from '../service/practicantes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-practicantes',
  templateUrl: './add-practicantes.component.html',
  styleUrl: './add-practicantes.component.scss'
})
export class AddPracticantesComponent {

  public selectedValue !: string  ;
  public name:string = '';
  public surname:string = '';
  public dni:string = '';
  public ingreso_date:string = '';
  public practicantes_date:string = '';
  
  public FILE_aceptacion:any;
  public FILE_certificado:any;

  public text_success:string = '';
  public text_validation:string = '';
  constructor(
    public practicantesService: PracticantesService,
  ) {
    
  }
  ngOnInit(): void {

    this.practicantesService.listConfig().subscribe((resp:any) => {
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
    formData.append("practicantes_date",this.practicantes_date);
    formData.append("aceptacion",this.FILE_aceptacion);
    formData.append("certificado",this.FILE_certificado);

    
    this.practicantesService.registerUser(formData).subscribe((resp:any) => {
      console.log(resp);

      if(resp.message == 403){
        this.text_validation = resp.message_text;
      }else{
        this.text_success = 'El usuario ha sido registrado correctamente';

        this.name = '';
        this.surname = '';
        this.dni  = '';
        this.ingreso_date  = '';
        this.practicantes_date  = '';
        this.selectedValue  = '';

        this.FILE_aceptacion = null;
        this.FILE_certificado = null;

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

  loadFile($event: any, type: string): void {
    const allowedTypes = ['image/*', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    
    if ($event.target.files.length === 0) {
      this.text_validation = "POR FAVOR, SELECCIONE UN ARCHIVO";
      return;
    }

    const files = $event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (allowedTypes.indexOf(file.type) === -1) {
            this.text_validation = "SOLAMENTE SE PERMITEN ARCHIVOS DE TIPO IMAGEN, WORD, PDF O EXCEL";
            return;
        }

        if (type === 'aceptacion') {
            this.FILE_aceptacion = file;
        } else if (type === 'certificado') {
            this.FILE_certificado = file;
        }
    }

    this.text_validation = '';
}
}
