import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { ChildComponent } from '../child/child.component';
import { ReversePipe, AltCapPipe } from '../reverse.pipe';
import { UserService } from '../user.service';

@Component({
  selector: 'app-about',
  imports: [FormsModule, CommonModule, HelloWorldComponent, ChildComponent,
    ReactiveFormsModule, ReversePipe, AltCapPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  today = new Date();

 //Pipes
  name1 = 'moumitha';
  salary = 50000;
  completion = 3.45321;
  users = { id: 1, role: 'developer' };
  //Pipes

  //parent-child communication
  parentMessage = 'Hello from Parent!';

  //parent-child communication


  //child-parent communication
  childMessage = '';
  handleChildMessage(message: string) {
    this.childMessage = message
  }
  //child-parent communication


  //Template-driven Forms
  user = {
    name: '',
    email: ''
  };

  submitForm() {
    console.log('Form Submitted', this.user);
  }
  //Template-driven Forms


  //Reactive Forms
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submitForms() {
    console.log(this.form.value);
  }

  constructor(private userService: UserService) { }
  get name2() {
    return this.userService.getUsername()
  }
  changeName() {
    this.userService.setUsername('Updated Satwik');
  }
}
