import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos = []
  todo = ''

  constructor() { }

  addTodoInTodos() {
    this.todos.push({
      todo: this.todo,
      done: false
    })
    this.todo = ''
  }

  del(index) {
    this.todos.splice(index, 1)
  }

  ngOnInit(): void {
  }

}
