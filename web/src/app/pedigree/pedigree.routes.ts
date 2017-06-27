import { PedigreeComponent } from './pedigree.component';

export const routes = [
    { path: '', children: [
         { path: '', component: PedigreeComponent }, 
    ]},
];

