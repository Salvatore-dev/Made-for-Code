

type Recipes_type ={
    id: number,
    name: string,
    instructions: string,
    preparation: string,
    url: string
}

type Step = {
    text: string,
    duration: number
    measurement: string
}
type Ingredient = {
    name: string,
    quantity: number,
    measurement: string
}

type Recipe_main = {
    name: string,
    persons: number,
    url: string | ''
  }
type Recipe = {
    main : Recipe_main[] | [],
    ingredients: Ingredient[] | [],
    steps: Step[] |[],
    id?: number | null
} 
export type {Recipes_type, Step, Ingredient, Recipe_main, Recipe}