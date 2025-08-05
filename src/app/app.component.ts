import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse.pipe';
import { ChildComponent } from "./child/child.component";
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,
    FormsModule,
    CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 isDarkMode = false;

 toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  const body = document.body;
  if(this.isDarkMode) {
    body.classList.add('dark-mode')
  } else {
    body.classList.remove('dark-mode')
  }
 }
}
