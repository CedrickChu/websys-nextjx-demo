import Header from "@/components/Header";
import LoginForm from "./login-form";

export default async function RegisterPage() {
  return (
    <>
      <Header />
      <section className="py-8 min-h-screen grid place-items-center">
        <div className="w-full">
          <h1 className="text-4xl xl:text-6xl text-center font-[600] mb-4">
            Welcome Back
          </h1>
          <h2 className="text-lg text-center mb-4 text-ct-dark-200">
            Login to have access
          </h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
