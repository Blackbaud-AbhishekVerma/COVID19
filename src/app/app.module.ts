import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { StateComponent } from './dashboard/state/state.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './news/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthGaurdService } from './core/services/auth-gaurd.service';
import { LoginService } from './core/services/user-login.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsComponent,
    PrecautionComponent,
    StateComponent,
    UserComponent,
    AddNewsComponent,
    AddNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    CKEditorModule
  ],
  providers: [AuthGaurdService, LoginService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
