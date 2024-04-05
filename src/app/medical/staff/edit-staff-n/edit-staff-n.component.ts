import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../service/staff.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-staff-n',
  templateUrl: './edit-staff-n.component.html',
  styleUrls: ['./edit-staff-n.component.scss']
})
export class EditStaffNComponent {

  public selectedValue !: string  ;
  public name:string = '';
  public surname:string = '';
  public email:string = '';
  public password:string = '';
  public password_confirmation:string = '';
  public passwordClass = false;


  public registro_date:string = '';
  public area:string = '';

  public roles:any = [];
  public text_success:string = '';
  public text_validation:string = '';

  public staff_id:any;
  public staff_selected:any;
  constructor(
    public staffService: StaffService,
    public activedRoute: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    this.activedRoute.params.subscribe((resp:any) => {
      console.log(resp);
      this.staff_id = resp.id;
    });
    
    this.staffService.showUser(this.staff_id).subscribe((resp:any) => {
      console.log(resp);
      this.staff_selected = resp.user;
  
      this.selectedValue = this.staff_selected.role.id;
      this.name = this.staff_selected.name;
      this.surname = this.staff_selected.surname;
      this.email = this.staff_selected.email;
      this.registro_date = new Date(this.staff_selected.registro_date).toISOString();
      this.area = this.staff_selected.area;
    });
  
    this.staffService.listConfig().subscribe((resp:any) => {
      console.log(resp);
      this.roles = resp.roles;
    });
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
    formData.append("registro_date",this.registro_date);
    if(this.area){
      formData.append("area",this.area);
    }
    if(this.password){
      formData.append("password",this.password);
    }
    formData.append("role_id",this.selectedValue);
    
    this.staffService.updateUser(this.staff_id,formData).subscribe((resp:any) => {
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
  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
}
