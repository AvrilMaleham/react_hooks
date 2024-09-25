"use client";
import UseRefDemoOne from "@/components/useRefDemoOne";
import UseRefDemoTwo from "@/components/useRefDemoTwo";
import BackButton from "@/components/backButton";

export default function useRefDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold m-5">useRef Demo</h1>
      <UseRefDemoOne />
      <UseRefDemoTwo />
      <BackButton />
    </div>
  );
}
