import { Component } from '@angular/core';
import { NewsService } from "./services/news.service";
import { News } from "./models/news.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'COVID19';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.addNews(new News('News1','NewsDescription1',"NewsContent11"));
    this.newsService.addNews(new News('News2','NewsDescription2',"NewsContent22"));
  }
}
