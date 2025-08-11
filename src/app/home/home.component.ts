import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Angular-Learning';

  today = new Date();
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  //Event Binding
  count = 0;

  increment() {
    this.count++;
  }
  //Event Binding End

  //Two-Way Binding
  name = '';
  //Two-Way Binding

  //Directives
  showDetails = true;
  technologies = ['Angular', 'Node', 'MySQL'];
  isActive = true;

  fontSize = '20px';
  color = 'magenta';

  //Practice
  showPara = true;
  languages = ['Telugu', 'Hindi', 'English'];
  style = {
    fontSize: '25px',
    color: 'green'
  }
  //Practice
  //Directives


  display = true;
  boxColor = 'green'

  changeToRed() {
    this.display = true;
    this.boxColor = 'red'
  }

  changeToYellow() {
    this.display = true;
    this.boxColor = 'yellow'
  }

  changeToGreen() {
    this.display = true;
    this.boxColor = 'green'
  }

  toggleColorBox() {
    this.display = !this.display;
  }


  divcolor = 'red';

  ChangeConditionally(value: any) {
    this.divcolor = value
  }

  changeCustomColor(event: Event) {
    this.divcolor = (event.target as HTMLInputElement).value
  }

  students = [
    { "name": "Satwik", "age": 24 },
    { "name": "Sam", "age": 25 }
  ]

  handleEvent(event: Event) {
    console.log('Function called -> ',event.type);
  }
}
