import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] grid place-items-center px-6">
      <div className="text-center max-w-[440px]">
        <BrandMark size={56} className="mx-auto" />
        <h1 className="display-2 mt-7">Lost the thread.</h1>
        <p className="lede mt-4">That page isn't here. The home screen has the tour.</p>
        <Link href="/" className="btn-pink mt-8 inline-flex">Back to NutriMate</Link>
      </div>
    </main>
  );
}
