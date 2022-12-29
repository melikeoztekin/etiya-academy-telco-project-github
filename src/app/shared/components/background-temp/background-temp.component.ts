import { Component, Input } from '@angular/core';

@Component({
  selector: 'etiya-background-temp',
  templateUrl: './background-temp.component.html',
  styleUrls: ['./background-temp.component.scss'],
})
export class BackgroundTempComponent {
  @Input() width!: string;
  @Input() height!: string;
  @Input() margin!: string;
  @Input() padding!: string;
}
