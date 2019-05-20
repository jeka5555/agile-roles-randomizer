import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';
import { filter, take } from 'rxjs/operators';

const routingMap = ['/', '/settings'];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public selectedIndex: number;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter((event: RouterEvent) => event instanceof NavigationEnd),
                take(1),
            )
            .subscribe(() => (this.selectedIndex = routingMap.indexOf(this.router.url) || 0));
    }

    public navigate({ index }: MatTabChangeEvent): void {
        this.router.navigate([routingMap[index]]);
    }
}
