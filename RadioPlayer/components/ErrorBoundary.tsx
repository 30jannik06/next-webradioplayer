import React, { Component, ErrorInfo, ReactNode } from "react";
import { IErrorBoundaryProps } from "@/interfaces/IErrorBoundaryProps";
import { IErrorBoundaryState } from "@/interfaces/IErrorBoundaryState";

export class ErrorBoundary extends Component<
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
            // Customized fallback UI
            return (
                <div className="flex flex-col items-center justify-center h-screen text-red-500">
                    <h1 className="text-4xl font-bold mb-4">
                        Oops! Something went wrong.
                    </h1>
                    <p className="text-lg">
                        We apologize for the inconvenience. Please try again
                        later.
                    </p>
                    {/* You can add more information or actions for the user */}
                </div>
            );
        }

        return this.props.children;
    }
}
