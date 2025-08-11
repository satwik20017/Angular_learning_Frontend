import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() message = '';
  @Output() notify = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('Child says Hi!');
  }

  greet() {
    return `Hello From child `
  }

  @ContentChild('projectedContent') content!: ElementRef;

  ngAfterContentInit() {
    console.log('Projected Content:', this.content.nativeElement.innerText);
  }
}
