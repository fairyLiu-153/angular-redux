import { Component, OnInit } from '@angular/core';
import { ReduxService } from 'src/app/redux/redux.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private reduxService: ReduxService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      todo: ['']
    });
   }

  ngOnInit(): void {
  }

  addTodo() {
    const text = this.myForm.controls.todo.value;
    this.reduxService.addTodo(text);
    this.myForm.controls.todo.setValue('');
  }

}
