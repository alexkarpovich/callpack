import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '', loadChildren: './pedigree#PedigreeModule' },
    { path: '**',    component: NoContentComponent },
];
