export interface Ingredient {
    id: number;
    name: string;
    quantity: number;
    unit: string;
}

export interface RecipeModel {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    isFavorite: boolean;
    ingredients: Ingredient[]
}