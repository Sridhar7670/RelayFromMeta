"use client"

import { SkillCardQuery } from "@/__generated__/SkillCardQuery.graphql";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";

export const SkillsQueryDefinition = graphql`
  query SkillCardQuery {
    Skills {
      docs {
        skillName
        description
      }
      totalDocs
      hasNextPage
    }
  }
`;


export default function UserSkills(){
  const data= useLazyLoadQuery<SkillCardQuery>(SkillsQueryDefinition,{})
  if (!data.Skills || !data.Skills.docs || data.Skills.docs.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No skills found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Available Skills ({data.Skills.totalDocs} total)
      </h2>
      <ul className="space-y-4">
        {data.Skills.docs.map((skill:any,index) => (
          <li
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <strong className="text-lg font-semibold text-blue-600">
              {skill.skillName}
            </strong>
            <p className="text-gray-700">{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
}