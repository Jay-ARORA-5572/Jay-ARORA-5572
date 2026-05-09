import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

import { Hero } from './components/hero/hero.component';
import { About } from './components/about/about.component';
import { Skills } from './components/skills/skills.component';
import { Experience } from './components/experience/experience.component';
import { Projects } from './components/projects/projects.component';
import { Education } from './components/education/education.component';
import { Contact } from './components/contact/contact.component';
// import { Blog } from './components/blog/blog.component';
import { Services } from './components/services/services.component';
import { Loader } from './components/loader/loader.component';
import { Navbar } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    About,
    // Blog,
    Services,
    Loader,
    Navbar,
    Skills,
    Experience,
    Projects,
    Education,
    Contact
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  mode = 'light';

  toggleMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  }

  ngOnInit() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');

    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out',
    });
  }
}
