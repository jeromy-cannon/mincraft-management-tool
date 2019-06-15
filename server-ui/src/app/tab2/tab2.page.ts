import { Component } from '@angular/core';
import { AppService } from '.././app.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private appService: AppService, private storage: Storage) {
  }

  onBackup() {
    console.log('backing up...');
    this.appService.runBackup();
    console.log('...backed up');
  }

  onRestore() {
    console.log('restoring...');
    this.appService.runRestore();
    console.log('...restored');
  }

  onSave(serverAddress: string) {
    console.log("saving...");
    this.storage.set('serverAddress', serverAddress)
    console.log("saved: " + serverAddress);
    console.log("...saved");
  }
}
