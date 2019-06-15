import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  runBackup() {
    this.http.get<any>('http://localhost:3000/rest/mc/backup').subscribe(resData => {
      console.log(resData);
    });
  }
  runRestore() {
    this.http.get<any>('http://localhost:3000/rest/mc/restore').subscribe(resData => {
      console.log(resData);
    });
  }
}
