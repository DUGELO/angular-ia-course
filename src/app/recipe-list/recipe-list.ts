import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../recipe-service';
import { RouterLink } from "@angular/router";
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
  //SERVICES
  protected readonly recipeService = inject(RecipeService);

  // STATE
  protected readonly searchTerm = signal('');

  // HANDLERS
  protected readonly filteredRecipes = computed(() => {
    const term = this.searchTerm();
    return this.recipeService.recipes().filter(recipe => recipe.name.toLowerCase().includes(term.toLowerCase()));
  })
  
  protected increaseServings(): void {
    this.recipeService.increaseServings();
  }

  protected decreaseServings(): void {
    this.recipeService.decreaseServings();
  }

  protected readonly favorites = computed(() => {
    return this.recipeService.recipes().filter(r => r.isFavorite === true)
  });
}
