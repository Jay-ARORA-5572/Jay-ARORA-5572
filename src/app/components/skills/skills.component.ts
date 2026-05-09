import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-skills',
  imports: [NgChartsModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class Skills {

    techData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Angular', 'Node.js', 'MongoDB', 'Tailwind', 'SQL'],
    datasets: [
      {
        label: 'Technical Skills',
        data: [85, 75, 70, 90, 60]
      }
    ]
  };

  techData1 = {
    labels: ['Angular', 'Node.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Python'],
    datasets: [
      {
        label: 'Proficiency (%)',
        data: [90, 85, 80, 75, 88, 70],
      }
    ]
  };

  softData = {
    labels: ['Communication', 'Team Work', 'Problem Solving', 'Adaptability', 'Leadership'],
    datasets: [
      {
        label: 'Proficiency (%)',
        data: [90, 85, 88, 92, 80],
      }
    ]
  };
}
