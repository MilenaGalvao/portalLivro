import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './views/livro/livro.component';

const routes: Routes = [
  {path: 'livro', component: LivroComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
  exports: [RouterModule]
})
export class AppRoutingModule { }
