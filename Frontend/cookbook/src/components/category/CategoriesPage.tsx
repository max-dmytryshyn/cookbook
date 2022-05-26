import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Category } from "../../types/cookbookTypes";
import {CategoryItem} from "./CategoryItem";

const QUERY_CATEGORIES = gql`
  query {
    allCategories {
      id
      name
      ingredients {
        name
      }
    }
}`;

interface queryData {
  allCategories: Category[]
}

export function CategoriesPage() {
  const {loading, error, data} = useQuery<queryData | undefined>(
    QUERY_CATEGORIES
  );

  // should handle loading status
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>
  return (
      <div>
        {
          data && data.allCategories.map((category: Category) => (
              <CategoryItem id={category.id as number} name={category.name as string} ingredients={category.ingredients as []}
              key={category.id}/>
          ))
        }
      </div>
  )
}