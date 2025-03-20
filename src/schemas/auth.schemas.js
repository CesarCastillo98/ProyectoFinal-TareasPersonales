import {z} from 'zod'

export const signupSchema = z.object({
    name:z.string({
        required_error:'El Nombre es Requerido',
        invalid_type_error:'El Nombre debe ser un Texto'
    }).min(1).max(255),
    email:z.string({
            required_error:'El Email es requerido',
            invalid_type_error:'El Email debe ser un texto'
        }).email({
            message:'El Email Debe Ser un Email valido'
        }),
    password:z.string({
        required_error:'La Contraseña es Requerida',
        invalid_type_error:'La Contraseña debe ser un texto'
    }).min(6,{
        message:'La contraseña debe tener al menos 6 caracteres'
    }).max(255)
})

export const signinSchema = z.object({
    email:z.string({
        required_error:'El Email es requerido',
        invalid_type_error:'El Email debe ser un texto'
    }).email({
        message:'El Email Debe Ser un Email valido'
    }),
password:z.string({
    required_error:'La Contraseña es Requerida',
    invalid_type_error:'La Contraseña debe ser un texto'
}).min(6,{
    message:'La contraseña debe tener al menos 6 caracteres'
}).max(255,{
    message:'La contraseña debe tener como maximo 255 caracteres'
})
})