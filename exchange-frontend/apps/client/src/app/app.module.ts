import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CardComponent } from './storybook/card/card.component';
import { ButtonComponent } from './storybook/button/button.component';
import { InputBoxComponent } from './storybook/inputBox/input-box.component';
import { MatProgressBarComponent } from './storybook/mat-progress-bar/mat-progress-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    InputBoxComponent,
    MatProgressBarComponent,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
