


import {Component} from 'angular2/core';
import {SimpleHTTPComponent} from './SimpleHTTPComponent';

@Component({
    selector: 'my-app',
    directives: [SimpleHTTPComponent],
    template: `<h2>Angular Http App</h2>
              <simple-http></simple-http>
            `
})

export class AppComponent { 
        
}
