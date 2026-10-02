import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RxjsService } from '../../services/rxjs-Service/rxjs-service';
import { catchError, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, forkJoin, map, mergeMap, Observable, of, Subject, Subscription, switchMap, take, takeUntil, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hightlights } from '../../directives/highlight/hightlights';
import { FilterPipe } from '../../pipes/filter/filter-pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxjs',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,FilterPipe,Hightlights],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class Rxjs implements OnInit,OnDestroy {
  
  apiService = inject(RxjsService);
  arr = signal<any>([]);
  filteredArr = signal<any>([])
  isLoading = signal<boolean>(false);
  clickCount:number = 0;
  subscriptions!:Subscription;
  searchText: string = '';
  sub$ = new Subject();
  searchString = new FormControl();
  asyncData!:Observable<any>;

  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const id =  +(this.activatedRoute.snapshot?.params['id']);
    this.activatedRoute.paramMap.subscribe((val)=> { 
      console.log(val);
    })
    
    this.asyncData = this.apiService.getArrayOfNumbers();
    
    this.getData();
    this.getByForkJoin();
    this.subscriptions = this.apiService.eventSub$.pipe(
      // take(10),
      // debounceTime(500),
      exhaustMap((count:any)=> {return this.apiService.getDataForMergeConcat(count)})).subscribe({
      next:(res:any)=> {
        console.log(res);
      }
    })

    this.searchString.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(((term:string|null)=> of(term).pipe(delay(1000))))).subscribe({
      next:(res:any)=> {
        console.log(res);
      },
      error:(err:any)=> {}
    })
   
    this.intervalLogicHandler();
  }

  getData() {
    this.isLoading.set(true);
    this.apiService.getArrayOfNumbers().subscribe({
      next:(res:any)=> {
       this.arr.set(res);
       this.filteredArr.set([...res]);
       this.isLoading.set(false);
      },
      error: (err:any)=> {
        this.isLoading.set(false)
      }
    })
  }

  getByForkJoin() {
    forkJoin(this.apiService.getApiChains())
    .pipe(takeUntil(this.sub$)).subscribe({
      next:(res:any)=> {
        console.log(res);
      },
      error:(err:any)=> {
        console.log(err);
      }
    })
  }

  eventButtonClick() {
    this.clickCount++;
    this.apiService.nextEvent(this.clickCount);
  }

  onSearch() {
    this.filteredArr.set(this.arr().filter((val:any)=> {      
      return val.name.toLowerCase().includes(this.searchText.toLowerCase().trim())
    }))
  }

  onSearchUsingSwitchMap() {

  }

  onSelect(event:any):void {
    const selectedItem = (event.target as HTMLSelectElement).value;
    if (selectedItem && selectedItem !== 'null') {
      this.filteredArr.set(this.arr().filter((val:any)=> val.name == selectedItem));
    } else {
      this.filteredArr.set(this.arr());
    }
  }

  intervalLogicHandler() {
    this.apiService.getInterval().pipe(delay(3000),
      map((val)=> val+1),
      switchMap((val:any)=> {
        if (val== 5) {
          return throwError(()=> new Error('its 5'));
        }
        return of(val);
      }),
      take(10),
      takeUntilDestroyed(this.destroyRef)).subscribe({
      next:(res)=> {
      console.log(res);
     },
     error:(err)=> {
      console.log(err.message);
    }
    })
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    this.sub$.next('');
    this.sub$.complete();
  }
}
