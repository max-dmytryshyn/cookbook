import {Ingredient} from "../../types/cookbookTypes";

interface CategoryItemProps {
    name: string
    ingredients: Ingredient[]
    id: number
}

export const CategoryItem = (props: CategoryItemProps) => {
    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <button>-</button>
            </div>
            <div>
                {props.ingredients.map((ingredient: Ingredient) =>
                    <div key={ingredient.id}>
                        <p> {ingredient.name} </p>
                        <button>-</button>
                    </div>
                )}
            </div>
            <button>+</button>
        </div>
    )
}