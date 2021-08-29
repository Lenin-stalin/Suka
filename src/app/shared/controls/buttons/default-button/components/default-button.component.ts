import { Component, Input, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {
  public size: NzButtonSize = 'large';

  @Input() nzType: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
