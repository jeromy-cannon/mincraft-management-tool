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
    console.log('restoring...');
    this.appService.runBackup();
    console.log('...restored');
  }

  onRestore() {
    console.log('backing up...');
    this.appService.runRestore();
    console.log('...backed up');
  }

}
