import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../recipe-service';
import { RecipeNotFound } from "./recipe-not-found/recipe-not-found";
import { RecipeList } from '../recipe-list/recipe-list';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink, RecipeNotFound, RecipeList],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
})
export class RecipeDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(RecipeService);

  readonly id = computed(() => this.route.snapshot.paramMap.get('id'));
  readonly recipeById = computed(() => {
    const id = this.id();
    return id ? this.service.recipes().find(r => r.id === id) : undefined;
  });
  readonly servings = computed(() => this.service.servings());

  protected readonly adjustedIngredients = computed(
    () => {
      const r = this.recipeById();
      const s = this.servings();
      return r?.ingredients.map(ing => ({
        ...ing,
        quantity: ing.quantity * s
      }))
    }
  )
}
