import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush',
  imports: [],
  templateUrl: './onpush.html',
  styleUrl: './onpush.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Onpush implements OnInit{
  name = 'das'
  timeOutId:any
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.timeOutId = setTimeout(() => {
      this.name = 'sunna';
      // this.cdr.detectChanges();
      // this.cdr.markForCheck();
    }, 6000);
  }

  onclick() {
    console.log(this.name);
  }

  destroyR = inject(DestroyRef).onDestroy(()=> {
     if (this.timeOutId) {
      clearTimeout(this.timeOutId);
     }
  })

}
