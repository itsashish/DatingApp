import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/User.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MemberEditResolve implements Resolve<User>
{
    constructor(private userservice: UserService, private authservice: AuthService,
                private router: Router, private alerify: AlertifyService){}

        resolve(route: ActivatedRouteSnapshot): Observable<User>{
            return this.userservice.getUser(this.authservice.decodedToken.nameid).pipe(
                catchError(error => {
                    this.alerify.error('Problem Retrieving Your Data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
        }
}
