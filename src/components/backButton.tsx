import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}
