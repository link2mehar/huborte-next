import withApollo from 'next-with-apollo';
import ApolloClient from "apollo-boost"
import { endpoint , Prodendpoint} from '../config';


function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : Prodendpoint,
    
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);