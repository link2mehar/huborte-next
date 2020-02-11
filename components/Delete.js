import Link from 'next/link';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {ALL_ITEMS_QUERY} from './Shop'

const DELETE_ITEM_MUTATION = gql`

mutation DELETE_ITEM_MUTATION($id: ID!){
    deleteItem(id:$id){
        id
    }
}

`

const Delete = (props) => {
    const update = (cache,payload) => {
        const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
        console.log(data, payload);
        // 2. Filter the deleted itemout of the page
        //data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id);
        // 3. Put the items back!
        //cache.writeQuery({ query: ALL_ITEMS_QUERY, data })
    }
    return(
        <Mutation mutation={DELETE_ITEM_MUTATION} variables={{id:props.itemId}} >
            {(deleteItem, {error})=>{

                return(
                    <button  onClick = {() => {
                        if(confirm('Are you sure you want to delete this Item')){
                            deleteItem();
                        }
                    }}>
                        <i class="fa fa-times-circle" style={{marginRight:'10px'}}></i>
                    </button>
                )
            }}
            
        </Mutation>
    )
}

export default Delete;