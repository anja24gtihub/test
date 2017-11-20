export class Recipes {
    title: string;
    version: string;
    href: string;
    results: Recipe[];
}

export class Recipe {
    title: string;
    href: string;
    ingredients: string;
    thumbnail: string;
}