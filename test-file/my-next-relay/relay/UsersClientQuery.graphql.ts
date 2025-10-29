/**
 * @generated SignedSource<<0cd56722872f40d9e20482d4a42efbb8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UsersClientQuery$variables = Record<PropertyKey, never>;
export type UsersClientQuery$data = {
  readonly Users: {
    readonly docs: ReadonlyArray<{
      readonly createdAt: any | null | undefined;
      readonly email: any;
      readonly id: number;
    }>;
  } | null | undefined;
};
export type UsersClientQuery = {
  response: UsersClientQuery$data;
  variables: UsersClientQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Users",
    "kind": "LinkedField",
    "name": "Users",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "docs",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersClientQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersClientQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "605f97b57704eac822ea020691b418ed",
    "id": null,
    "metadata": {},
    "name": "UsersClientQuery",
    "operationKind": "query",
    "text": "query UsersClientQuery {\n  Users {\n    docs {\n      id\n      email\n      createdAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f809bb1051dfab0c608d85bf59d6867f";

export default node;
