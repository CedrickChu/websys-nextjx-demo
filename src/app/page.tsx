import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="max-w-4xl mx-auto rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Hello, Anonymous
          </p>
        </div>
      </section>
    </>
  );
}
