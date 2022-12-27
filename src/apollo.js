import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({
  uri: "https://realestatep.hasura.app/v1/graphql",
  //uri: "https://3000-rose-antlion-1mmpmv40.ws-eu07.gitpod.io/api/demo",
  /*
  fetchOptions: {
    mode: "no-cors",
  },
  */
  headers: {
    "x-hasura-admin-secret": "rKpA@W3S2PlZsK",
    hapikey: "f71c5668-eabb-4c8a-a2f5-5133f1570fdc",
  },
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
