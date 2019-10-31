import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';

export const MOCK = [
    {
        id: 0,
        name: 'Daiquiri',
        picture:
            'https://cdn.liquor.com/wp-content/uploads/2016/07/29105024/DAIQUIRI-226x248-mosaic1.jpg',
        description:
            `The classic Daiquiri is a super simple rum cocktail that’s well-balanced and refreshing.
      The combination of sweet, sour and spirit is refreshingly tangy and perfect for any occasion.`,
        ingredients: [
            {
                name: 'Dark rum (Appleton Estate Reserve)',
                quantity: 2,
                unit: 'oz'
            } as Ingredient,
            {
                name: 'Fresh lime juice',
                quantity: 1,
                unit: 'oz'
            } as Ingredient,
            {
                name: 'Simple sirup',
                quantity: 1,
                unit: 'oz'
            } as Ingredient
        ],
        instructions: [
            'Add all the ingredients to a shaker and fill with ice.',
            'Shake, and strain into a chilled Martini glass.',
            'Garnish with a lime wheel.'
        ]
    } as Recipe,
    {
        id: 1,
        name: 'Piña Colada',
        picture:
            'https://cdn.liquor.com/wp-content/uploads/2016/07/29124300/PINA-COLADA-226x248-mosaic1.jpg',
        description:
            `The Piña Colada is a classic tropical cocktail with rum, pineapple and coconut milk.
      This classic recipe will transport you to paradise. Getting caught in the rain is not required.`,
        ingredients: [
            {
                name: 'Light or gold rum',
                quantity: 1.5,
                unit: 'oz'
            } as Ingredient,
            {
                name: 'Coconut milk',
                quantity: 2,
                unit: 'oz'
            } as Ingredient,
            {
                name: 'Fresh pineapple juice',
                quantity: 2,
                unit: 'oz'
            } as Ingredient
        ],
        instructions: [
            'Add all the ingredients to a shaker and fill with ice.',
            'Shake, and strain into a Hurricane glass filled with fresh ice.',
            'Garnish with a cherry and a pineapple wedge.'
        ]
    } as Recipe ]