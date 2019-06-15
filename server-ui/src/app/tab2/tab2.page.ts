import { Component } from '@angular/core';
import { AppService } from '.././app.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  appService: AppService;
  constructor(theAppService: AppService) {
    this.appService = theAppService;
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
    console.log("saved: " + serverAddress);
    console.log("...saved");
  }
}
