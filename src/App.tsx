import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "@/components/error/ErrorBoundary";
// import { Skeleton } from "@/components/ui/skeleton";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoadingFallback = () => null;

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
