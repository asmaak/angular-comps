import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnChanges {
@Input() items = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.items);
  }


}
