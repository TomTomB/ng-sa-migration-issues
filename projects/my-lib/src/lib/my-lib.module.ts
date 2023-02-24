import { NgModule } from '@angular/core';
import { TestComponent } from './components';
import { TestDirective } from './directives';

@NgModule({
    imports: [TestComponent, TestDirective],
    exports: [TestComponent, TestDirective]
})
export class MyLibModule {}
