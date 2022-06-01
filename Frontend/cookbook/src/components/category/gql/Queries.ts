import { gql } from '@apollo/client';
import { Category } from '../../../types/CookbookTypes';

export const GET_ALL_CATEGORIES_QUERY = gql`
  query {
    allCategories {
      id
      name
      description
      ingredients {
        id
        name
        notes
        category {
          id
          name
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORIES_NAME_AND_ID_QUERY = gql`
  query {
    allCategories {
      id
      name
    }
  }
`;

export interface getAllCategoriesQueryDataType {
  allCategories: Category[];
}
