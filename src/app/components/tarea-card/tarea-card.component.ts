import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.css']
})
export class TareaCardComponent implements OnInit {

  @Input() tarea: Tarea
  @Output() nextChange = new EventEmitter<Object>()
  @Output() backChange = new EventEmitter<Object>()
  @Output() deleteChange = new EventEmitter<Object>()

  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    switch (this.tarea.status) {
      case 'Backlog':
        this.tarea.status = 'To Do'
        this.nextChange.emit(this.tarea)
        console.log('tarea cambia a:', this.tarea.status);
        break;
      case 'To Do':
        this.tarea.status = 'Ongoing'
        this.nextChange.emit(this.tarea)
        console.log('tarea cambia a:', this.tarea.status);
        break;
      case 'Ongoing':
        this.tarea.status = 'Done'
        this.nextChange.emit(this.tarea)
        console.log('tarea cambia a:', this.tarea.status);
        break;
    }
  }
  backStep() {
    switch (this.tarea.status) {
      case 'To Do':
        this.tarea.status = 'Backlog'
        this.backChange.emit(this.tarea)
        console.log('tarea cambia a:', this.tarea.status);
        break;
      case 'Ongoing':
        this.tarea.status = 'To Do'
        this.backChange.emit(this.tarea)
        console.log('tarea cambia a:', this.tarea.status);
        break;
      case 'Done':
        this.tarea.status = 'Ongoing'
        this.backChange.emit(this.tarea)
        console.log('tarea cambia a:', this.tarea.status);
        break;
    }
  }
  deleteTask() {
    this.deleteChange.emit(this.tarea)
  }
}
