import { Component,HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KOREMATERIALPOC';
  theme : string = "default";
  constructor(public overlayContainer: OverlayContainer){}
  @HostBinding('class') componentCssClass;
  ngOnInit() {
    
  }
  onThemeChange() {
    if(this.componentCssClass === "pol-theme") {
      this.overlayContainer.getContainerElement().classList.add("default");
      this.componentCssClass = "default";
    } else {
      this.overlayContainer.getContainerElement().classList.add("pol-theme");
      this.componentCssClass = "pol-theme";
    }
  }

}
