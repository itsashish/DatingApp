import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/User.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class MemberDetailResolve implements Resolve<User>
{
    constructor(private userservice: UserService,
                private router: Router, private alerify: AlertifyService){}

        resolve(route: ActivatedRouteSnapshot): Observable<User>{
            return this.userservice.getUser(route.params.id).pipe(
                catchError(error => {
                    this.alerify.error('Problem Retrieving Data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
        }
}
