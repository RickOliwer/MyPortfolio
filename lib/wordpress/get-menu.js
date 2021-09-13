import { gql } from '@apollo/client';
export const GET_MENUS = gql`query menuQuery {
    headerMenus: menuItems(where: {location: PRIMARY_MENU, parentId: "0"}) {
      edges {
        node {
          id
          label
          url
          path
          childItems {
            edges {
              node {
                id
                label
                url
                path
              }
            }
          }
        }
      }
    }
  }`