import {
    Component,
    OnInit,
} from '@angular/core';

console.log('`Pedigree` component loaded async');

@Component({
    selector: 'pedigree',
    template: `
        <h1>Pedigree</h1> 
    `,
})
export class PedigreeComponent implements OnInit {

    public ngOnInit() {
        console.log('pedigree component on init') 
    }

}

