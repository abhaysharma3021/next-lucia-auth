import { SignUpForm } from "@/components/signup-form";

const SignUpPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center p-4">
      <div className="border rounded-md p-5 w-full md:w-[400px]">
        <h1 className="font-semibold mb-4 text-3xl text-center">Register</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
