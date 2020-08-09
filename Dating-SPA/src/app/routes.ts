import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolve } from './_resolvers/member-detail.resolver';
import { MemberListResolve } from './_resolvers/member-list.resolver';

export const appRoute: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '',
     runGuardsAndResolvers: 'always',
     canActivate: [AuthGuard],
     children: [
    {path: 'member', component: MemberListComponent, resolve: {users: MemberListResolve}},
    {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolve}},
    {path: 'list', component: ListsComponent},
    {path: 'messages', component: MessagesComponent},
    ]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
