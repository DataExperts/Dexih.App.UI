import { NgModule } from '@angular/core';
import * as moment_ from 'moment';
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
        if(value && typeof value === 'object' && ('r' in value || 'f' in value)) {
            return value['f'];
        }

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

    static rawValue(value: any): any {
        if(value && typeof value === 'object' && ('r' in value || 'f' in value)) {
            return value['r'];
        }

        if (!value && value !== false && value !== 0) {
            return '';
        }
        return value;
    }

        /*
    * General utils for managing cookies in Typescript.
    */
   static setCookie(name: string, val: string) {
        const date = new Date();
        const value = val;

        // Set it expire in 7 days
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

        if (location.protocol === 'https:') {

        }

        const sameSite = location.protocol === 'https:' ? 'SameSite=None;secure' : 'SameSite=Lax'

        // Set it
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;${sameSite}`;
    }

    static getCookie(name: string) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);

        if (!parts) { return null; }

        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }

    static deleteCookie(name: string) {
        const date = new Date();

        // Set it expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

        // Set it
        document.cookie = `${name}=;expires=${date.toUTCString()};path=/`;
    }

}
