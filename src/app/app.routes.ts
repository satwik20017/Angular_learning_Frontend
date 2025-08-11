import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LifecycleParentComponent } from './lifecycle-parent/lifecycle-parent.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'lifecycle_parent',
        component: LifecycleParentComponent
    },
    {
        path:'lifecycle_child',
        component:LifecycleChildComponent
    },
    {
        path:'parent',
        component: ParentComponent
    }
];
