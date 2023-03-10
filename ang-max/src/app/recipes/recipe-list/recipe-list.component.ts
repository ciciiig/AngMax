import { Component } from '@angular/core';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      name: 'pie',
      description: 'made with green apples',
      imagePath: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=750&h=375&url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd30%2Fmile-high-apple-pie-3-xd106255%2Fmile-high-apple-pie-3-xd106255_0.jpg%3Fitok%3DcinyMkFU',
    }
  ]
}
