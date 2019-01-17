import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
//import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import config from '../../app.config.json';

let instance:ApolloClient<any>;

function getApolloClientInstance():ApolloClient<any> {
    if (!instance) {
        // initialize instance
        instance = new ApolloClient({
            link: ApolloLink.from([
                onError(({ graphQLErrors, networkError }) => {
                  if (graphQLErrors) graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
                  if (networkError) console.log(`[Network error]: ${networkError}`);
                }),
                new HttpLink({
                  uri: config["apollo-client"].httpLinkConfig.uri,
                  credentials: config["apollo-client"].httpLinkConfig.credentials
                }),
                // withClientState({
                //     defaults: {
                //       isConnected: true
                //     },
                //     resolvers: {}
                // })
            ]),
            cache: new InMemoryCache()
        });

        console.info('ApolloClient instanciated');
    }
    
    return instance;
};

export default getApolloClientInstance;