import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-cast-pop-up',
  templateUrl: './cast-pop-up.component.html',
  styleUrls: ['./cast-pop-up.component.css']
})
export class CastPopUpComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private PostsService: PostsService) { }

  @Input() public cast_data:any;

  public cast_detail_data:any;

  public gender:any;

  get_cast_detail(){
    this.PostsService.get_cast_detail(this.cast_data.id).subscribe(res => {
      this.cast_detail_data = res;
      if (this.cast_detail_data['gender'] == "1")
      {
        this.gender = "Female";
      }
      else{
        this.gender = "Male";
      }
      //console.log(res)
    });
  }

  ngOnInit(): void {
    this.get_cast_detail();
    // alert(this.cast_data.name);
  }

}
