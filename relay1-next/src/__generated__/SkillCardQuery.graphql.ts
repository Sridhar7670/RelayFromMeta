/**
 * @generated SignedSource<<cf3ca5845ceff9db829c13b7150f2923>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SkillCardQuery$variables = Record<PropertyKey, never>;
export type SkillCardQuery$data = {
  readonly Skills: {
    readonly docs: ReadonlyArray<{
      readonly description: string | null | undefined;
      readonly skillName: string;
    }>;
    readonly hasNextPage: boolean;
    readonly totalDocs: number;
  } | null | undefined;
};
export type SkillCardQuery = {
  response: SkillCardQuery$data;
  variables: SkillCardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Skills",
    "kind": "LinkedField",
    "name": "Skills",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Skill",
        "kind": "LinkedField",
        "name": "docs",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "skillName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalDocs",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
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
    "name": "SkillCardQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SkillCardQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "203edb9fa03a3c5eee1505fbda28d9f9",
    "id": null,
    "metadata": {},
    "name": "SkillCardQuery",
    "operationKind": "query",
    "text": "query SkillCardQuery {\n  Skills {\n    docs {\n      skillName\n      description\n    }\n    totalDocs\n    hasNextPage\n  }\n}\n"
  }
};
})();

(node as any).hash = "d99751f1b1feefb60f11c2ade3d934c9";

export default node;
