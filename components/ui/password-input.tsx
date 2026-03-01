"use client";

import * as React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface PasswordInputProps
  extends Omit<React.ComponentProps<typeof Input>, "type"> {
  /** Visible label rendered above the input. */
  label: string;
  /** Validation error message shown below the input. */
  error?: string;
  /** Extra class names for the outer wrapper div. */
  wrapperClassName?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ id, label, error, wrapperClassName, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const errorId = `${inputId}-error`;

    return (
      <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
        <label htmlFor={inputId} className="text-sm font-medium text-foreground">
          {label}
        </label>

        <div className="relative">
          <Input
            ref={ref}
            id={inputId}
            type={showPassword ? "text" : "password"}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn("pr-10", className)}
            {...props}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-controls={inputId}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2",
              "text-muted-foreground hover:text-foreground",
              "transition-colors focus-visible:outline-none"
            )}
          >
            {showPassword ? (
              <EyeOff className="size-4" aria-hidden="true" />
            ) : (
              <Eye className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>

        {error && (
          <p id={errorId} role="alert" className="text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
