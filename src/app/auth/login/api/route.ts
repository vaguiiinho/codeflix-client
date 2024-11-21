import { NextRequest, NextResponse } from "next/server";
import { loginFormSchema } from "@/app/lib/validations/LoginValidation";



export async function POST(req: NextRequest) {
    try {
        const { email, password } = loginFormSchema.parse(await req.json());
        console.log('email: ' + email, 'password: ' + password);
        return new NextResponse('It works')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error.message);
        return new NextResponse(error.message, { status: 400 })
    }
}