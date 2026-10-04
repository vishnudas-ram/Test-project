import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";

@Component({
  selector: "app-fetch-promise",
  imports: [],
  templateUrl: "./fetch-promise.html",
  styleUrl: "./fetch-promise.css",
})
export class FetchPromise implements OnInit {
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getList();
  }
  // getList() {
  //   this.http.get('http://localhost:5000/api/all-cars').subscribe({
  //     next: (res)=> console.log(res)
  //   })
  // }

  async getList() {
    try {
      const res = await fetch('http://localhost:5000/api/all-cars');
      const data = await res.json();
      console.log(data.cars);
      
    } catch (error) {
      console.log(error);
    }    
  }
}
