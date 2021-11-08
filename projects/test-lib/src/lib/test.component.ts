import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-test',
  template: `
    <mat-icon>people</mat-icon>
  `,
})
export class TestComponent {
  constructor(){}
}
@NgModule({
    declarations: [TestComponent],
    imports: [
        CommonModule,
        MatIconModule
    ]
})
class TestComponentModule{}
