import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.css'],
})
export class HabitFormComponent implements OnInit {
  habitForm: any;
  @Output() addHabit = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  onSubmit(newHabit: any) {
    if (newHabit.title !== '') {
      this.addHabit.emit(newHabit);
      this.habitForm.reset();
    }
  }
}
