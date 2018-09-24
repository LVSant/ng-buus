import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    auth(input): Observable<any> {
        return this.http.post(environment.ApiURL + '/auth', input);
    }

    getMe(): Observable<any> {
        return this.http.get(environment.ApiURL + '/me');
    }
}
