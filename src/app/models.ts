export interface Ingredient {
    id: number;
    name: string;
    quantity: number;
    unit: string;
}

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface RecipeModel {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    isFavorite: boolean;
    ingredients: Ingredient[];
    durationMinutes: number;
    difficulty: DifficultyLevel;
    rating: number;
    reviewCount: number;
}