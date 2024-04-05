import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../../../config/config';
import { AuthService } from '../../../../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CasindeterminadosService {

  constructor(
    public http: HttpClient,
    public authService: AuthService,
  ) { }

  listUsers(){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/casindeterminados";
    return this.http.get(URL,{headers: headers});
  }

  listConfig(){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/casindeterminados/config";
    return this.http.get(URL,{headers: headers});
  }

  registerUser(data:any){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/casindeterminados";
    return this.http.post(URL,data,{headers: headers});
  }

  showUser(casindeterminados_id:string){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/casindeterminados/"+casindeterminados_id;
    return this.http.get(URL,{headers: headers});
  }

  updateUser(casindeterminados_id:string,data:any){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/casindeterminados/"+casindeterminados_id;
    return this.http.post(URL,data,{headers: headers});
  }

  deleteUser(casindeterminados_id:string){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    const URL = URL_SERVICIOS+"/casindeterminados/"+casindeterminados_id;
    return this.http.delete(URL,{headers: headers});
  }
}