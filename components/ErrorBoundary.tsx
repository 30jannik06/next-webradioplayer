import React, { Component, ErrorInfo, ReactNode } from "react";
import { IErrorBoundaryProps } from "@/interfaces/IErrorBoundaryProps";
import { IErrorBoundaryState } from "@/interfaces/IErrorBoundaryState";

class ErrorBoundary extends Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): IErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can log the error to an error reporting service here
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // You can render a fallback UI here
            return <div>Something went wrong.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
