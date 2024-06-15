import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'praveen_resume';

  public loadScript(url: string, callback?: () => void) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.onload = () => {
        if (callback) {
            callback();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngAfterViewInit() {
    this.loadScript('assets/plugins/popper.min.js');
    this.loadScript('assets/plugins/bootstrap/js/bootstrap.min.js');
    this.loadScript('assets/plugins/vanilla-back-to-top.min.js');
    this.loadScript('assets/plugins/flickity/flickity.pkgd.min.js', () => {
        this.loadScript('assets/js/flickity-custom.js');
    });
    this.loadScript('assets/js/demo/style-switcher.js');
    this.loadScript('assets/fontawesome/js/all.js');
  }
}
