import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class StateRegionService{

    url = "https://api.covid19india.org/state_district_wise.json";

    constructor(private http: HttpClient){}

    getRegionalData(){
        return this.http.get(this.url);
    };
}
