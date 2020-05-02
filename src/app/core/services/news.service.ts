import { Injectable } from '@angular/core';
import { News } from "../models/news.model";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators"

const httpOptions ={
    headers : new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private apiURL = "api/newsList";
    newsList: News[] = [];

    constructor(private http: HttpClient){}

    addNews(news: News) {
        try {
            this.newsList.push(news);
            this.newsList.sort((val1, val2)=> {return val1.dateAdded > val2.dateAdded ? -1 : 1 })          
        }
        catch (error) {
            console.log(error);
        }
    };

    fetchNews(): Observable<News[]>{
        return this.http.get<News[]>(this.apiURL);
    }

    addNewNews(newNews: News): Observable<News>{
        return this.http.post<News>(this.apiURL, newNews, httpOptions).pipe(
            catchError(this.handelError)
        );
    }

    private handelError(error: HttpErrorResponse){
        return throwError('their is some error')
    }
}