import { Routes } from "@angular/router"
import { RecipeList } from "./recipe-list/recipe-list"
import { RecipeDetail } from "./recipe-detail/recipe-detail"
import { SearchResults } from "./search-results/search-results"
import { NotFoundPage } from "./not-found-page/not-found-page"

export const routes: Routes = [
    { path: '', component: RecipeList },
    { path: 'search', component: SearchResults },
    { path: 'recipes/:id', component: RecipeDetail },
    { path: '**', component: NotFoundPage },
]