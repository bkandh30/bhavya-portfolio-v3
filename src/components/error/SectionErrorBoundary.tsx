import { Component } from "react";
import { AlertCircle } from "lucide-react";
import type { ReactNode, ErrorInfo } from "react";

interface SectionErrorBoundaryProps {
  children: ReactNode;
  sectionName: string;
}

interface SectionErrorBoundaryState {
  hasError: boolean;
}

export class SectionErrorBoundary extends Component<
  SectionErrorBoundaryProps,
  SectionErrorBoundaryState
> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): SectionErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error(
        `Error in ${this.props.sectionName} section:`,
        error,
        errorInfo
      );
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <section className="scroll-mt-24" role="alert" aria-live="polite">
          <div
            className="p-6 rounded-lg border"
            style={{
              backgroundColor: "rgba(201, 100, 66, 0.05)",
              borderColor: "rgba(201, 100, 66, 0.2)",
            }}
          >
            <div className="flex items-start gap-3">
              <AlertCircle
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "#c96442" }}
                aria-hidden="true"
              />
              <div className="space-y-1">
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "hsl(48 20% 20%)" }}
                >
                  Unable to load {this.props.sectionName}
                </h3>
                <p className="text-sm" style={{ color: "#83827d" }}>
                  This section is temporarily unavailable. Please try refreshing
                  the page.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
