import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as credentials from '../credentials'
import { TreeNode } from 'primeng/api';


const username = credentials.username ; 
const password = credentials.password ; 

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic '+ btoa(`${username}:${password}`)
    })
  };
  getAllObjects() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.url, this.httpOptions).subscribe(response => {
        console.log(this.httpOptions)
        resolve(response);
      }, err => {
        reject(err);
      });
    });
  }

  getObjectsForType(type) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.url+'?pageSize=500&type='+type, this.httpOptions).subscribe(response => {
        resolve(response);
      }, err => {
        reject(err);
      });
    });
  }

  getObjectsForFragmentType(fragmentType) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.url+'?pageSize=500&fragmentType=@'+fragmentType, this.httpOptions).subscribe(response => {
        resolve(response);
      }, err => {
        reject(err);
      });
    });
  }
}  