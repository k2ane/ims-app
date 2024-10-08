import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "登陆 - IMS",
};

export default function LoginPage() {
  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-medium">请登陆</h1>
          <span className="text-xs font-normal">我们需要验证您的身份信息</span>
        </div>
        <div className="flex flex-col gap-3 text-xs">
          <input
            className="border-2 p-3 w-56"
            type="text"
            id="user_account_name"
            placeholder="用户名/手机号"
          />
          <input
            className="border-2 p-3 w-56"
            type="password"
            id="user_account_password"
            placeholder="密码"
          />
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex flex- gap-2 text-gray-500">
            <input type="checkbox" id="" />
            <span className="text-xs">7天内免登陆</span>
          </div>
          <Link
            href="/forget"
            className="text-gray-500 text-xs hover:underline hover:text-black cursor-pointer"
          >
            忘记密码?
          </Link>
        </div>

        <button
          className="px-3 p-2 text-sm border-2 border-black hover:bg-black hover:text-white"
          type="submit"
        >
          登陆
        </button>
      </form>
    </div>
  );
}
