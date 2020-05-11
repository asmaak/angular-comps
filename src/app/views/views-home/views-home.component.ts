import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
stats = [
  {value : 22 , label: '# of user'},
  {value : 900, label: 'Revenue'},
   {value : 50 , label: 'Views'},
];
items = [
  {
    image: 'assets/images/couch.jpeg',
    title: 'couch',
    description: ' This is a fantastic couch to sit it'
  },
  {
    image: 'assets/images/dresser.jpeg',
    title: 'dresser',
    description: ' This is a great dresser to put stuff it'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
