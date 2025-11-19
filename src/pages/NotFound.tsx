import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-4 text-center"
      style={{ backgroundColor: "hsl(48 38% 96%)" }}
    >
      <div className="space-y-6 max-w-md">
        <h1
          className="text-9xl font-bold tracking-tighter"
          style={{ color: "hsl(48 20% 20%)", opacity: 0.15 }}
        >
          404
        </h1>

        <h2
          className="text-3xl font-bold tracking-tight -mt-12 relative z-10"
          style={{ color: "hsl(48 20% 20%)" }}
        >
          Page not found
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#83827d" }}>
          Sorry, we couldn't find the page you're looking for.
        </p>

        <div className="pt-4">
          <Link to="/">
            <Button
              size="lg"
              className="rounded-full gap-2 font-medium shadow-lg transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#c96442",
                color: "white",
              }}
            >
              <Home className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
