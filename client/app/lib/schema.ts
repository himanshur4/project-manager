import {z} from "zod";

export const signInSchema=z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(1,"Password is required"),
});

export const signUpSchema=z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(8,"Password must be at least 8 characters long"),
    name:z.string().min(3,"Name must be at least 3 characters"),
    confirmPassword:z.string().min(8,"Password must be at least 8 characters long")
}).refine((val)=>val.confirmPassword===val.password,{
        path:["confirmPassword"],
        message:"Passwords do not match",
})