export interface Category {
    id: number | string
    name?: string
    ingredients?: Ingredient[]
}

export interface Ingredient {
    id: number | string
    name?: string
    notes?: string
    category?: Category
}