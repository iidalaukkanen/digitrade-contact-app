import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToolbarOptions} from "./toolbar-options";
import {ToolbarService} from "./toolbar.service";

@Component({
  selector: 'dtca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  options: ToolbarOptions;

  constructor(private router: Router, private toolbar: ToolbarService) { }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions)=> {
      this.options = options;
    });
  }

  onNavigateBack(){
    this.router.navigate(['/contacts']);
  }

}
