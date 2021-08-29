import { Component, OnInit } from '@angular/core';
import { logo } from 'src/app/shared/constants/image';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logo = logo;
  public query: any;
  constructor() { }

  ngOnInit(): void {
  }

}
