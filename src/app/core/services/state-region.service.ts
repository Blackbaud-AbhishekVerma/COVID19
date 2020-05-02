import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/Operators';
import { Observable } from 'rxjs';
import { RegionModel } from '../models/state-region.model';


@Injectable({providedIn: 'root'})
export class StateRegionService{

    url = "https://api.covid19india.org/state_district_wise.json";

    constructor(private http: HttpClient){}

    getTestWithObservable(): Observable<RegionModel[]> {
        return this.http.get<RegionModel[]>(this.url)
        .pipe(            
            catchError((error: Response | any) => {
                console.error(error.message || error);
                return Observable.throw(error.message || error)}
            )
            
        )
    }

    private extractData(res: Response) {
        return res;
    }


    getRegionalData(){
        return this.http.get(this.url);
    };
}
