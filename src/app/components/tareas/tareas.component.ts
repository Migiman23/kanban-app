import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../models/tarea'
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tarea: Tarea
  tareas: Tarea[]
  backlogList: Tarea[] = []
  toDoList: Tarea[] = []
  ongoingList: Tarea[] = []
  doneList: Tarea[] = []

  constructor() {
    this.tarea = new Tarea('', '', '', '')
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    const lista = this.backlogList
    const tareaObject: Tarea = {
      id: uuidv4(),
      titulo: this.tarea.titulo,
      status: 'Backlog',
      descripción: ''
    }
    let existe = false
    if(this.backlogList.map(item => item.titulo).includes(tareaObject.titulo)) {
      console.log('Existe');
      existe = true
    }
    if(this.toDoList.map(item => item.titulo).includes(tareaObject.titulo)) {
      console.log('Existe');
      existe = true
    }
    if(this.ongoingList.map(item => item.titulo).includes(tareaObject.titulo)) {
      console.log('Existe');
      existe = true
    }
    if(this.doneList.map(item => item.titulo).includes(tareaObject.titulo)) {
      console.log('Existe');
      existe = true
    }
    if(!existe) {
      lista.push(tareaObject)
      this.backlogList = lista
      this.tarea.titulo = ''
    }
  }
  getBacklog(): void {
    this.backlogList = this.backlogList.filter(task => task.status === 'Backlog')
  }

  nextStep(tarea) {
    console.log('llegó', tarea);
    switch (tarea.status) {
      case "To Do":
        console.log('Cambia a', tarea.status);
        this.backlogList.filter(task => task.id != tarea.id)
        this.toDoList.push(tarea)
        break;
      case 'Ongoing':
        console.log('Cambia a', tarea.status);
        this.toDoList.filter(task => task.id != tarea.id)
        this.ongoingList.push(tarea)
        break;
      case 'Done':
        console.log('Cambia a', tarea.status);
        this.ongoingList.filter(task => task.id != tarea.id)
        this.doneList.push(tarea)
        break;
    }
    this.getBacklog()
    this.toDoList = this.toDoList.filter(task => task.status === 'To Do')
    this.ongoingList = this.ongoingList.filter(task => task.status === 'Ongoing')
    this.doneList = this.doneList.filter(task => task.status === 'Done')
  }

  backStep(tarea) {
    console.log('llegó', tarea);
    console.log('llegó', tarea);
    switch (tarea.status) {
      case "Backlog":
        console.log('Cambia a', tarea.status);
        this.toDoList.filter(task => task.id != tarea.id)
        this.backlogList.push(tarea)
        break;
      case "To Do":
        console.log('Cambia a', tarea.status);
        this.ongoingList.filter(task => task.id != tarea.id)
        this.toDoList.push(tarea)
        break;
      case 'Ongoing':

        console.log('Cambia a', tarea.status);
        this.doneList.filter(task => task.id != tarea.id)
        this.ongoingList.push(tarea)
        break;
    }
    this.getBacklog()
    this.toDoList = this.toDoList.filter(task => task.status === 'To Do')
    this.ongoingList = this.ongoingList.filter(task => task.status === 'Ongoing')
    this.doneList = this.doneList.filter(task => task.status === 'Done')
  }
  deleted(tarea) {
    switch (tarea.status) {
      case 'Backlog':
        this.backlogList = this.backlogList.filter(task => task.id != tarea.id)
        break;
      case 'To Do':
        this.toDoList = this.toDoList.filter(task => task.id != tarea.id)
        break;
      case 'Ongoing':
        this.ongoingList = this.ongoingList.filter(task => task.id != tarea.id)
        break;
      case 'Done':
        this.doneList = this.doneList.filter(task => task.id != tarea.id)
        break;
    }
  }

}
