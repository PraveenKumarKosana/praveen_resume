import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent {
  printComponent(cmpName: string) {
    const printElement = document.getElementById(cmpName);
    if (!printElement) {
      console.error(`Element with ID ${cmpName} was not found.`);
      return;
    }
  
    const printContents = printElement.innerHTML;
    const originalContents = document.body.innerHTML;
  
    // Temporarily replace the body content with the print content
    document.body.innerHTML = printContents;
  
    // Print the page
    window.print();
  
    // Restore the original content
    document.body.innerHTML = originalContents;
  
    // Ensure Angular re-renders the original content properly
    window.location.reload();
  }
}
