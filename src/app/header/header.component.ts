import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentRoute: string;

  constructor(
    private router: Router,
    private el: ElementRef,
    private toastr: ToastrService
  ) {
    this.currentRoute = this.router.url;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
  ngOnInit(): void {}
  hire() {
    this.toastr.success('Thanks for the consideration! call anytime +91-8341011015');
  }
}
