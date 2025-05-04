'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signIn } from "@/lib/auth";
import Link from "next/link";
import { useActionState } from "react";


const SigninForm = () => {
    const [state, action] = useActionState(signIn, undefined);
    return (
        <form action={action}>
            {state?.message && (
                <p className="text-sm text-red-500">{state.message}</p>
            )}
            <div className="flex flex-col gap-2">


                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input className="w-90" type="email" id="email" name="email" placeholder="john@example.com" />
                </div>
                {state?.error?.email && (
                    <p className="text-sm text-red-500">{state.error.email}</p>
                )}

                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" placeholder="********" />
                </div>
                <Link className="text-sm underline" href="#">Forgot password?</Link>
                {state?.error?.password && (
                    <p className="text-sm text-red-500">{state.error.password}</p>
                )}
                <SubmitButton>Sign In</SubmitButton>
            </div>
        </form>
    );
}

export default SigninForm;