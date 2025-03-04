"use client"; // Error components must be Client components

import { Alert, AlertDescription, AlertTitle } from "@risc0/ui/alert";
import { Button } from "@risc0/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import { useEffect } from "react";

export type ErrorMessageProps = {
  error: Error;
  reset: () => void;
};

export function ErrorMessage({ error, reset }: ErrorMessageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid items-center justify-center">
      <Alert variant="destructive" className="min-w-96 max-w-screen-md">
        <AlertTriangleIcon className="size-4" />
        <AlertTitle>Something Went Wrong 😔</AlertTitle>

        <AlertDescription>
          <p>{String(error.cause ?? error.message ?? error.name ?? "Unknown error")}</p>
          <Button
            size="sm"
            className="mt-2"
            variant="outline"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try Again
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}
