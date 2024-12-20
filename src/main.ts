import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,  // Required for Toastr and animations
      ToastrModule.forRoot()     // Initialize ToastrModule
    ),
  ],
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
