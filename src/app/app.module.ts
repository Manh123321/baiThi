import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FormsModule } from '@angular/forms';
import { DoneComponent } from './Done/Done.component';
import { InProgressComponent } from './InProgress/InProgress.component';
import { InReviewComponent } from './InReview/InReview.component';
import { ToDoComponent } from './Todo/ToDo.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRoutes : Routes = [
  {path:  'Done', component: DoneComponent},
  {path: 'InProgress', component: InProgressComponent}  ,
  {path: 'InReview',component: InReviewComponent}    ,
  {path: 'ToDo', component: ToDoComponent}     
];
@NgModule({
  declarations: [
    AppComponent, DoneComponent, InProgressComponent, InReviewComponent, ToDoComponent
], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
