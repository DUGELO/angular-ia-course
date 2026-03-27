import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RecipeService } from '../../../features/recipes/recipe-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);
  protected readonly recipeService = inject(RecipeService);

  protected onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.recipeService.setSearchTerm(input.value);
  }

  protected preventSubmit(event: Event): void {
    event.preventDefault();
    void this.router.navigate(['/search']);
  }
}