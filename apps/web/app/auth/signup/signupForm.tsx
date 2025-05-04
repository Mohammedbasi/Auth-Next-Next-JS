'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signUp } from "@/lib/auth";
import { useActionState } from "react";
import { useFormState } from "react-dom";


const SignupForm = () => {
    const [state, action] = useActionState(signUp, undefined);
    return (
        <form action={action}>
            {state?.message && (
                <p className="text-sm text-red-500">{state.message}</p>
            )}
            <div className="flex flex-col gap-2">

                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" />
                </div>
                {state?.error?.name && (
                    <p className="text-sm text-red-500">{state.error.name}</p>
                )}

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
                {state?.error?.password && (
                    <div className="text-sm text-red-500" >
                        <p>Password must:</p>
                        <ul>
                            {state.error.password.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )

                }
                <SubmitButton>Sign Up</SubmitButton>
            </div>
        </form>
    );
}

export default SignupForm;