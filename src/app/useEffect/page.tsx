"use client";
import BackButton from "@/components/backButton";
import UseEffectDemoOne from "@/components/useEffectDemoOne";

export default function useEffectDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold m-5">useEffect Demo</h1>
      <UseEffectDemoOne />
      <BackButton />
    </div>
  );
}
