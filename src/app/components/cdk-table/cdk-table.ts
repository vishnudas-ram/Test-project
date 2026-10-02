import { CdkTableModule } from '@angular/cdk/table';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RxjsService } from '../../services/rxjs-Service/rxjs-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cdk-table',
  imports: [CdkTableModule,CommonModule],
  templateUrl: './cdk-table.html',
  styleUrl: './cdk-table.css',
})
export class CdkTable implements OnInit {
  ngOnInit(): void {
    this.apiService.getArrayOfNumbers().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next:(res)=> {
        this.arr = res;
      },
      error:(err)=> {}
    })
  }
  apiService = inject(RxjsService);
  destroyRef = inject(DestroyRef);
  arr:any[] = [];
  displayedColumns = ['id','age','dob','name'];
}
