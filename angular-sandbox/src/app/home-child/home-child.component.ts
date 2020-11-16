import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {

  constructor() { }
  @Input() homeSign;
  public style1=true;
  @Output() changingParent = new EventEmitter();
  ngOnInit(): void {
  }
  clickedFunc(){
    this.changingParent.emit();
  }
}
