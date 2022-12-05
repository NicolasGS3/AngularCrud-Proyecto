import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //obtiene el listado de los empleados (backend)
  private baseURL = "http://localhost:8080/api/v1/clientes";

  constructor(private HttpClient : HttpClient) { }
  
  obtenerListaDeClientes():Observable<Cliente[]>{
    return this.HttpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  obtenerClientePorId(id:number):Observable<Cliente>{
    return this.HttpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }

  registrarCliente(cliente:Cliente) : Observable<object>{
    return this.HttpClient.post(`${this.baseURL}`, cliente);
  }

  eliminarCliente(id:number): Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }
}
