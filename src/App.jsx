import { useState } from "react";
import { InfoButton, SuccessButton } from "./styled/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col px-8 py-16">
      <section className="flex flex-col">
        <form className="flex flex-col border border-slate-700 rounded-md shadow-md p-8 gap-4">
          <input
            className="border border-black rounded placeholder:text-green-500 px-2 py-1 outline-8 outline-pink-400"
            placeholder="Hello"
          />
          <input className="border border-black rounded placeholder:text-green-500 px-2 py-1" />
          <div className="flex justify-end gap-4">
            <SuccessButton className="">ABC</SuccessButton>
            <InfoButton>ABC</InfoButton>
          </div>
        </form>

        <div className="bg-slate-200 w-4/5 max-w-[40rem] min-w-[20rem]">
          <header className="flex items-center w-full gap-4 p-4">
            <p className="text-xl font-bold">Admin Login to ONEDAY</p>
            <hr className="h-1 bg-orange-500 rounded-l-full flex-auto" />
          </header>
          <form className="flex flex-col gap-4 p-4 ">
            <fieldset className="flex flex-col gap-2">
              <label className="font-bold">Account</label>
              <input
                className="peer/username rounded px-2 py-1 placeholder:uppercase"
                placeholder="username"
                autoComplete="username"
                pattern="[a-zA-Z]{2,}$"
              />
              <p className="text-sm text-danger hidden peer-invalid/username:block">
                Username asfasfs
              </p>
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="font-bold">Password</label>
              <input
                className="peer/passsowrd rounded px-2 py-1 placeholder:uppercase"
                placeholder="password"
                type="password"
                autoComplete="off"
                pattern="[a-zA-Z0-9]{2,}$"
              />
              <p className="text-sm text-danger hidden peer-invalid/passsowrd:block">
                Password asfasfs
              </p>
            </fieldset>
            <div className="flex flex-col p-2 gap-2">
              <SuccessButton className="text-lg font-bold">
                Sign In
              </SuccessButton>
              <InfoButton className="text-lg font-bold">ABC</InfoButton>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
