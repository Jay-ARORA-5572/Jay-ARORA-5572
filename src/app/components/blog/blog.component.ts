import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class Blog {
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/data/blog.json').subscribe(res => {
      this.posts = res;
    });
  }
  calculateReadingTime(content: string): string {
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200); // 200 wpm
    return `${time} min read`;
  }

}
