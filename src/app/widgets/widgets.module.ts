import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopArticleComponent } from "./workshopArticle/workshop-article.component";
import { ActionArticleComponent } from "./actionArticle/action-article.component";

@NgModule({
  imports: [ CommonModule ],
  exports : [
      WorkshopArticleComponent,
      ActionArticleComponent
  ],
  declarations: [ 
    WorkshopArticleComponent,
    ActionArticleComponent
  ],
})
export class WidgetsModule { }
