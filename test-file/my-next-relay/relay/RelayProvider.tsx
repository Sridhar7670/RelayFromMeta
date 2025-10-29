"use client";

import { RelayEnvironmentProvider } from "react-relay";
import { createRelayEnvironment } from "./environment";

export default function RelayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const environment = createRelayEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
