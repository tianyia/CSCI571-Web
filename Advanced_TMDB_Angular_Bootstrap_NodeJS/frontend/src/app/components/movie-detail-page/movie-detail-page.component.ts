import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {PostsService} from '../../services/posts.service';

import {CastPopUpComponent} from '../cast-pop-up/cast-pop-up.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  public mobile_version:any;

  constructor(private route: ActivatedRoute, private PostsService:PostsService, private modalService: NgbModal, public breakpointObserver: BreakpointObserver ) {
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

  public id:any;

  public detail_data:any;
  public trailer_key:any;

  public button_text:any = "Add to watchlist";
  public alert_type:any = "success";
  public alert_text:any = "";

  get_detail(){

    this.PostsService.get_movie_detail(this.id).subscribe(res => {
      this.detail_data = res;

      if(this.detail_data['trailer'] && this.detail_data['trailer']['key'])
      {
        this.trailer_key = this.detail_data['trailer']['key'];
      }
      else{
        this.trailer_key = "tzkWB85ULJY";
      }
      //console.log(res)

      //use local storage to store data for continue watching
      var continue_watching = JSON.parse(localStorage.getItem("continue") || "[]");
      var ind = continue_watching.map(function (object:any) { return object.id; }).indexOf(this.detail_data['detail']['id']);

      if(ind != -1)
      {continue_watching.splice(ind,1);}

      continue_watching.unshift(this.detail_data['detail']);

      if(continue_watching.length > 24)
      {continue_watching.splice(24,continue_watching.length-24);}

      localStorage.setItem("continue", JSON.stringify(continue_watching));
      //localStorage.clear();

      //watchlist
      var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
      var ind = watchlist.map(function (object:any) { return object.id; }).indexOf(this.detail_data['detail']['id']);
      if(ind != -1)
      {
        this.button_text = "Remove from watchlist";
      }

    });
  }

  button_click()
  {
    if(this.button_text == "Add to watchlist")
    {
      this.button_text = "Remove from watchlist";
      this.alert_type = "success";
      this.alert_text = "Added to watchlist";

      var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
      watchlist.unshift(this.detail_data['detail']);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
    else
    {
      this.button_text = "Add to watchlist";
      this.alert_type = "danger";
      this.alert_text = "Removed from watchlist";

      var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
      var ind = watchlist.map(function (object:any) { return object.id; }).indexOf(this.detail_data['detail']['id']);
      watchlist.splice(ind,1);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
    setTimeout(()=>{this.alert_text = "";}, 5000);

  }

  open_Modal(cast_data:any)
  {
    const modalRef = this.modalService.open(CastPopUpComponent,{ size: 'lg' });
    modalRef.componentInstance.cast_data = cast_data;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.button_text = "Add to watchlist";
      this.alert_type = "success";
      this.alert_text = "";

      this.id = this.route.snapshot.paramMap.get('id');
      this.get_detail();
      window.scrollTo(0, 0);
    });
  }

}
