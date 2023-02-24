import { NgModule } from '@angular/core';
import { TestComponent } from './components';
import { TestDirective } from './directives';

@NgModule({
  declarations: [TestComponent, TestDirective],
  exports: [TestComponent, TestDirective],
})
export class MyLibModule {}
