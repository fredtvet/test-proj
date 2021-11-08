import { ChangeDetectorRef, Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TestComponent } from 'test-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private cdRef: ChangeDetectorRef,
    private viewRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ){}

  ngAfterViewInit(): void {
    const fac = this.cfr.resolveComponentFactory(TestComponent)
    this.viewRef.createComponent(fac);
    this.cdRef.detectChanges();
  }
}
