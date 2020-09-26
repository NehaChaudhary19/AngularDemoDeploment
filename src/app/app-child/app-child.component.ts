import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  @Input() greetMessage: string ;
  constructor() { }

  
  ngOnInit(): void {
  }

}
