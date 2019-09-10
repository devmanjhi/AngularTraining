import { Component, OnInit, Output } from '@angular/core';
import { ServiceComponentService } from '../service/service-component.service';

@Component({
  selector: 'app-displaypipes',
  templateUrl: './displaypipes.component.html',
  styleUrls: ['./displaypipes.component.css']
})
export class DisplaypipesComponent implements OnInit {
  email2 ="abc@gmail.com"
  
  constructor(private service : ServiceComponentService) { }
  ngOnInit() {
  //  console.log(this.service.getData());
  //this.getDataFromService();
  }

  jsonObj;
  jsonData ;
  getDataFromService() {
    this.service.getData().subscribe(
      response => {
        this.jsonData = response;
       console.log(response);
      }
    );
  }

  displayJsonDataFromService() {
    return this.getDataFromService();
  }

  deletePost(objPost) {
    this.service.deleteData(objPost).subscribe(
      response =>{
      console.log(response);
      let index = this.jsonData.indexOf(objPost);
      this.jsonData.spice(index,1);
    })
  }

  imgUrl = "http://lorempixel.com/400/200";
  isActive = true;

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked",$event);
  }

  onDivClicked($event){
    console.log("Div was clicked",$event);
  }

  onInputClicked(email){
    console.log("Email:"+email);
  }

  onInput2Clicked(){
    console.log(this.email2);
  }

  courseObj = {
    title:"Angular 8",
    rating: 4.8,
    students:30,
    price:5
  }

  largetext = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

  titletext = "devashish is a goodboy"

  parentchild() {

    console.log("childtoparent")
  }
  // jsonData = 
  // [
  //       {
  //         "name": "Virat Kohli",
  //         "age": 25,
  //         "gender": "M",
  //       },
  //       {
  //         "name": "Ricky Ponting",
  //         "age": 40,
  //         "gender": "M",
  //       } 
  //   ]
}