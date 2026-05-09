import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class Loader implements AfterViewInit {

  ngAfterViewInit(): void {
    const preloader: HTMLElement | null = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => preloader.classList.add('hidden'), 500); // optional fade-out delay
    }
  }
}
