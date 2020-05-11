import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-collections',
  templateUrl: './home-collections.component.html',
  styleUrls: ['./home-collections.component.css']
})
export class HomeCollectionsComponent implements OnInit {
  headers = [
    {key: 'employed', label: 'Has a job?'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age	'},
    {key: 'job', label: 'Job	'},
  ];
  data = [
    {name: 'James' , age: 24 , job: 'Engineer', employed: true },
    {name: 'Jill' ,  age: 26 , job: 'Engineer', employed: false  },
    {name: 'Elyse' , age: 24 , job: 'Designer', employed: true  }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
