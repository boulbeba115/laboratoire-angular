import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMemberComponent } from './members/create-member/create-member.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { EditMemberComponentComponent } from './members/edit-member-component/edit-member-component.component';
import { DetailsComponentComponent } from './members/details-component/details-component.component';
import {MaterialModule} from 'src/app/shared/modules/material/material.module';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CreateEventComponentComponent } from './events/create-event-component/create-event-component.component';
import { EditEventComponentComponent } from './events/edit-event-component/edit-event-component.component';
import { PublicationListComponentComponent } from './publication/publication-list-component/publication-list-component.component';
import { CreatepublicationcomponentComponent } from './publication/createpublicationcomponent/createpublicationcomponent.component';
import { EditPublicationComponent } from './publication/edit-publication/edit-publication.component';
import { ListOutilComponent } from './outil/list-outil/list-outil.component';
import { EditOutilComponent } from './outil/edit-outil/edit-outil.component';
import { CreateOutilComponent } from './outil/create-outil/create-outil.component';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
        '.json'
    );*/
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    declarations: [AppComponent, CreateMemberComponent, EditMemberComponentComponent, DetailsComponentComponent, EventsListComponent, CreateEventComponentComponent, EditEventComponentComponent, PublicationListComponentComponent, CreatepublicationcomponentComponent, EditPublicationComponent, ListOutilComponent, EditOutilComponent, CreateOutilComponent],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        LayoutModule,
        OverlayModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
