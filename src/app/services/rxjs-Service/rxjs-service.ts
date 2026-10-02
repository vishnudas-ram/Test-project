import { Injectable } from '@angular/core';
import { catchError, delay, interval, Observable, of, Subject, throwError } from 'rxjs';
import { User } from '../../constants/userData';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private eventSubject = new Subject();
  public eventSub$ = this.eventSubject.asObservable();

  nextEvent(eventCount:number):void {
    this.eventSubject.next(eventCount);
  }

  getDataById(num:number):Observable<number> {
    return of(num*10).pipe(delay(1500));
  }
  getDataForMergeConcat(num:number):Observable<number> {
    return of(num).pipe(delay(4000 -(num*1000)));
  }

  getArrayOfNumbers():Observable<any[]> {
    return of(User).pipe(delay(3000));
  }

  getApiChains():Observable<any>[] {
    return [
      of(1).pipe(delay(1000)),
      of(2).pipe(delay(3000)),
      of(3).pipe(delay(2000)),
      throwError(()=> 'something went wrong').pipe(delay(4000))
       .pipe(catchError(()=> of(null))),
      of(1).pipe(delay(5000)),
    ]
  }

  getInterval():Observable<number> {
    return interval(5000,);
  }

}
