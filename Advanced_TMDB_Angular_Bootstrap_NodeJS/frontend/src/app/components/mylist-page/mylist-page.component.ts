import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-mylist-page',
  templateUrl: './mylist-page.component.html',
  styleUrls: ['./mylist-page.component.css']
})
export class MylistPageComponent implements OnInit {

  public mobile_version:any;

  constructor(private route: ActivatedRoute, public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.mobile_version = true;
      }
      else
      {
        this.mobile_version = false;
      }
    });
  }

  public mylist_data: any;

  public row_num:any;
  public row_iterater:any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mylist_data = JSON.parse(localStorage.getItem("watchlist") || "[]");
      this.row_num = Math.ceil(this.mylist_data.length / 6);
      this.row_iterater = Array(this.row_num).keys();
    });
  }

}
