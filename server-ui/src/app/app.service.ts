import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  runBackup(serverAddress: string) {
    console.log('calling backup url...');
    this.http.get<any>('http://' + serverAddress + '/rest/mc/backup').subscribe(resData => {
      console.log(resData);
    });
    console.log('...called backup url');
  }
  runRestore(serverAddress: string) {
    console.log('calling restore url...');
    this.http.get<any>('http://' + serverAddress + '/rest/mc/restore').subscribe(resData => {
      console.log(resData);
    });
    console.log('...called restore url');
  }
}
