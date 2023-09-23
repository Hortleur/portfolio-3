import {prisma} from "$lib/utils/prismaClient.js";

export async function load(){
    let exps = await prisma.experiences.findMany({
        include:{
            exp_to_tech: {
                include:{
                    technos: true
                }
            }
        }
    })
    return { exps }
}