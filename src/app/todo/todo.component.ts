import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tarefas = []
  input = ''

  constructor() { }

  addTarefas() {
    this.tarefas.push({ input: this.input,feito: false})
    this.input = ''
  }

  del(index) {
    this.tarefas.splice(index, 1)
  }

  ngOnInit(): void {
  }

}
