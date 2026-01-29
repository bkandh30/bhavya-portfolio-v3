import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "@/components/error/ErrorBoundary";
// import { Skeleton } from "@/components/ui/skeleton";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoadingFallback = () => (
  <div
    className="min-h-screen"
    style={{
      backgroundColor: "hsl(48 38% 96%)",
      /* CLS FIX: Added containment to prevent layout shifts */
      contain: "layout style",
    }}
    aria-label="Loading page content"
    role="status"
  >
    {/* CLS FIX: Mobile layout placeholder matching MobileHeader dimensions */}
    <div className="lg:hidden max-w-3xl mx-auto px-4 py-12">
      {/* Avatar skeleton */}
      <div
        className="rounded-full mb-6 animate-pulse"
        style={{
          width: 96,
          height: 96,
          backgroundColor: "hsl(36 22% 90%)",
        }}
      />
      {/* Name skeleton */}
      <div
        className="rounded mb-2 animate-pulse"
        style={{
          width: 280,
          height: 44,
          backgroundColor: "hsl(36 22% 90%)",
        }}
      />
      {/* Title skeleton */}
      <div
        className="rounded mb-4 animate-pulse"
        style={{
          width: 160,
          height: 24,
          backgroundColor: "hsl(36 22% 90%)",
        }}
      />
      {/* Bio skeleton */}
      <div
        className="rounded mb-6 animate-pulse"
        style={{
          width: "100%",
          maxWidth: 320,
          height: 48,
          backgroundColor: "hsl(36 22% 90%)",
        }}
      />
      {/* Buttons skeleton */}
      <div className="flex gap-2 mb-6">
        <div
          className="rounded-full animate-pulse"
          style={{
            width: 80,
            height: 32,
            backgroundColor: "hsl(36 22% 90%)",
          }}
        />
        <div
          className="rounded-full animate-pulse"
          style={{
            width: 100,
            height: 32,
            backgroundColor: "hsl(36 22% 90%)",
          }}
        />
        <div
          className="rounded-full animate-pulse"
          style={{
            width: 70,
            height: 32,
            backgroundColor: "hsl(36 22% 90%)",
          }}
        />
      </div>
      {/* Status card skeleton */}
      <div
        className="rounded-lg mb-8 animate-pulse"
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "hsl(36 22% 90%)",
        }}
      />
    </div>

    {/* CLS FIX: Desktop layout placeholder */}
    <div className="hidden lg:flex min-h-screen">
      {/* Sidebar placeholder */}
      <div
        className="fixed left-0 top-0 h-screen w-[45%]"
        style={{ backgroundColor: "hsl(48 38% 96%)" }}
      />
      {/* Main content placeholder */}
      <div className="ml-[45%] min-h-screen w-[55%]" />
    </div>
  </div>
);

// const PageLoadingFallback = () => (
//   <div
//     className="min-h-screen"
//     style={{ backgroundColor: "hsl(48 38% 96%)" }}
//     aria-label="Loading page content"
//     role="status"
//   >
//     {/* Reserve space for the layout without causing shifts */}
//     <div className="lg:ml-[45%] min-h-screen">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
//         {/* Invisible placeholder that matches content structure */}
//         <div style={{ visibility: "hidden" }}>
//           <div className="h-28 w-28 mb-6 rounded-full" />
//           <div className="h-12 w-64 mb-2" />
//           <div className="h-6 w-48 mb-4" />
//           <div className="h-20 w-full" />
//         </div>
//       </div>
//     </div>
//   </div>
// );

const App = () => (
  <ErrorBoundary>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ErrorBoundary>
);

export default App;
