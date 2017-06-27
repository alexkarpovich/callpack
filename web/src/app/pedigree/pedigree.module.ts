import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './pedigree.routes';
import { PedigreeComponent } from './pedigree.component';

console.log('`Pedigree` component loaded asynchronously');

@NgModule({
    declarations: [
        PedigreeComponent, 
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
})
export class PedigreeModule {
    public static routes = routes;
}

