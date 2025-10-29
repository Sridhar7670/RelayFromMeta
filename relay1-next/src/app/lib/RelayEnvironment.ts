// src/RelayEnvironment.ts
import { Environment, Network, RecordSource, Store, FetchFunction } from "relay-runtime";

// This is your fetch function, just like in the doc
const fetchGraphQL: FetchFunction = async (params, variables) => {
  const graphqlUrl = process.env.GRAPHQL_URL!;
  const apiKey = process.env.GRAPHQL_API_KEY!;
  process.env.GRAPHQL_URL!
  // Use your own API endpoint
  const response = await fetch(graphqlUrl,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       "Authorization":`users API-Key ${apiKey}`,
    },
    body: JSON.stringify({  query: params.text, variables }),
  });

  return await response.json();
};  

// Export a singleton instance of Relay Environment
export const RelayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});

// export function createRelayEnvironment() {
//   return new Environment({
//     network: Network.create(fetchGraphQL),
//     store: new Store(new RecordSource()),
//   });
// }

// export const RelayEnvironment = createRelayEnvironment();