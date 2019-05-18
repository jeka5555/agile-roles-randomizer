import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private router: Router) {}

    public navigate({ index }: MatTabChangeEvent): void {
        const routingMap = ['/', '/settings'];

        this.router.navigate([routingMap[index]]);
    }
}
