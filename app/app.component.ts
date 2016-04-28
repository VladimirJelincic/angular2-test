


import {Component} from 'angular2/core';
import {SimpleHTTPComponent} from './SimpleHTTPComponent';

@Component({
    selector: 'my-app',
    directives: [SimpleHTTPComponent],
    template: `<h1>Angular Http App</h1>
              <simple-http></simple-http>
            `
})

export class AppComponent { 
        
}
