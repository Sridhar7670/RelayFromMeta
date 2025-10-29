/**
 * @generated SignedSource<<b37647f4ce1644bff431301545fa98c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IdCard_gender = "Female" | "Male" | "other" | "%future added value";
export type IdCardListQuery$variables = Record<PropertyKey, never>;
export type IdCardListQuery$data = {
  readonly IdCards: {
    readonly docs: ReadonlyArray<{
      readonly Address: string | null | undefined;
      readonly createdAt: any | null | undefined;
      readonly dbID: number;
      readonly gender: IdCard_gender | null | undefined;
      readonly jobTitle: string | null | undefined;
      readonly position: string;
      readonly updatedAt: any | null | undefined;
      readonly userName: string;
    }>;
  } | null | undefined;
};
export type IdCardListQuery = {
  response: IdCardListQuery$data;
  variables: IdCardListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "IdCards",
    "kind": "LinkedField",
    "name": "IdCards",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IdCard",
        "kind": "LinkedField",
        "name": "docs",
        "plural": true,
        "selections": [
          {
            "alias": "dbID",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "jobTitle",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "position",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gender",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "Address",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
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
    "name": "IdCardListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "IdCardListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "38ade1d5da85405c7d45288afde7f4d7",
    "id": null,
    "metadata": {},
    "name": "IdCardListQuery",
    "operationKind": "query",
    "text": "query IdCardListQuery {\n  IdCards {\n    docs {\n      dbID: id\n      userName\n      jobTitle\n      position\n      gender\n      Address\n      updatedAt\n      createdAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2f67d44dd5134831bb9984c8b9d83947";

export default node;
