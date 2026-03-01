"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  signUpSchema,
  type SignUpFields,
  type SignUpErrors,
} from "@/schema/sign-up-schema";


// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function SignUp() {
  const [values, setValues] = useState<SignUpFields>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<SignUpErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(field: keyof SignUpFields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = signUpSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: SignUpErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof SignUpFields;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    try {
      // TODO: wire up authentication logic with result.data
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-[28px] font-bold text-foreground text-left">
        Create your account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <FormInput
          label="First Name"
          id="firstName"
          placeholder="First name"
          value={values.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          autoComplete="given-name"
          error={errors.firstName}
        />

        <FormInput
          label="Last Name"
          id="lastName"
          placeholder="Last name"
          value={values.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          autoComplete="family-name"
          error={errors.lastName}
        />

        <FormInput
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          autoComplete="email"
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          id="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={(e) => handleChange("password", e.target.value)}
          autoComplete="new-password"
          error={errors.password}
        />

        <Button type="submit" disabled={isLoading} className="w-full h-14 mt-4 text-base">
          {isLoading ? "Creating account…" : "Create account"}
        </Button>
      </form>

      {/* OR divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          or
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Log in */}
      <Button variant="outline" className="w-full h-14 text-base" asChild>
        <Link href="/auth/sign-in">Log in</Link>
      </Button>
    </div>
  );
}