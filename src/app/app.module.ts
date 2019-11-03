import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { viewClassName } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    ChitietComponent,
    ViewcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'home', component:TrangchuComponent  },
        { path: 'viewcart', component: ViewcartComponent },
        { path: 'chitiet/:id', component: ChitietComponent },
        // { path: '**', redirectTo: "trangchu", pathMatch: 'full' }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
