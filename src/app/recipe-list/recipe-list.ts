import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Recipe } from '../models';
import { RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-list',
  imports: [RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
  //SERVICES
  protected readonly recipeService = inject(RecipeService);

  // VIEW MODEL
  protected readonly featuredRecipe = computed(() => {
    const recipes = this.recipeService.filteredRecipes();
    return recipes[0] ?? null;
  });

  protected readonly quickPicks = computed(() => {
    const featured = this.featuredRecipe();
    return this.selectRecipes(this.recipeService.filteredRecipes(), 2, featured ? [featured.id] : []);
  });

  protected readonly popularRecipes = computed(() => {
    const featured = this.featuredRecipe();
    const excludeIds = new Set<string>();
    if (featured) {
      excludeIds.add(featured.id);
    }

    this.quickPicks().forEach((recipe) => excludeIds.add(recipe.id));
    return this.selectRecipes(this.recipeService.filteredRecipes(), 6, Array.from(excludeIds));
  });

  // HANDLERS
  protected toggleFavorite(event: Event, recipeId: string): void {
    event.preventDefault();
    event.stopPropagation();
    this.recipeService.toggleFavorite(recipeId);
  }

  private selectRecipes(recipes: Recipe[], amount: number, excludedIds: string[] = []): Recipe[] {
    const isSearchActive = this.recipeService.searchTerm().trim().length > 0;

    if (isSearchActive) {
      return recipes.filter((recipe) => !excludedIds.includes(recipe.id)).slice(0, amount);
    }

    const selected: Recipe[] = [];
    const seenIds = new Set<string>(excludedIds);
    const pool = [...recipes, ...this.recipeService.recipes()];

    for (const recipe of pool) {
      if (seenIds.has(recipe.id)) {
        continue;
      }

      seenIds.add(recipe.id);
      selected.push(recipe);

      if (selected.length === amount) {
        break;
      }
    }

    return selected;
  }
}
