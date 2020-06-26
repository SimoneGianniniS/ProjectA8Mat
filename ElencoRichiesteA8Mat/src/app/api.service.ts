import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const localUrl = 'https://localhost:44363/';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStore() {
    debugger;
    var url = localUrl + 'api/Stores'
    url = url.replace(/[?&]$/, "");
    let options_ : any = {
      observe: "response",     			
      headers: new HttpHeaders({
          "Accept": "text/plain",
          "Access-Control-Allow-Origin": "http://localhost:4200",
          "Access-Control-Allow-Headers" : "Content-Type"
      })
  };
    return  this.http.request("get", url, options_);
  }
  
}
