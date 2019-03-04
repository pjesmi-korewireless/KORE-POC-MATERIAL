import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";

 import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule,MatInputModule } from "@angular/material";
 import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { HeaderComponent } from './header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { OverlayModule} from '@angular/cdk/overlay';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardContentComponent,
    HeaderComponent,
    MatDialogComponent,
    TableComponent
  ],
  
  entryComponents: [MatDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    MatSelectModule,
    OverlayModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
