import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'etiya-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonColor: string = 'bg-orange';
  @Input() buttonText!: string | undefined;
  @Input() icon!: string | null;

  @Output() click = new EventEmitter<any>();

  onClick(event: Event) {
    this.click.emit(event);
  }
}
