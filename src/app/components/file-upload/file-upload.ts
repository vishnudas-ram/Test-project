import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css',
})
export class FileUpload {

  uploadProgress: number = 0;
  isProcessingOCR: boolean = false;

  constructor(private http: HttpClient) {}

  onFilesSelected(event: any) {
    const files: FileList = event.target.files;
    if (!files.length) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    this.uploadProgress = 0;
    this.isProcessingOCR = false;

    // Angular HttpClient Call
    this.http.post('/api/ocr/process-documents', formData, {
      reportProgress: true, // അപ്‌ലോഡ് പ്രോഗ്രസ് ട്രാക്ക് ചെയ്യാൻ
      observe: 'events'     // ഓരോ ഇവന്റും (progress, response etc.) നിരീക്ഷിക്കാൻ
    }).subscribe({
      next: (event: any) => {
        // ഘട്ടം 1: ഫയലുകൾ ബാക്ക് എൻഡിലേക്ക് അപ്‌ലോഡ് ആകുന്നു
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round((100 * event.loaded) / (event.total || 1));
          
          if (this.uploadProgress === 100) {
            // അപ്‌ലോഡ് കഴിഞ്ഞു, ഇനി OCR പ്രോസസ്സിംഗ് നടക്കുന്നു
            this.isProcessingOCR = true;
          }
        } 
        // ഘട്ടം 2: ബാക്ക് എൻഡിൽ നിന്ന് OCR പ്രോസസ്സിംഗ് കഴിഞ്ഞ് ഫൈനൽ JSON വന്നു
        else if (event.type === HttpEventType.Response) {
          this.isProcessingOCR = false;
          const jsonResponse = event.body;
          console.log('Prefill Form Data:', jsonResponse);
          
          // ഫോമിലേക്ക് പ്രീഫിൽ ചെയ്യാം
          this.prefillForm(jsonResponse);
        }
      },
      error: (err) => {
        this.isProcessingOCR = false;
        console.error('Upload Failed', err);
      }
    });
  }

  prefillForm(data: any) {
    // ഫോം ഫീൽഡുകൾ പാച്ച് ചെയ്യാനുള്ള കോഡ്
  }
}
