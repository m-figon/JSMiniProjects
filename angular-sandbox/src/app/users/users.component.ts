import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppServiceService} from '../app-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [AppServiceService]
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient, private appService: AppServiceService) { }
  users  = [];
  filter=""
  ngOnInit() {
    this.http.get<any>('http://jsonplaceholder.typicode.com/users').subscribe(data => { 
      this.users = data.slice();
      console.log(this.users);
    })
    this.appService.serviceFunc();
 }

}
