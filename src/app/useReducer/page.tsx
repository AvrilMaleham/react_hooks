"use client";
import UseReducerDemoOne from "@/components/useReducerDemoOne";
import UseReducerDemoTwo from "@/components/useReducerDemoTwo";
import BackButton from "@/components/backButton";

export default function useReducerDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold m-5">useReducer Demo</h1>

      <UseReducerDemoOne />
      <UseReducerDemoTwo />
      <BackButton />
    </div>
  );
}
