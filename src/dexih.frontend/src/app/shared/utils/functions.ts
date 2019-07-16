import { Pipe, NgModule } from '@angular/core';

@NgModule()
export class Functions {

    static numberWithCommas = (x) => {
        let parts = x.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
        }

    }
