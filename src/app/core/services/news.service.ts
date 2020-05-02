import { Injectable } from '@angular/core';
import { News } from "../models/news.model";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators"

const httpOptions ={
    headers : new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private apiJsonUrl = "http://localhost:3010/news";

    constructor(private http: HttpClient){}

    fetchNews(): Observable<News[]>{
        return this.http.get<News[]>(this.apiJsonUrl);
    }

    addNewNews(newNews: News): Observable<News>{
        return this.http.post<News>(this.apiJsonUrl, newNews, httpOptions).pipe(
            catchError(this.handelError)
        );
    };

    private handelError(error: HttpErrorResponse){
        return throwError('their is some error')
    }
}