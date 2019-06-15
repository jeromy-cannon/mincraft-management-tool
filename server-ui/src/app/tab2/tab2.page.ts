import { Component } from '@angular/core';
import { AppService } from '.././app.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  serverAddress: string = 'localhost';
  constructor(private appService: AppService, private storage: Storage) { }

  ionViewDidEnter() {
    this.storage.get('serverAddress').then((val) => {
      this.serverAddress = val;
      console.log('retrieved previous server address: ', this.serverAddress);
    });
  }

  onBackup() {
    console.log('backing up...');
    this.appService.runBackup(this.serverAddress);
    console.log('...backed up');
  }

  onRestore() {
    console.log('restoring...');
    this.appService.runRestore(this.serverAddress);
    console.log('...restored');
  }

  onSave(serverAddress: string) {
    console.log("saving...");
    this.storage.set('serverAddress', serverAddress)
    console.log("saved: " + serverAddress);
    console.log("...saved");
  }
}
