import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})

export class LivroComponent {
  livros: Livro[] = []
  livroInserir?: Livro;
  estaEditando = false;
  livro: any;

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.livroService.listar().subscribe(livros => {
      this.livros = livros;
    });
  }

  novo() {
    this.livroInserir = new Livro();
  }

  cancelar() {
    this.livroInserir = undefined;
  }

  salvar() {
    if (!this.livroInserir) {
      return;
    }
    if (!this.estaEditando) {
      this.livroService.inserir(this.livroInserir).subscribe(livro => {
        this.listar();
        this.cancelar();
      });
    }
    else {
      this.livroService.atualizar(this.livroInserir).subscribe(livro => {
        this.listar();
        this.cancelar();
      });
    }
  }

  excluir(id?: number) {
    if (!id) {
      return
    }

    const resposta = confirm('Esse livro será excluido. OK ?');

    if (resposta) {
      this.livroService.excluir(id).subscribe(() => {
        this.listar();
      });
    }
  }

  selecionar(livro: Livro) {
    this.livro = livro;
    this.estaEditando = true;

  }
}

