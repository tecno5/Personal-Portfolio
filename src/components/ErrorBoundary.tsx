"use client";

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-white">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Something went wrong</h2>
            <p className="text-neutral-600 mb-8">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#0066FF] text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Try again →
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 