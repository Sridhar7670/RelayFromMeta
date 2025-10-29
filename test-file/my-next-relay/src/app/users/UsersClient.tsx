"use client";

import { graphql, useLazyLoadQuery } from "react-relay";
import { UsersClientQuery } from "../../../relay/UsersClientQuery.graphql";

export default function UsersClient() {
  const data = useLazyLoadQuery<UsersClientQuery>(
    graphql`
      query UsersClientQuery {
        Users {
          docs {
            id
            email
            createdAt
          }
        }
      }
    `,
    {}
  );

  const users = data.Users?.docs ?? [];

  return (
    <div className='mt-8'>
      <h2 className='text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50'>
        Users from Payload CMS
      </h2>
      <ul className='space-y-2'>
        {users.map((user) => (
          <li
            key={user.id}
            className='rounded-md border border-zinc-200 p-3 dark:border-zinc-700'
          >
            <strong>{user.email}</strong>
            <div className='text-sm text-zinc-500'>
              Created: {new Date(user.createdAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
