import { Component, OnInit } from '@angular/core';
import { TestDirective } from '../directives/test.directive';

@Component({
    selector: 'app-test',
    template: ` <p app-test>Test</p> `,
    standalone: true,
    imports: [TestDirective]
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
