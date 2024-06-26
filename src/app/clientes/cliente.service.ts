import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Cliente } from './cliente';
import { of, Observable, throwError, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs';
import swal from 'sweetalert2';

import { Router } from '@angular/router';


@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes'

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getClientes(page: number): Observable<any>{
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap( (response: any) => {
        console.log('ClienteService: tap:1');
        (response.content as Cliente[]).forEach(cliente => {
          console.log(cliente.nombre);
        })
      }),
      map((response: any) => {
         (response.content as Cliente[]).map(cliente => {
          // cliente.nombre = cliente.nombre.toUpperCase();
          // cliente.apellido = cliente.apellido.toUpperCase();
          // cliente.createAt = formatDate(cliente.createAt, 'dd/MM/yyyy', 'en-US')
          return cliente;
        });
        return response;
      })
    );
 }

create(cliente: Cliente) : Observable<any> {
  return this.http.post<any>(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
    catchError(e => {
      console.error(e.error.mensaje);
      swal.fire('Error al crear el cliente', e.error.mensaje, 'error');
      return throwError(e);
    })
  )
}

getCliente(id: any): Observable<Cliente>{
  return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
    catchError(e => {
      this.router.navigate(['/clientes'])
      console.error(e.error.mensaje);
      swal.fire('Error al editar', e.error.mensaje, 'error');
      return throwError(e);
    })
  )
}

update(cliente: Cliente): Observable<any>{
  return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
    catchError(e => {
      console.error(e.error.mensaje);
      swal.fire('Error al editar el cliente', e.error.mensaje, 'error');
      return throwError(e);
    })
  )
}

delete(id: number): Observable<Cliente>{
  return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
    catchError(e => {
      console.error(e.error.mensaje);
      swal.fire('Error al eliminar el cliente', e.error.mensaje, 'error');
      return throwError(e);
    })
  )
}

}
