import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cdn-img',
  imports: [NgOptimizedImage],
  templateUrl: './cdn-img.html',
  styleUrl: './cdn-img.css',
})
export class CdnImg {}
