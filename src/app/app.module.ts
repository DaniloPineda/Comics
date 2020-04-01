import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComicCardComponent } from './components/comics/view/comic-card.component';
import { ComicService } from './components/comics/view/service/comic-service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComicRate } from './shared/comic-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicCardComponent,
    ComicRate
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [ComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
