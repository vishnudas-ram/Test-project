import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-scroll',
  imports: [ScrollingModule],
  templateUrl: './cdk-scroll.html',
  styleUrl: './cdk-scroll.css',
})
export class CdkScroll implements OnInit {
  arr:any[]=[];
  ngOnInit(): void {
    for (let index = 0; index < 1000; index++) {
      this.arr.push(index);
    }
  }

}
