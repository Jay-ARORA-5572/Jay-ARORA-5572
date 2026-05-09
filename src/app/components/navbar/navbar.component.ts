import { Component, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // fixed from styleUrl
})
export class Navbar implements AfterViewInit {

  hidden = false;
  lastScroll = 0;
  active = 'hero';
  mobileMenuOpen = false; // added for mobile toggle

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const nav = this.el.nativeElement.querySelector('nav');

    gsap.from(nav, {
      y: -80,
      opacity: 0,
      duration: 0.68,
      ease: 'power3.out'
    });

    const links = nav.querySelectorAll('a');

    links.forEach((link: HTMLElement) => {
      link.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(link, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, { x: 0, y: 0, duration: 0.3 });
      });
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const current = window.scrollY;

    // Hide navbar when scrolling down after 200px
    if (current > this.lastScroll && current > 200) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
    this.lastScroll = current;

    this.detectActiveSection();
  }

  detectActiveSection() {
    const sections = [
      'hero', 'about', 'services', 'skills', 'experience',
      'projects', 'blog', 'education', 'contact'
    ];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= 180 && rect.bottom >= 180) {
        this.active = id;
        break;
      }
    }
  }
}
