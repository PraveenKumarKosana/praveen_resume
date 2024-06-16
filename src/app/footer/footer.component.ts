import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private toastr: ToastrService) {}
  talk() {
    this.toastr.success(
      'Thanks for the consideration! call anytime +91-8341011015'
    );
  }
}
