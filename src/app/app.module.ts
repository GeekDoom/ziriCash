import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RippleModule } from 'primeng/ripple';
import { MovementPipe } from './core/pipes/movement.pipe';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [
    AppComponent,
    MovementPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PortalModule,
    RippleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
