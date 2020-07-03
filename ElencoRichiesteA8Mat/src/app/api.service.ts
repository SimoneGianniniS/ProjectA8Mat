import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from './requests/request-list/request-list.component';
const localUrl = 'https://localhost:44363/';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStore() {    
    var url = localUrl + 'api/Stores';
    url = url.replace(/[?&]$/, "");
    let options_ : any = {
      observe: "body",    
      responseType:"json",
      headers: new HttpHeaders({
          "Accept": "text/plain",
          "Access-Control-Allow-Origin": "http://localhost:4200",
          "Access-Control-Allow-Headers" : "Content-Type"
      })
  };
    return  this.http.request("get", url, options_);
  }

  postStore(store : Store){
    var url = localUrl + 'api/Stores';
    url = url.replace(/[?&]$/, "");
    const content_ = JSON.stringify(store);
    let options_ : any = {
      body: content_,
      observe: "body",    
      responseType:"json",
      headers: new HttpHeaders({
        "Content-Type": "application/json", 
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4200",
          "Access-Control-Allow-Headers" : "Content-Type"
      })
  };
  return  this.http.request("post", url, options_); 
  }
  
}
