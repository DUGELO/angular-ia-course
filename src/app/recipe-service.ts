import { Injectable, signal } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  // STATE
  readonly recipes = signal<RecipeModel[]>(MOCK_RECIPES);

  readonly servings = signal(1);


  // HANDLERS
  increaseServings(): void {
    this.servings.update(s => s + 1);
  }

  decreaseServings(): void {
    this.servings.update(s => Math.max(1, s - 1));
  }
  
}
