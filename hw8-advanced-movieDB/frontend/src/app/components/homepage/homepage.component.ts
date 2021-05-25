import { Component, OnInit } from '@angular/core';

import {PostsService} from '../../services/posts.service';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public mobile_version:any;

  constructor(private PostsService: PostsService, public breakpointObserver: BreakpointObserver) {
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

  public carousel_type: string = "unassigned";
  public data: any;
  public cur_movie: any;

  public pop_movie:any;
  public top_movie:any;
  public trend_movie:any;

  public pop_tv:any;
  public top_tv:any;
  public trend_tv:any;

  public continue_watching:any;

  ngOnInit(): void {
    this.fetchData();
    this.continue_watching = JSON.parse(localStorage.getItem("continue") || "[]");
    //localStorage.clear();
  }

  fetchData(){
    this.PostsService.get_home().subscribe(res => {
      this.data = res;
      this.cur_movie = this.data['cur_movie'];

      this.pop_movie = this.data['pop_movie'];
      this.top_movie = this.data['top_movie'];
      this.trend_movie = this.data['trend_movie'];

      this.pop_tv = this.data['pop_tv'];
      this.top_tv = this.data['top_tv'];
      this.trend_tv = this.data['trend_tv'];

      //console.log(res)
    });
  }

}
