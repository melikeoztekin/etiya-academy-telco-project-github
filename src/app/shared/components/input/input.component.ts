import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'etiya-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() inputLabel!: string;
  @Input() requiredField: boolean = false;
  @Input() inputType: string = 'text';
  @Input() icon1!: string;
  @Input() icon2!: string;
  @Input() value: any;
  disabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  markAsTouched(): void {
    this.onTouched();
  }

  public passwordToggle: boolean = true;
  public passwordShow: boolean = false;

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
