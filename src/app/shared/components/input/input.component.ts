import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'etiya-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputLabel!: string;
  @Input() requiredField: boolean = false;
  @Input() inputType: string = 'text';
  @Input() icon1!: string;
  @Input() icon2!: string;

  public passwordToggle: boolean = false;
  public passwordShow: boolean = true;

  ngOnInit(): void {
    this.passwordToggle = this.inputType == 'password';
  }

  public passwordToggleEvent() {
    this.passwordShow = !this.passwordShow;
    if (this.passwordShow) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
