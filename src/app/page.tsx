import Link from "next/link";

export default function Home() {
  return (
    <div className="flex text-2xl flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col text-left">
        <Link className="hover:font-bold m-5" href="/useEffect">useEffect</Link>
        <Link className="hover:font-bold m-5" href="/useRef">useRef</Link>
        <Link className="hover:font-bold m-5" href="/useReducer">useReducer</Link>
        <Link className="hover:font-bold m-5" href="/useCustom">useCustom</Link>
        </div>
    </div>
  );
}
