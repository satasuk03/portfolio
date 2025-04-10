"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`antialiased bg-dark-blue-800`}>
        <QueryClientProvider client={queryClient}>
          <div>{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
