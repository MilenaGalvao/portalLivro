import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  [x: string]: any;

  constructor( private http: HttpClient) { }

  //GET
listar(): Observable<Livro[]> {
  return this.http.get<Livro[]>("http://localhost:3000/livro");
}

//POST
inserir(livro: Livro): Observable<Livro>{
  return this.http.post<Livro>("http://localhost:3000/livro", livro);
}

//DELETE
excluir(id: number): Observable<any> { 
  return this.http.delete(`http://localhost:3000/livro/${id}`); 
} 

//Atualizar
atualizar (livro: Livro): Observable<Livro> {
  if (!livro.id) {
    return EMPTY;
  }

  return this.http.put<Livro>(`http://localhost:3000/cliente/${livro.id}`, livro);

}



}
