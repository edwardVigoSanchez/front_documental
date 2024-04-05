import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../../../config/config';
import { AuthService } from '../../../../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProveidosService {

  constructor(
    public http: HttpClient,
    public authService: AuthService,
  ) { }

  listUsers(){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/proveidos";
    return this.http.get(URL,{headers: headers});
  }

  listConfig(){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/proveidos/config";
    return this.http.get(URL,{headers: headers});
  }

  registerUser(data:any){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/proveidos";
    return this.http.post(URL,data,{headers: headers});
  }

  showUser(proveidos_id:string){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/proveidos/"+proveidos_id;
    return this.http.get(URL,{headers: headers});
  }

  updateUser(proveidos_id:string,data:any){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/proveidos/"+proveidos_id;
    return this.http.post(URL,data,{headers: headers});
  }

  deleteUser(proveidos_id:string){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/proveidos/"+proveidos_id;
    return this.http.delete(URL,{headers: headers});
  }
}