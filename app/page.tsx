import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "登陆 - IMS",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-3xl">主页</h1>
      <button className="px-4 p-2 border-2 border-black hover:bg-black hover:text-white transition">
        前往控制台
      </button>
    </div>
  );
}
