import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembreListComponent } from './features/member/pages/membre-list/membre-list.component';
import { MembreAddEditComponent } from './features/member/pages/membre-add-edit/membre-add-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { FishListComponent } from './features/fish/pages/fish-list/fish-list.component';
import { FishAddEditComponent } from './features/fish/pages/fish-add-edit/fish-add-edit.component';
import { AddEditCompetitionComponent } from './features/Competition/pages/add-edit-competition/add-edit-competition.component';
import { ListCompetitionComponent } from './features/Competition/pages/list-competition/list-competition.component';
import { ListLevelComponent } from './features/Level/pages/list-level/list-level.component';
import { AddEditLevelComponent } from './features/Level/pages/add-edit-level/add-edit-level.component';


@NgModule({
  declarations: [
    AppComponent,
    MembreListComponent,
    MembreAddEditComponent,
    FishListComponent,
    FishAddEditComponent,
    AddEditCompetitionComponent,
    ListCompetitionComponent,
    ListLevelComponent,
    AddEditLevelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
