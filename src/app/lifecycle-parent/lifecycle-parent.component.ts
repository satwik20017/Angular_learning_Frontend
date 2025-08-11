import { Component } from '@angular/core';
import { LifecycleChildComponent } from "../lifecycle-child/lifecycle-child.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-parent',
  imports: [LifecycleChildComponent, FormsModule, CommonModule],
  templateUrl: './lifecycle-parent.component.html',
  styleUrl: './lifecycle-parent.component.css'
})
export class LifecycleParentComponent {
  username: string = '';
  showChild: boolean = true;

  toggle() {
    this.showChild = !this.showChild;
  }
}
