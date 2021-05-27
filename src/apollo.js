import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({ uri: "https://3000-rose-antlion-1mmpmv40.ws-eu07.gitpod.io/api/demo" });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
