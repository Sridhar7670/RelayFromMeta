import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
} from "relay-runtime";

async function fetchGraphQL(request: RequestParameters, variables: Variables) {
  const response = await fetch(process.env.NEXT_PUBLIC_PAYLOAD_GQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return await response.json();
}

export function createRelayEnvironment() {
  const network = Network.create(fetchGraphQL);
  const store = new Store(new RecordSource());
  return new Environment({ network, store });
}
