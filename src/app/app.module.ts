import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeInstallAppComponent } from './home-install-app/home-install-app.component';
import { HomeShortDescriptionComponent } from './home-short-description/home-short-description.component';
import { HomeFullDescriptionComponent } from './home-full-description/home-full-description.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';




@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    HomeComponent,
    HomeInstallAppComponent,
    HomeShortDescriptionComponent,
    HomeFullDescriptionComponent,
    AppFooterComponent,
    QuestionsAndAnswersComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
