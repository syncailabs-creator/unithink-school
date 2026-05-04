import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Page error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-color-bg flex items-center justify-center px-6">
          <div className="text-center flex flex-col gap-6 max-w-md">
            <h1 className="text-2xl font-heading font-black text-color-text">
              Something went wrong
            </h1>
            <p className="text-color-text-2 font-medium">
              This page ran into an unexpected error. Please refresh to continue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary mx-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-black"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
