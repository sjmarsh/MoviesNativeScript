import { Component, OnInit } from "@angular/core";
import { EnvironmentConfig } from './services';

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Movies Native"></ActionBar>
    <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent implements OnInit {
  
  constructor(private envConfig: EnvironmentConfig){
  }

  ngOnInit(){
    this.envConfig.initialize();
  }
}
