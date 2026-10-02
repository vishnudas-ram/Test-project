import { AfterContentChecked, AfterContentInit, afterEveryRender, afterNextRender, AfterViewChecked, AfterViewInit, Component, computed, DestroyRef, DoCheck, inject, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hooks',
  imports: [FormsModule,RouterLink],
  templateUrl: './hooks.html',
  styleUrl: './hooks.css',
})
export class Hooks implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked,OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
     console.log('onchanges');
  }
  ngAfterContentChecked(): void {
    console.log('content checked');
  }
  ngAfterContentInit(): void {
    console.log('contentinit');
  }
  ngAfterViewInit(): void {
    console.log('afterviewinit');
  }
  ngAfterViewChecked(): void {
    console.log('afterviewchecked');
  }
  ngDoCheck(): void {
    console.log('docheck');
  }
  ngOnInit(): void {
    console.log('oniniit');
  }

  textInput = signal<string>('');
  displayInput = computed(()=> this.textInput());


  destroyRef = inject(DestroyRef).onDestroy(()=> {
    alert('destroyed in seconds babe..')
  });

  
  afterNextRender = afterNextRender(()=> {
    console.log('afterNextRender');
  });
 
  afterRender = afterEveryRender(()=> {
    console.log('after every Render');
  })
  
  
}


