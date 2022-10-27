import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ShowCatDirective } from './show-cat.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    MenuComponent,
    ShowCatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
