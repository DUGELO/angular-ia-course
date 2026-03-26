import { Injectable, computed, signal } from '@angular/core';
import { Recipe } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  // STATE
  readonly recipes = signal<Recipe[]>(MOCK_RECIPES);

  readonly searchTerm = signal('');

  readonly filteredRecipes = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return this.recipes();
    }

    return this.recipes().filter((recipe) => {
      return recipe.title.toLowerCase().includes(term) || recipe.description.toLowerCase().includes(term);
    });
  });

  readonly servings = signal(1);


  // HANDLERS
  setSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  increaseServings(): void {
    this.servings.update(s => s + 1);
  }

  decreaseServings(): void {
    this.servings.update(s => Math.max(1, s - 1));
  }

  toggleFavorite(recipeId: string): void {
    this.recipes.update((recipes) => {
      return recipes.map((recipe) => {
        if (recipe.id !== recipeId) {
          return recipe;
        }

        return {
          ...recipe,
          isFavorite: !recipe.isFavorite,
        };
      });
    });
  }
  
}
