import { SignInForm } from "@/components/signin-form";

const SignInPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center p-4">
      <div className="border rounded-md p-5 w-full md:w-[400px]">
        <h1 className="font-semibold mb-4 text-3xl text-center">Sign In</h1>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
