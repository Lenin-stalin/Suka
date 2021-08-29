import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TABS } from 'src/assets/mocks/tabs.mocks';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  public tabs = TABS;
  constructor() { }

  ngOnInit(): void {
  }

}
