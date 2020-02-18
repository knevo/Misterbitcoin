import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import Contact from 'src/app/models/contact.model';
import { ContactService } from '../contact.service';

@Injectable({ providedIn: 'root' })
export class ContactResolver implements Resolve<Contact> {

    constructor(private service: ContactService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): any {
        const id = route.params['id'];
        return this.service.getContactById(id)
            .pipe(catchError(err => {
                this.router.navigateByUrl('/error')
                return of(null)
            }))
    }
}
