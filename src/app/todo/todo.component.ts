import { Component, OnInit } from '@angular/core';
import { faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tarefas = []
  input = ''
  faBan = faBan;

  constructor() { }

  addTarefas() {
    if(this.input !== ""){
    this.tarefas.push({ input: this.input,feito: false})
    this.input = ''}
  }

  del(index) {
    this.tarefas.splice(index, 1)
  }

  ngOnInit(): void {
  }

}
