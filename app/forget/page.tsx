export default function ForgetPage() {
  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">重置密码</h1>
          <span className="text-xs font-normal">请输入注册时的手机号</span>
        </div>
        <div className="flex flex-col gap-3 text-xs">
          <input
            className="border p-3 rounded-md w-56"
            type="text"
            id="user_account_name"
            placeholder="+86 123-4567-7890"
          />
        </div>

        <button
          className="px-3 p-2 text-sm rounded-md bg-black text-white"
          type="submit"
        >
          下一步
        </button>
      </form>
    </div>
  );
}
