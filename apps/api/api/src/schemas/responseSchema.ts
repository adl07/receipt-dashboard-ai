import z from "zod";

export const ResponseSchema = z.object({
    empleado: z.string().min(4, 'El nombre del empleado debe contener minimo 4 carácteres'),
    documento: z.string().min(8, 'El documento debe contener minimo 8 carácteres'),
    cuil: z.string().min(13,'El documento debe contener minimo 13 carácteres' ),
    legajo: z.string().min(5, 'El legajo debe contener minimo 5 carácteres' ),
    puesto: z.string().min(4, 'El puesto debe contener minimo 4 carácteres'),
    categoria: z.string().min(5,'La categoría debe contener minimo 5 carácteres' ),
    antiguedad: z.string().min(10,'La antiguedad debe contener minimo 10 carácteres'),
    obraSocial: z.string().min(8, 'La OS debe contener minimo 8 carácteres'),
    sueldo: z.number().positive('El total debe ser un saldo positivo'),
    fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'La fecha debe tener formato YYYY-MM-DD'),
    banco: z.string().min(4,'El banco debe contener minimo 4 carácteres')
})