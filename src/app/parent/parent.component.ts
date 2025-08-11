import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  @ViewChild(ChildComponent) child!: ChildComponent;

  ngAfterViewInit() {
    console.log(this.child.greet());
  }

  callChild() {
    alert(this.child.greet())
  }
}
