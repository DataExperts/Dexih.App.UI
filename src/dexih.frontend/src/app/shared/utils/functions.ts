import { Pipe, NgModule } from '@angular/core';
import * as moment_ from 'moment';
import { Router } from '@angular/router';
const moment = moment_;

@NgModule()
export class Functions {

    static numberWithCommas = (x) => {
        let parts = x.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }

    static getLanguage() {
        let language;
        if (window.navigator.languages) {
            language = window.navigator.languages[0];
        } else {
            language = window.navigator.language;
        }

        return language;
    }

    static formatValue(value: any, format: string): string {
        moment.locale(this.getLanguage());

        if (!value && value !== false && value !== 0) {
            return '';
        } else if (Object.keys(value).length === 0 && value.constructor === Object) {
            return '(null)';
        } else {
            switch (format) {
                case 'Calendar':
                    return moment(value).calendar();
                case 'Date':
                    return moment(value).format('L');
                case 'Time':
                    return moment(value).format('LTS');
                case 'DateTime':
                    return moment(value).format('L') + ' ' + moment(value).format('LTS');
                case 'CharArray':
                    return [].concat(value).join('');
                case 'CharArray':
                    return [].concat(value).join('');
                default:
                    return value;
            }
        }
    }

}
