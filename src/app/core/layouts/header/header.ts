import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { RecipeService } from '../../../features/recipes/recipe-service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatMenuModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly recipeService = inject(RecipeService);

  protected readonly user = this.authService.user$;
  protected readonly isAuthenticated = this.authService.isAuthenticated$;

  protected readonly initials = computed(() => {
    const u = this.user()?.name;
    if (!u) return '';
    const parts = u.split(' ');
    return parts.length > 1
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : u.substring(0, 2).toUpperCase();
  });

  protected logout(): void {
    this.authService.logout();
    // void this.router.navigate(['/']);
  }

  protected onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.recipeService.setSearchTerm(input.value);
  }

  protected preventSubmit(event: Event): void {
    event.preventDefault();
    void this.router.navigate(['/search']);
  }
}