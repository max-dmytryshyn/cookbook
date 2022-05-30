import { gql } from '@apollo/client';
import { Category } from '../../../types/CookbookTypes';

export const GET_ALL_CATEGORIES_QUERY = gql`
  query {
    allCategories {
      id
      name
      ingredients {
        id
        name
      }
    }
  }
`;

export interface getAllCategoriesQueryDataType {
  allCategories: Category[];
}
