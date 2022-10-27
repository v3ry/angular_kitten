import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

const routes: Routes = [
  { path: 'list', component: ListKittenComponent },
  { path: 'create', component: CreateKittenComponent },
  { path: 'user', component: UserKittenComponent },
  { path: '', component: ListKittenComponent },
  { path: '**', component: ListKittenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
