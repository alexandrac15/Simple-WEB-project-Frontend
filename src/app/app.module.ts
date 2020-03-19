import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialog, MatDialogModule, MatFormFieldControl,
  MatFormFieldModule,
  MatGridListModule, MatInputModule,
  MatListItem,
  MatListModule,
  MatNavList, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { OwnersComponent } from './components/owners/owners.component';
import { DogComponent } from './components/dog/dog.component';
import {FormsModule} from '@angular/forms';
import { AddDogDialogComponent } from './components/add-dog-dialog/add-dog-dialog.component';

const APP_ROUTES: Routes = [
  { path: 'dogs', component: DogsComponent },
  { path: '', component: DogsComponent },
  { path: 'owners', component: OwnersComponent }];

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    OwnersComponent,
    DogComponent,
    AddDogDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule.forRoot(APP_ROUTES),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent, DogComponent],
  entryComponents: [
    AddDogDialogComponent
  ]
})
export class AppModule { }
