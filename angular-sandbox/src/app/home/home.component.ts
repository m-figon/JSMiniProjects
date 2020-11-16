import { Component, OnInit } from '@angular/core';
import {HomeChildComponent} from '../home-child/home-child.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public sign = "Welcome to home component";
  ngOnInit(): void {
  }
  newSign(){
    this.sign = "Welcome!"
  }
}
