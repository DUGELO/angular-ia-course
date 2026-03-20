import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../../recipe-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly recipeService = inject(RecipeService);

  protected onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.recipeService.setSearchTerm(input.value);
  }

  protected preventSubmit(event: Event): void {
    event.preventDefault();
  }
}