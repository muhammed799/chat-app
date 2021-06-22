import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {path:'chat' , component:ChatAppComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'userlist' , component:UserlistComponent},
  {path:'settings' , component:SettingsComponent},
  {path:'' ,redirectTo:'chat',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
