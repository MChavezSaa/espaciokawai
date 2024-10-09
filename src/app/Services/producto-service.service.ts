import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Producto } from '../Entidades/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService{
  private urlEndPoint: string = 'http://localhost:8080';
  products: Producto[] = [];

 
  constructor(private http: HttpClient, private router: Router) { }
 
 
 
  /*PRODUCTOS */
 finAll(): Observable<Producto[]> {
  return this.http.get(this.urlEndPoint+'/productos/all').pipe(
    map((prod, any) => prod as Producto[],)
  );
}

}
