import { Component } from '@angular/core';
import { MemorandumService } from '../service/memorandum.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-memorandum',
  templateUrl: './edit-memorandum.component.html',
  styleUrl: './edit-memorandum.component.scss'
})
export class EditMemorandumComponent {
  public selectedValue !: string  ;
  public ninforme:string = '';
  public destinatario:string = '';
  public asunto:string = '';
  public referencia:string = '';
  public fecha_emision:string = '';

  public FILE_AVATAR:any;
  public IMAGEN_PREVIZUALIZA:any = 'assets/img/user-06.jpg';

  public text_success:string = '';
  public text_validation:string = '';

  public memorandum_id:any;
  public memorandum_selected:any;
  constructor(
    public memorandumService: MemorandumService,
    public activedRoute: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activedRoute.params.subscribe((resp:any) => {
      console.log(resp);
      this.memorandum_id = resp.id;
    })
    
    this.memorandum_selected.showUser(this.memorandum_id).subscribe((resp:any) => {
      console.log(resp);
      this.memorandum_selected = resp.user;

      this.selectedValue = this.memorandum_selected.role.id;
      this.ninforme = this.memorandum_selected.ninforme ;
      this.destinatario = this.memorandum_selected.destinatario ;
      this.asunto = this.memorandum_selected.asunto ;
      this.referencia = this.memorandum_selected.referencia ;
      this.fecha_emision = new Date(this.memorandum_selected.fecha_emision).toISOString();
      this.IMAGEN_PREVIZUALIZA = this.memorandum_selected.avatar;
    })

    this.memorandum_selected.listConfig().subscribe((resp:any) => {
      console.log(resp);
    })
  }

  save(){
    this.text_validation = '';
    if(!this.ninforme || !this.referencia || !this.destinatario){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (ninforme,destinatario,referencia)";
      return;
    }

    console.log(this.selectedValue);

    let formData = new FormData();
    formData.append("ninforme",this.ninforme);
    formData.append("destinatario",this.destinatario);
    formData.append("referencia",this.referencia);
    formData.append("asunto",this.asunto);
    formData.append("fecha_emision",this.fecha_emision);
    if(this.FILE_AVATAR){
      formData.append("imagen",this.FILE_AVATAR);
    }
    
    this.memorandum_selected.updateUser(this.memorandum_id,formData).subscribe((resp:any) => {
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

