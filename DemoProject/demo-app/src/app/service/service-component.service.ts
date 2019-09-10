import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceComponentService {

  constructor(private http: HttpClient) { }

  jsonData = 
  [
        {
          "name": "Virat Kohli",
          "age": 25,
          "gender": "M",
        },
        {
          "name": "Ricky Ponting",
          "age": 40,
          "gender": "M",
        } 
  ]

  getData() {
    //return this.jsonData;
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  deleteData(obj) {
    //return this.jsonData;
    return this.http.delete("https://jsonplaceholder.typicode.com/posts"+"/",obj.id);
  }
  
}
