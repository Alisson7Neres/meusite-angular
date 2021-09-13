import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export const appRouters: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'portifolio', component: PortifolioComponent},
];

export const routes: ModuleWithProviders<any> = RouterModule.forRoot(appRouters);
@NgModule({
  declarations: [
    AppComponent,
    PortifolioComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
