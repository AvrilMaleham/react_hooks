"use client";
import BackButton from "@/components/backButton";

export default function useCustomDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold m-5">useCustom Demo</h1>
      <BackButton />
    </div>
  );
}
