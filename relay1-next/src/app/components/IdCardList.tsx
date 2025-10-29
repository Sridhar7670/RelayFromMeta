// src/app/components/IdCardList.tsx
"use client"

import { IdCardListQuery } from "@/__generated__/IdCardListQuery.graphql";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

// 2. Define the query. Note the name matches the file name.
export const IdCardListQueryDefinition = graphql`
  query IdCardListQuery {
    IdCards {
      docs {
        dbID: id
        userName
        jobTitle
        position
        gender
        Address
        updatedAt
        createdAt
      }
    }
  }
`;

// 3. Define the props interface
interface Props {
  preloadedQuery: PreloadedQuery<IdCardListQuery>;
}

// 4. Create the component that accepts the prop
export default function IdCardList({ preloadedQuery }: Props) {
  // 5. Read the data from the preloaded query
  const data = usePreloadedQuery<IdCardListQuery>(
    IdCardListQueryDefinition,
    preloadedQuery
  );

  if (!data.IdCards || !data.IdCards.docs || data.IdCards.docs.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No ID cards found.
      </div>
    );
  }

  // 6. Render the data
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        All ID Cards
      </h2>
      <ul className="space-y-4">
        {data.IdCards.docs.map((card) => (
          <li
            key={card.dbID.toString()} 
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <strong className="text-lg font-semibold text-blue-600">
              {card.userName}
            </strong>
            <p className="text-gray-700">{card.jobTitle} - {card.position}</p>
            <p className="text-sm text-gray-500">{card.Address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}