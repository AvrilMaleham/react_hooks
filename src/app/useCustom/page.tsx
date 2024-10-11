"use client";
import BackButton from "@/components/backButton";
import UseCustomDemoOne from "@/components/useCustomDemoOne";
import UseCustomDemoTwo from "@/components/useCustomDemoTwo";

export default function useCustomDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold m-5">useCustom Demo</h1>
      <UseCustomDemoOne/>
      <UseCustomDemoTwo />
      <BackButton />
    </div>
  );
}
