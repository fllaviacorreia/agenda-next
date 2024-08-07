import { redirect } from "next/navigation";
import { LoginSchema, LoginState } from "./validators/login";

export async function signin(state: LoginState, formData: FormData) {

    const validatedFields = LoginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    if (validatedFields.data.email === "admin@admin.com" && validatedFields.data.password === "admin123") {
        redirect('/home')
    }

    return { message: "E-mail ou senha incorretos." }
}