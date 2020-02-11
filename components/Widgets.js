
import Product from './Product'
import Carousel from './Carousel'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import {perPage} from '../config';




const WIDGET_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($catId: String ) {
    items(where:{categories:{slug:$catId}}) {
      id
      title
      regular_price
      description
      image
      largeImage
      slug
      categories{
          name
      }
    }
  }
`;

export const Widget = ({catName,catSlug}) =>{

    
    return(
            <div className="carousel-widgets">
                <div className="container d-flex carousel-head" >
                <h3>{catName}</h3>
                </div>
                
                    <Query query={WIDGET_ITEMS_QUERY}

                    variables={{
                    catId: catSlug,
                    }}
                    >
                    {({data,error,loading}) => {

                        if(loading) return null;
                        if(error) return <p>Error...</p>
                        if(data.items.length < 1) {
                            return <h3>No Items found</h3>
                                    
                        }
                        console.log(data.items)
                        return<Carousel> {data.items.map(item=>(
                            
                                <Product widget key={item.id} item={item} />

                                ))}
                    
                        </Carousel> 
                    }}
                    </Query>
                
            </div>
            
    )
}
