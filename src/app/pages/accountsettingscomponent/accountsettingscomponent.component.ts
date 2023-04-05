import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-accountsettingscomponent',
  templateUrl: './accountsettingscomponent.component.html',
  styleUrls: ['./accountsettingscomponent.component.css']
})

export class AccountsettingscomponentComponent implements OnInit{

constructor(private settingService:SettingsService){}
  
  

  ngOnInit(): void {
     
     this.settingService.checkCurrentTheme();
  }
  
  changeTheme(theme:string){
    this.settingService.changeTheme(theme);  
  }

}
