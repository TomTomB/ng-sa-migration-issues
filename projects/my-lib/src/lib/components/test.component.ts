import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
        <p>Test</p>
    `
})
export class TestComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
