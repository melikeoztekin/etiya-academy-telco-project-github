import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfNot]',
})
export class IfNotDirective {
  constructor(
    private _viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input()
  set ngIfNot(condition: boolean) {
    if (condition === false) {
      this._viewContainer.clear();
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
