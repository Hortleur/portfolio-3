import {prisma} from "$lib/utils/prismaClient.js";

export async function load(){
    let trains = await prisma.formations.findMany()

    return {trains}
}