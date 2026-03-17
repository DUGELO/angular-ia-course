import { RecipeModel } from './models'

export const MOCK_RECIPES: RecipeModel[] = [
    {
        id: 1,
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish.',
        imgUrl: 'https://www.allrecipes.com/thmb/QtmdHdH04CHgBbjUsISCm_RLTM0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg',
        isFavorite: false,
        ingredients: [
            { id: 1, name: 'Spaghetti', quantity: 200, unit: 'g'},
            { id: 2, name: 'Guanciale', quantity: 100, unit: 'g'},
            { id: 3, name: 'Egg Yolks', quantity: 4, unit: 'each'},
            { id: 4, name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g'},
            { id: 5, name: 'Black Pepper', quantity: 1, unit: 'tsp'},
        ],
    },
    {
        id: 2,
        name: 'Caprese Salad',
        description: 'A simple and refreshing Italian salad.',
        imgUrl: 'https://www.allrecipes.com/thmb/-P1I5j0ICDPUnJwycdtPHLzaQBs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/871005-bc2d0297abb2439780dafd87f4d6bf57.jpg',
        isFavorite: true,
        ingredients: [
            { id: 1, name: 'Tomatoes', quantity: 4, unit: 'each'},
            { id: 2, name: 'Fresh Mozzarella', quantity: 200, unit: 'g'},
            { id: 3, name: 'Fresh Basil', quantity: 1, unit: 'bunch'},
            { id: 4, name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp'},
        ],
    },
    {
        id: 3,
        name: 'Tiramisu',
        description: 'A popular Italian dessert.',
        imgUrl: 'https://www.kingarthurbaking.com/sites/default/files/2023-03/Tiramisu_1426.jpg',
        isFavorite: false,
        ingredients: [
            { id: 1, name: 'Ladyfingers', quantity: 200, unit: 'g'},
            { id: 2, name: 'Mascarpone Cheese', quantity: 250, unit: 'g'},
            { id: 3, name: 'Egg Yolks', quantity: 4, unit: 'each'},
            { id: 4, name: 'Sugar', quantity: 100, unit: 'g'},
            { id: 5, name: 'Espresso', quantity: 1, unit: 'cup'},
            { id: 6, name: 'Cocoa Powder', quantity: 2, unit: 'tbsp'},
        ],
    },
    {
        id: 4,
        name: 'Margherita Pizza',
        description: 'A classic Neapolitan pizza.',
        imgUrl: 'https://www.allrecipes.com/thmb/Q9DQwFnocMv8zMiPICkKswmpWlM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1453815-authentic-pizza-margherita-Cynthia-Ross-4x3-1-7410c69552274163a9049342b60c22ff.jpg',
        isFavorite: true,
        ingredients: [
            { id: 1, name: 'Pizza Dough', quantity: 1, unit: 'each'},
            { id: 2, name: 'Tomato Sauce', quantity: 100, unit: 'g'},
            { id: 3, name: 'Fresh Mozzarella', quantity: 150, unit: 'g'},
            { id: 4, name: 'Fresh Basil', quantity: 1, unit: 'bunch'},
            { id: 5, name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp'},
        ],
    }
];