import { Injectable } from '@angular/core';
import { News } from "../models/news.model";

@Injectable({
    providedIn: 'root'
})

export class NewsService {

    newsList: News[] = [];

    addNews(news: News) {
        try {
            this.newsList.push(news);
        }
        catch (error) {
            console.log(error);
        }
    };
}