import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../../../config/config';
import { AuthService } from '../../../../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NombradosService {

  constructor(
    public http: HttpClient,
    public authService: AuthService,
  ) { }

  listUsers(){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/nombrados";
    return this.http.get(URL,{headers: headers});
  }

  listConfig(){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/nombrados/config";
    return this.http.get(URL,{headers: headers});
  }

  registerUser(data:any){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/nombrados";
    return this.http.post(URL,data,{headers: headers});
  }

  showUser(nombrados_id:string){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/nombrados/"+nombrados_id;
    return this.http.get(URL,{headers: headers});
  }

  updateUser(nombrados_id:string,data:any){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/nombrados/"+nombrados_id;
    return this.http.post(URL,data,{headers: headers});
  }

  deleteUser(nombrados_id:string){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/nombrados/"+nombrados_id;
    return this.http.delete(URL,{headers: headers});
  }
}