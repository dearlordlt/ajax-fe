import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  demoTs = [
    { name: 'Hernandezfang', description: 'a' },
    { name: 'Rhaeldez', description: 's' },
    { name: 'Cherudez', description: 'd' },
    { name: 'Mashge', description: 'f' },
    { name: 'Satandez', description: 'x' },
    { name: 'Grubbyher', description: 'z' },
    { name: 'Hernanininki', description: 'v' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
