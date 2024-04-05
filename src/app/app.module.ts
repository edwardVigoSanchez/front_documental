import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PermisionInterceptorInterceptor } from './permision-interceptor.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';

// import { HeaderComponent } from './common-component/header/header.component';
// import { SidebarComponent } from './common-component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PermisionInterceptorInterceptor,
      multi: true,
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  exports: [
    // HeaderComponent,
    // SidebarComponent,
  ]
})
export class AppModule { }
