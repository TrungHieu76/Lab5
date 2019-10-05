import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HcnComponent } from './hcn/hcn.component';
import { XeploaiComponent } from './xeploai/xeploai.component';
import { TienthuongComponent } from './tienthuong/tienthuong.component';
import { BanhangComponent } from './banhang/banhang.component';
import { KiemloiComponent } from './kiemloi/kiemloi.component';

@NgModule({
  declarations: [
    AppComponent,
    HcnComponent,
    XeploaiComponent,
    TienthuongComponent,
    BanhangComponent,
    KiemloiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: 'kiemloi', component: KiemloiComponent },
        { path: 'banhang', component: BanhangComponent },
        { path: 'tienthuong', component: TienthuongComponent },
        { path: 'xeploai', component: XeploaiComponent },
        { path: 'hcn', component: HcnComponent },
        { path: '**', redirectTo: "trangchu", pathMatch: 'full' }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
