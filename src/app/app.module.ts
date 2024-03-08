import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { APICALLService } from './services/apicall.service';
@NgModule({
  declarations: [
    AppComponent,
    DeleteTaskComponent,
    UpdateTaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [APICALLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
