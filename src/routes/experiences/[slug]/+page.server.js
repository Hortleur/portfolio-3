import {prisma} from "$lib/utils/prismaClient.js";

export async function load({params}){
    let  slug = params.slug
    let exp = await prisma.experiences.findUnique({
        where:{
            id: slug
        },
        include:{
            exp_to_tech:{
                include:{
                    technos: true
                }
            }
        }
    })

    console.log(exp)
    return {exp}
}