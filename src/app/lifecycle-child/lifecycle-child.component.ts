import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-lifecycle-child',
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.css'
})
export class LifecycleChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewChecked,
  OnDestroy {

  @Input() name: string = '';

  constructor() {
    console.log('Child: constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child: ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('Child: ngOnInit');
  }

  ngDoCheck() {
    console.log('Child: ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Child: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child: ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child: ngOnDestroy');
  }
}
