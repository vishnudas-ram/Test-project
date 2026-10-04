import { afterEveryRender, AfterViewInit, Component, effect, ElementRef, inject, OnInit, signal, ViewChild, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SanitizeHtmlPipe } from "../../pipes/sanitizer/sanitize-html-pipe";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, SanitizeHtmlPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  str = `<a href="javascript:alert('XSS')">Click here</a`;
  safeInnerHtml = signal(this.str)
  themeSignal = signal('light');

  themeEffect = effect(() => {
    console.log('Theme changed to:', this.themeSignal());
    localStorage.setItem('theme', this.themeSignal());
  })

  @ViewChild('view') pTag!: ElementRef;

  setTheme(theme: string) {
    this.themeSignal.set(theme);
  }

  ngOnInit() {
   this.removeDuplicates();
  }

  afterNext = afterEveryRender(()=> {
   this.pTag.nativeElement.innerHTML = this.str;
  })

  thirdLargest() {
    const   firstArray = [6,86,7,9,3,50,1];
   let first:any;
   let second:any;
   let third:any;
   for (let i = 0; i < firstArray.length; i++) {
    let element = firstArray[i];
    if (!first || element < first) {
      third = second
      second = first;
      first = element;
    } else if(!second || element < second) {
      third = second;
      second = element;
    } else if(!third || element < third) {
      third = element;
    }
   }
   console.log(third);
  }

  removeDuplicates() {
    const arr = [1,1,3,4,5,5,7];
    const setArr = new Set(arr);
    console.log([...setArr]);
    
    const uniqueArr:number[] = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if(uniqueArr.indexOf(element) === -1) {
        uniqueArr.push(element);
      }
    }
    console.log(uniqueArr);
  }

}
