import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() themeChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onThemeChange() {
    this.themeChange.emit();
  }
}
