import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'app-deferable',
  imports: [Dashboard],
  templateUrl: './deferable.html',
  styleUrl: './deferable.css',
})
export class Deferable {
  isVisible: boolean = false;
}
