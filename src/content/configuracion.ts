import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
    schema: z.object({
        titulo: z.string(),
        descripcion: z.string(),
        imagen: z.string(),
        urlRepositorio: z.string(),
        etiquetas: z.array(z.string()),

    })
});

export const collections = { proyectos };
