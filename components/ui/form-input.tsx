import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface FormInputProps
  extends React.ComponentProps<typeof Input> {
  /** Visible label rendered above the input. */
  label: string;
  /** Validation error message shown below the input. */
  error?: string;
  /** Extra class names for the outer wrapper div. */
  wrapperClassName?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, label, error, wrapperClassName, className, ...props }, ref) => {
    // Derive a stable id from the label when none is provided
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const errorId = `${inputId}-error`;

    return (
      <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
        <label htmlFor={inputId} className="text-sm font-medium text-foreground">
          {label}
        </label>

        <Input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={className}
          {...props}
        />

        {error && (
          <p id={errorId} role="alert" className="text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };
