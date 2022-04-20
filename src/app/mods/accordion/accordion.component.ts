import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  openedItemIndex = 0;
  @Input() items = [] as any;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number){
    if(index === this.openedItemIndex){
      this.openedItemIndex = -1;
    }else{
      this.openedItemIndex = index;
    }
  }

}
