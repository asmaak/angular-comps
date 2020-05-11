import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
@Input() items = [];
indexModal = 0 ;
  constructor() { }

  ngOnInit(): void {
  }
  onchangeIndex(index: number){
    if (index === this.indexModal){
      this.indexModal = -1 ;
    }else{
      this.indexModal = index;
    }

  }
}
