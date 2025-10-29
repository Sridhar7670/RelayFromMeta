"use client"
import { Suspense } from "react";
import { loadQuery } from "react-relay";
import { RelayEnvironment } from "../lib/RelayEnvironment";

// 1. Import the component AND its query definition


// 2. Import the query type
import { IdCardListQuery } from "@/__generated__/IdCardListQuery.graphql";
import IdCardList,{ IdCardListQueryDefinition } from "../components/IdCardList";
export default function IdCardsPage() {
  // 3. Load the query on the server
  const preloadedQuery = loadQuery<IdCardListQuery>(
    RelayEnvironment,
    IdCardListQueryDefinition,
    {} 
  );

  return (
    <>
      <h1>ID Card Management</h1>
      <Suspense
        fallback={
          <div className="text-center p-10 text-xl font-semibold">
            Loading ID cards...
          </div>
        }
      >
        {/* 4. Pass the preloadedQuery as a prop */}
        <IdCardList preloadedQuery={preloadedQuery} />
      </Suspense>
    </>
  );
}