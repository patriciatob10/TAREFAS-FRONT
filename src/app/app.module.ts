import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { FormTarefaComponent } from './form-tarefa/form-tarefa.component';
import { CardTarefaComponent } from './card-tarefa/card-tarefa.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    AdicionarTarefaComponent,
    FormTarefaComponent,
    CardTarefaComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
