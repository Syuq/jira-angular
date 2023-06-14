import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksInProgressComponent } from './views/pages/works-in-progress/works-in-progress.component';
import { NavigationComponent } from './views/components/navigation/navigation/navigation.component';
import { ProjectComponent } from './views/pages/project/project.component';
import { NavbarLeftComponent } from './views/components/navigation/navbar-left/navbar-left.component';
import { SidebarComponent } from './views/components/navigation/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    WorksInProgressComponent,
    NavigationComponent,
    ProjectComponent,
    NavbarLeftComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
