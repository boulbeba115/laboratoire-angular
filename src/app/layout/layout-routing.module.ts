import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { Screen3Component } from '../members/list-member/screen3.component';
import { CreateMemberComponent } from '../members/create-member/create-member.component';
import { EditMemberComponentComponent } from '../members/edit-member-component/edit-member-component.component';
import { DetailsComponentComponent } from '../members/details-component/details-component.component';
import { EventsListComponent } from '../events/events-list/events-list.component';
import { CreateEventComponentComponent } from '../events/create-event-component/create-event-component.component';
import { EditEventComponentComponent } from '../events/edit-event-component/edit-event-component.component';
import { PublicationListComponentComponent } from '../publication/publication-list-component/publication-list-component.component';
import { CreatepublicationcomponentComponent } from '../publication/createpublicationcomponent/createpublicationcomponent.component';
import { EditPublicationComponent } from '../publication/edit-publication/edit-publication.component';
import { ListOutilComponent } from '../outil/list-outil/list-outil.component';
import { EditOutilComponent } from '../outil/edit-outil/edit-outil.component';
import { CreateOutilComponent } from '../outil/create-outil/create-outil.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'membres',
                component: Screen3Component
            },
            {
                path: 'membres/create',
                component: CreateMemberComponent
            },
            {
                path: 'membres/edit/:id',
                component: EditMemberComponentComponent
            },
            {
                path: 'membres/details/:id',
                component: DetailsComponentComponent
            },
            //Events
            {
                path: 'events',
                component: EventsListComponent
            },
            {
                path: 'events/create',
                component: CreateEventComponentComponent
            },
            {
                path: 'events/edit/:id',
                component: EditEventComponentComponent
            },
            //publication
            {
                path: 'publication',
                component: PublicationListComponentComponent
            },
            {
                path: 'publication/create',
                component: CreatepublicationcomponentComponent
            },
            {
                path: 'publication/edit/:id',
                component: EditPublicationComponent
            },
            //tools
            {
                path: 'tools',
                component: ListOutilComponent
            },
            {
                path: 'tools/create',
                component: CreateOutilComponent
            },
            {
                path: 'tools/edit/:id',
                component: EditOutilComponent
            },


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
