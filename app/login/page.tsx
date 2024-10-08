import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">请登陆</h1>
          <span className="text-xs font-normal">我们需要验证您的身份信息</span>
        </div>
        <div className="flex flex-col gap-3 text-xs">
          <input
            className="border p-3 rounded-md w-56"
            type="text"
            id="user_account_name"
            placeholder="用户名/手机号"
          />
          <input
            className="border p-3 rounded-md w-56"
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
          className="px-3 p-2 text-sm rounded-md bg-black text-white"
          type="submit"
        >
          登陆
        </button>
      </form>
    </div>
  );
}
