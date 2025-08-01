import type { SignupFormData } from "@/routes/auth/sign-up"
import { useMutation } from "@tanstack/react-query"

export const useSignUpMutation=()=>{
    return useMutation({
        mutationFn:(data:SignupFormData)=>signUp(data)
    })
}