import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router: Router
  ) { }

  displayRoutingData() {
   this.router.navigate(["/course"]);
  }
  postId:any;
  postStatus:String;
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        this.postId = +params.get("id");
        console.log(this.postId);
      }
    )
  }
}
