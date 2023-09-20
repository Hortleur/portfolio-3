import { prisma} from "$lib/utils/prismaClient.js";

export async function load() {
    let techs = await prisma.technos.findMany({
        orderBy:{
            level: 'desc'
        }
    })

    let exps = await prisma.experiences.findMany()
    let trainings = await prisma.formations.findMany()

    return { techs, exps, trainings }
}

export const actions = {
    editTech: async ({request})=>{
        let data = await request.formData()
        let id = data.get('id')
        let name = data.get('name')
        let level = Number(data.get('level'))
        let color = data.get('color')
        let iconName = data.get('iconName')
        let response = await prisma.technos.update({
            where:{
                id: id
            },
            data:{
                name,
                level,
                color,
                iconName
            }
        })
        console.log(response)
    },
    deleteTech: async ({request}) => {
        let data = await request.formData()
        let id = data.get('id')
        let response = await prisma.technos.delete({
            where:{
                id
            }
        })
        return response
    },
    addTech: async ({request}) => {
        let data = await request.formData()
        let name = data.get('name')
        let level = Number(data.get('level'))
        let color = data.get('color')
        let iconName = data.get('iconName')

        let response = await prisma.technos.create({
            data:{
                name,
                level,
                color,
                iconName
            }
        })
        console.log(response)
    }
}

