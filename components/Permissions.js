
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';


const ALL_USERS_QUERY = gql`

query {
    users{
        id
        name
        email
        permissions
    }
}


`


const Permissions = (props) => (


    <Query query={ALL_USERS_QUERY}>
            {({data,loading,error}) => {
                if(loading){
                    return <div class="loader"></div>
                }
                if(error){
                    return <p>You dont have permission to view this page</p>;
                }
               
                return(
                   <>
                    {props.children}
                   </>
                )
            }}
    </Query>



)
export default Permissions;