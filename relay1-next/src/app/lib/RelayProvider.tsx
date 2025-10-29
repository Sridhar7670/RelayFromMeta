// This directive marks this component as a Client Component
"use client";

import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { RelayEnvironment } from "./RelayEnvironment";


// This is your new Client Component
export default function RelayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      {children}
    </RelayEnvironmentProvider>
  );
}

// "use client";

// import { RelayEnvironmentProvider } from "react-relay";
// import { ReactNode } from "react";
// import { Environment } from "relay-runtime";
// import type { PreloadedQuery } from 'react-relay';

// export default function RelayProvider({
//   environment,
//   preloadedQuery,
//   children,
// }: {
//   environment: Environment;
//   preloadedQuery?: PreloadedQuery<any>;
//   children: ReactNode;
// }) {
//   return (
//     <RelayEnvironmentProvider environment={environment}>
//       {children}
//     </RelayEnvironmentProvider>
//   );
// }
