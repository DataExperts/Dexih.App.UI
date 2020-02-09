import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild, EventEmitter, Output, OnChanges } from '@angular/core';
import { AuthService } from '../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { Router, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
    selector: 'dexih-help',
    templateUrl: './dexih-help.component.html',
    styleUrls: ['./dexih-help.component.scss']
})

export class DexihHelpComponent implements OnInit, OnChanges, OnDestroy {
    @Input() title: string;
    @Input() path: string;
    @Input() display = false;
    @Input() hubKey: string;

    @Output() linkClick: EventEmitter<string> = new EventEmitter();

    @ViewChild('scrollTo') scrollTo: ElementRef;

    public data: string;

    private _displayHelpSubscription: Subscription;

    displayHelp: boolean;
    constructor(
        private authService: AuthService,
        private router: Router,
        private http: HttpClient,
        private location: Location
    ) { }

    ngOnInit() {
        this._displayHelpSubscription = this.authService.getDisplayHelp().subscribe(displayHelp => {
            this.displayHelp = displayHelp;
        });
    }

    ngOnChanges() {
        if (this.path) {
            const url = this.location.prepareExternalUrl(this.path);

            this.http.get(url, { responseType: 'text' }).subscribe(result => {

                let matches = new RegExp('{{SERVER}}|{{HUBKEY}}', 'gi');
                this.data = result.replace(matches, match => {
                    switch (match) {
                        case '{{SERVER}}':
                            // return this.location.prepareExternalUrl('./');
                            return window.location.origin;
                        case '{{HUBKEY}}':
                            return this.hubKey;
                    }
                });

                // data = this.replaceAll(data, '{{HUBKEY}}', this.hubKey)
                // this.data = data;
            });
        }
    }

    ngOnDestroy() {
        if (this._displayHelpSubscription) { this._displayHelpSubscription.unsubscribe(); }
    }

    close() {
        this.authService.setDisplayHelp(false);
    }

    getRoute(event) {
        let element = event.target;
        while (element) {
            let link: string = element.getAttribute('href');

            if (link) {
                if (link.endsWith('.md') && !link.startsWith('http')) {
                    this.linkClick.emit(link);
                } else if (link.startsWith('route:')) {
                    let route = link.substr(6);
                    this.router.navigate([route]);
                } else if (link.startsWith('unsafe:route:')) {
                    let route = link.substr(13);
                    this.router.navigate([route]);
                } else if (link.startsWith('#')) {
                    this.router.navigate(['.', link]);
                } else {
                    window.open(link);
                }
                event.preventDefault();
            }

            element = element.parentElement;
        }
    }

    replaceAll(str: string, find: string, replace: string): string {
        return str.replace(new RegExp(find, 'g'), replace);
    }
}
