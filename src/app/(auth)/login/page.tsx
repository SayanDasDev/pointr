"use client";
import Link from "next/link";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useToggle } from "@/hooks/use-toggle";

export default function LoginPage() {
  const [isPasswordVisible, toggleIsPasswordVisible] = useToggle(false);

  return (
    <div className="flex max-w-105 flex-col gap-6 px-4">
      <div>
        <h1 className="text-center text-2xl font-bold">Welcome back!</h1>
        <FieldDescription className="text-center">
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
        </FieldDescription>
      </div>
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <IconMail />
              </InputGroupAddon>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </InputGroup>
          </Field>
          <Field>
            <div className="flex justify-between">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                <Link href="/forgot-password">Forgot Password?</Link>
              </FieldDescription>
            </div>
            <ButtonGroup>
              <InputGroup>
                <InputGroupAddon>
                  <IconLock />
                </InputGroupAddon>
                <InputGroupInput
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
              </InputGroup>
              <Button
                onClick={toggleIsPasswordVisible}
                variant="outline"
                type="button"
              >
                {isPasswordVisible ? <IconEyeOff /> : <IconEye />}
              </Button>
            </ButtonGroup>
          </Field>
          <Field>
            <Button type="submit">Login</Button>
          </Field>
          <FieldSeparator>Or</FieldSeparator>
          <Field className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" type="button">
              <IconBrandGithub />
              Continue with Github
            </Button>
            <Button variant="outline" type="button">
              <IconBrandGoogle />
              Continue with Google
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
