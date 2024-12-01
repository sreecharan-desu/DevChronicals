import React, { Suspense} from "react";
const Footer = React.lazy(() => import("./components/footer.tsx"));
const Navbar = React.lazy(() => import("./components/navbar.tsx"));
const AlertBox = React.lazy(() => import("./components/alert-box.tsx"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout({ children }: any) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="flex justify-center p-10">Loading Navbar...</div>
            }>
            <Navbar />
          </Suspense>
          <Suspense
            fallback={
              <div className="flex justify-center p-10">
                Loading AlertBox...
              </div>
            }>
            <div className="flex justify-center text-center sticky top-5 mt-1">
              <AlertBox />
            </div>
          </Suspense>
          {children}
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
