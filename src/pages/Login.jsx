export default function Login() {
  return (
    <div className="flex flex-col gap-4 border border-secondary rounded-lg w-full max-w-[50%] mx-auto mt-10">
      <h1 className="text-2xl font-bold bg-secondary/20  p-4 ">本機登入</h1>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-2 items-center">
          <label htmlFor="account">帳號</label>
          <input
            type="text"
            placeholder="帳號"
            className="border border-secondary rounded-lg p-2 w-[300px]"
          />
        </div>
        <div className="flex  gap-2 items-center">
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            placeholder="密碼"
            className="border border-secondary rounded-lg p-2 w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
