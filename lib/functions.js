export async function getStaticProps() {

    const { data, loading, networkStatus } = await Client.query({
      query: GET_MENUS
   });
  
  console.warn( 'data', data );
    return{
    props: {
        menus: {
            headerMenus: data?.headerMenus?.edges,
        }
    },
  }
  }
  