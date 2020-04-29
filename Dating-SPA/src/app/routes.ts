import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';

export const appRoute: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '',
     runGuardsAndResolvers: 'always',
     canActivate: [AuthGuard],
     children: [
    {path: 'member', component: MemberListComponent},
    {path: 'list', component: ListsComponent},
    {path: 'messages', component: MessagesComponent},
    ]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
