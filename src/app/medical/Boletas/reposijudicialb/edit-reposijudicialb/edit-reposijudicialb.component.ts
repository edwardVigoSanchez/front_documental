import { Component } from '@angular/core';
import { ReposijudicialbService } from '../service/reposijudicialb.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-reposijudicialb',
  templateUrl: './edit-reposijudicialb.component.html',
  styleUrl: './edit-reposijudicialb.component.scss'
})
export class EditReposijudicialbComponent {

  public selectedValue !: string  ;
  public name:string = '';
  public surname:string = '';
  public mobile:string = '';
  public email:string = '';
  public password:string = '';
  public password_confirmation:string = '';

  public birth_date:string = '';
  public gender:number = 1;
  public education:string = '';
  public designation:string = '';
  public address:string = '';

  public roles:any = [];

  public FILE_AVATAR:any;
  public IMAGEN_PREVIZUALIZA:any = 'assets/img/user-06.jpg';

  public text_success:string = '';
  public text_validation:string = '';

  public reposijudicialb_id:any;
  public reposijudicialb_selected:any;
  constructor(
    public reposijudicialbService: ReposijudicialbService,
    public activedRoute: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activedRoute.params.subscribe((resp:any) => {
      console.log(resp);
      this.reposijudicialb_id = resp.id;
    })
    
    this.reposijudicialb_selected.showUser(this.reposijudicialb_id).subscribe((resp:any) => {
      console.log(resp);
      this.reposijudicialb_selected = resp.user;

      this.selectedValue = this.reposijudicialb_selected.role.id;
      this.name = this.reposijudicialb_selected.name ;
      this.surname = this.reposijudicialb_selected.surname ;
      this.mobile = this.reposijudicialb_selected.mobile ;
      this.email = this.reposijudicialb_selected.email ;
      this.birth_date = new Date(this.reposijudicialb_selected.birth_date).toISOString();
      this.gender = this.reposijudicialb_selected.gender ;
      this.education = this.reposijudicialb_selected.education ;
      this.designation = this.reposijudicialb_selected.designation ;
      this.address = this.reposijudicialb_selected.address ;
      this.IMAGEN_PREVIZUALIZA = this.reposijudicialb_selected.avatar;
    })

    this.reposijudicialb_selected.listConfig().subscribe((resp:any) => {
      console.log(resp);
      this.roles = resp.roles;
    })
  }

  save(){
    this.text_validation = '';
    if(!this.name || !this.email || !this.surname){
      this.text_validation = "LOS CAMPOS SON NECESARIOS (name,surname,email)";
      return;
    }
    if(this.password){
      if(this.password != this.password_confirmation){
        this.text_validation = "LAS CONTRASEÑA DEBEN SER IGUALES";
        return;
      }
    }
    console.log(this.selectedValue);

    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("surname",this.surname);
    formData.append("email",this.email);
    formData.append("mobile",this.mobile);
    formData.append("birth_date",this.birth_date);
    formData.append("gender",this.gender+"");
    if(this.education){
      formData.append("education",this.education);
    }
    if(this.designation){
      formData.append("designation",this.designation);
    }
    if(this.address){
      formData.append("address",this.address);
    }
    if(this.password){
      formData.append("password",this.password);
    }
    formData.append("role_id",this.selectedValue);
    if(this.FILE_AVATAR){
      formData.append("imagen",this.FILE_AVATAR);
    }
    
    this.reposijudicialb_selected.updateUser(this.reposijudicialb_id,formData).subscribe((resp:any) => {
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
