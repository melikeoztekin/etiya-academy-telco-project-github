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
  @Input() buttonType!: string;

  @Output() onClickButton = new EventEmitter<any>();

  onClick(event: Event) {
    this.onClickButton.emit(event);
  }
}
