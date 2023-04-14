import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-accountsettingscomponent',
  templateUrl: './accountsettings.component.html',
  styleUrls: []
})

export class AccountsettingsComponent implements OnInit{

constructor(private settingService:SettingsService){}
  
  

  ngOnInit(): void {
     
     this.settingService.checkCurrentTheme();
  }
  
  changeTheme(theme:string){
    this.settingService.changeTheme(theme);  
  }

}
