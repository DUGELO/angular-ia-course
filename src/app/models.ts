export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

export interface RecipeStep {
  order: number;
  instruction: string;
}

export interface RecipeMeta {
  duration: number;
  difficulty: Difficulty;
  rating: number;
  reviewsCount: number;
  calories?: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  ingredients: Ingredient[];
  steps: RecipeStep[];
  meta: RecipeMeta;
  isFavorite: boolean;
}