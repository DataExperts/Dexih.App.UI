import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { ResultsIndexComponent } from '../../../+hub/results';

declare var google: any;

@Component({
    selector: 'google-map',
    templateUrl: 'google-map.component.html'
})
export class GoogleMapComponent implements OnInit, OnChanges {
    @Input() results: any[];

    public googleMapsAPIKey: string;
    public isLoaded = false;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.getGlobalCachePromise().then(cache => {
            this.googleMapsAPIKey = cache.googleMapsAPIKey;

            this.addMapsScript();
        });
    }

    ngOnChanges() {
        if (this.isLoaded) {
            this.loadMapsData();
        }
    }

    addMapsScript() {
        let googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsAPIKey}`;
        if (!document.querySelectorAll(`[src="${googleMapsUrl}"]`).length) {
            document.body.appendChild(Object.assign(
                document.createElement('script'), {
                    type: 'text/javascript',
                    src: googleMapsUrl,
                    onload: () => {
                        this.loadMapsData();
                        this.isLoaded = true;
                    }
                }));
        } else {
            this.loadMapsData();
            this.isLoaded = true;
        }
    }

    loadMapsData() {
        if (this.results && this.results.length > 0) {
            let mapProp = {
                center: new google.maps.LatLng(this.results[0].latitude, this.results[0].longitude),
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            let map = new google.maps.Map(document.getElementById('map'), mapProp);
            let bounds = new google.maps.LatLngBounds();
            this.results.forEach(result => {
                let latLong = { lat: result.latitude, lng: result.longitude };
                let marker = new google.maps.Marker({
                    position: latLong,
                    label: result.name + ' / ' + result.value,
                    animation: google.maps.Animation.DROP,
                    map: map
                });

                bounds.extend(latLong);
            });
            map.fitBounds(bounds);
        }
    }

}
