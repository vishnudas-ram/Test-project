import { inject, Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SanitizeHtml } from '../../services/sanitize/sanitize-html';

@Pipe({
  name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
  sanitize = inject(SanitizeHtml)
  transform(value: string): SafeHtml {
    return this.sanitize.purifyHtml(value);
  }
}
