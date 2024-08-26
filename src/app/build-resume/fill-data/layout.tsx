import { ResumeSideNav } from "@/components/ResumeSideNav";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen flex md:flex-row flex-col items-start">
      <ResumeSideNav />

      <div className="w-full bg-white min-h-screen lg:px-12 px-8 md:py-4 py-3 flex md:items-center justify-center">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  );
}
