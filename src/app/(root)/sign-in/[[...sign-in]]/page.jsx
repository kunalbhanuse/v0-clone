import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
      <section className="space-y-6 pt-[16ch] 2xl:pt-48">
        <SignIn />
      </section>
      signIn
    </div>
  );
};

export default SignInPage;
