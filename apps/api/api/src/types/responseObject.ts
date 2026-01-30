import z from "zod";
import { ResponseSchema } from "../schemas/responseSchema";

export type ResponseObjet = z.infer<typeof ResponseSchema>