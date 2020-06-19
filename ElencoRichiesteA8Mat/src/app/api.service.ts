import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const localUrl = 'https://localhost:44363/';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStore() {
    var url = localUrl + 'api/Stores'
    return this.http.get(url);
  }
}
