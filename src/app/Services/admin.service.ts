import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Admin } from '../Models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admins:Admin[]=[]

  constructor(
    private _httpClient:HttpClient
    ) { }

  getAdmins():Observable<Admin[]>{
    return this._httpClient.get<Admin[]>(`${environment.apiURL}/admin`)
  }
  deleteAdmins(adminId:number):Observable<Admin>{
    return this._httpClient.delete<Admin>(`${environment.apiURL}/admin/${adminId}`)
  }
  getAdmin(id: number): Observable<any> {
    return this._httpClient.get(`${environment.apiURL}/admin/${id}`);
  }
  getAdminIDs () {
    return this.admins.map(e=>e.id)
  }
  updateAdmin(id:string | undefined, adminData: Admin):Observable<Admin>{
    return this._httpClient.patch<Admin>(`${environment.apiURL}/admin/${id}`,adminData,)
  }
  saveAdmin(admin:Admin){
    return this._httpClient.post<Admin>(`${environment.apiURL}/admin/`,admin)

  }
}
