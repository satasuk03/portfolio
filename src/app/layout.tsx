"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import SkyBg from "@/ui/shared/SkyBg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryClientProvider client={queryClient}>
          <SkyBg>{children}</SkyBg>
        </QueryClientProvider>
      </body>
    </html>
  );
}
