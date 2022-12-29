import { Component, Input } from '@angular/core';

@Component({
  selector: 'etiya-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  @Input() width!: string;
  @Input() margin!: string;
  @Input() padding!: string;
}
