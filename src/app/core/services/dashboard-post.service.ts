import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/Operators';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class DashboardPostService{
    url = "https://api.covid19india.org/data.json";

    constructor(private http: HttpClient){}

    
    getTestWithObservable(): Observable<any> {
        return this.http.get(this.url)
        .pipe(
            map(this.extractData),
            catchError((error: Response | any) => {
                console.error(error.message || error);
                return Observable.throw(error.message || error)}
            )
            
        )
    }

    private extractData(res: Response) {
        return res;
    }
}
