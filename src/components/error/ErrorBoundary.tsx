import { Component } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    this.props.onError?.(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div
          className="min-h-screen flex items-center justify-center p-4"
          style={{ backgroundColor: "hsl(48 38% 96%)" }}
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: "rgba(201, 100, 66, 0.1)" }}
              >
                <AlertTriangle
                  className="w-12 h-12"
                  style={{ color: "#c96442" }}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h1
                className="text-2xl font-bold"
                style={{ color: "hsl(48 20% 20%)" }}
              >
                Something went wrong
              </h1>
              <p className="text-base" style={{ color: "#83827d" }}>
                We're sorry, but something unexpected happened. Please try
                refreshing the page.
              </p>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="text-left">
                <summary
                  className="cursor-pointer text-sm font-medium mb-2"
                  style={{ color: "#c96442" }}
                >
                  Error details (development only)
                </summary>
                <pre
                  className="text-xs p-4 rounded-lg overflow-auto"
                  style={{
                    backgroundColor: "rgba(201, 100, 66, 0.05)",
                    color: "#3d3929",
                  }}
                >
                  {this.state.error.toString()}
                  {"\n"}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div className="flex gap-4 justify-center">
              <Button
                onClick={this.handleReset}
                className="gap-2"
                style={{
                  backgroundColor: "#c96442",
                  color: "white",
                }}
              >
                <RefreshCw className="w-4 h-4" aria-hidden="true" />
                Try Again
              </Button>

              <Button
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Reload Page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
