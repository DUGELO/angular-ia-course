import { Component, computed, inject } from '@angular/core';
import { RecipeService } from '../recipe-service';
import { RouterLink } from "@angular/router";
import { RecipeModel } from '../models';

interface RecipeMeta {
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: string;
  reviews: string;
}

@Component({
  selector: 'app-recipe-list',
  imports: [RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
  //SERVICES
  protected readonly recipeService = inject(RecipeService);

  // DESIGN METADATA
  private readonly recipeMetaById: Record<number, RecipeMeta> = {
    1: { duration: '45 mins', difficulty: 'Medium', rating: '4.9', reviews: '2.4k' },
    2: { duration: '35 mins', difficulty: 'Easy', rating: '4.8', reviews: '1.2k' },
    3: { duration: '30 mins', difficulty: 'Medium', rating: '4.8', reviews: '1.1k' },
    4: { duration: '35 mins', difficulty: 'Easy', rating: '4.7', reviews: '1.0k' },
    5: { duration: '30 mins', difficulty: 'Medium', rating: '4.8', reviews: '1.3k' },
    6: { duration: '35 mins', difficulty: 'Easy', rating: '4.8', reviews: '1.2k' },
    7: { duration: '35 mins', difficulty: 'Medium', rating: '4.8', reviews: '1.2k' },
    8: { duration: '25 mins', difficulty: 'Easy', rating: '4.6', reviews: '860' },
  };

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
    const excludeIds = new Set<number>();
    if (featured) {
      excludeIds.add(featured.id);
    }

    this.quickPicks().forEach((recipe) => excludeIds.add(recipe.id));
    return this.selectRecipes(this.recipeService.filteredRecipes(), 6, Array.from(excludeIds));
  });

  // HANDLERS
  protected toggleFavorite(event: Event, recipeId: number): void {
    event.preventDefault();
    event.stopPropagation();
    this.recipeService.toggleFavorite(recipeId);
  }

  protected metadataFor(recipe: RecipeModel): RecipeMeta {
    return this.recipeMetaById[recipe.id] ?? {
      duration: '35 mins',
      difficulty: 'Easy',
      rating: '4.8',
      reviews: '1.0k',
    };
  }

  private selectRecipes(recipes: RecipeModel[], amount: number, excludedIds: number[] = []): RecipeModel[] {
    const isSearchActive = this.recipeService.searchTerm().trim().length > 0;

    if (isSearchActive) {
      return recipes.filter((recipe) => !excludedIds.includes(recipe.id)).slice(0, amount);
    }

    const selected: RecipeModel[] = [];
    const seenIds = new Set<number>(excludedIds);
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
