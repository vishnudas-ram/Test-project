import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import  DOMPurify  from 'dompurify';

@Injectable({
  providedIn: 'root',
})
export class SanitizeHtml {
  sanitizer = inject(DomSanitizer);

  purifyHtml(html:string): SafeHtml {
    if (html) {
      const cleanHtml = DOMPurify.sanitize(html);
      return this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
    }
    return '';
  }
}
