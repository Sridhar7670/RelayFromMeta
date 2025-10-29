"use client"
import UserSkills from "../components/SkillCardQuery";
import { Suspense } from "react";
import RelayProvider from "../lib/RelayProvider";

export default function Skills() {
  // 1. Load the query on the server
  //    We pass the environment, the query definition, and any variables (none here)
  return (
    <>
      <h1>All Skills</h1>
      <Suspense
        fallback={
          <div className="text-center p-10 text-xl font-semibold">
            Loading skills...
          </div>
        }
      >
        {/* 2. Pass the preloadedQuery as a prop */}
          <UserSkills  />
        
      </Suspense>
    </>
  );
}