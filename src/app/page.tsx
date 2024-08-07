'use client'
import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { signin } from "./server/action";

export default function Login() {
  const [state, action] = useFormState(signin, undefined)
  
  return (
    <main className="flex flex-col justify-center w-full h-full items-center">
      <form className="bg-slate-300 flex flex-col w-1/2 h-4/6 justify-center items-center rounded-sm" action={action}>
      <h1>Formulário</h1>
        <Input
          id="email"
          name="email"
          type="email"
          title="Insira seu e-mail"
          placeholder="Email"
          errors={state?.errors?.email || undefined}
        />
        <Input
          id="password"
          name="password"
          type="password"
          title="Insira sua senha"
          placeholder="Senha"
          errors={state?.errors?.password || undefined}
        />
        <Button title="Submit" color="bg-green-500" type="submit" />
        
          { state?.message ? <p className='text-red-600'>{state?.message}</p> : <></>
        }
      </form>
    </main>
  );
}
