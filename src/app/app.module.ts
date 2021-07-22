import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareaCardComponent } from './components/tarea-card/tarea-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TareaCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
