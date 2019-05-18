import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppMaterialModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: RandomizerComponent,
            },
            {
                path: 'settings',
                component: SettingsComponent,
            },
        ]),
    ],
    declarations: [AppComponent, RandomizerComponent, SettingsComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
