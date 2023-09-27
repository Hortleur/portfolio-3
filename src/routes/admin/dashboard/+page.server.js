import { prisma} from "$lib/utils/prismaClient.js";

export async function load() {
    let techs = await prisma.technos.findMany({
        orderBy:{
            level: 'desc'
        }
    })

    let exps = await prisma.experiences.findMany({
        include:{
            exp_to_tech:{
                include:{
                    technos: true
                }
            }
        }
    })
    let trainings = await prisma.formations.findMany()

    return { techs, exps, trainings }
}

export const actions = {
    // tech actions
    editTech: async ({request})=>{
        let data = await request.formData()
        let id = Number(data.get('id'))
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
    },

    // Exp actions

    addExp: async({request}) => {
        let dataForm = await request.formData()
        let title = dataForm.get('title')
        let description = dataForm.get('description')
        let tech = dataForm.getAll('technos')
        let technos = tech.map(Number)
        let societe = dataForm.get('societe')
        let status = dataForm.get('status')

        let response = await prisma.experiences.create({
            data:{
                title,
                description,
                societe,
                status,
                exp_to_tech: {
                    create: technos.map(techId => ({
                        technos: {
                            connect: { id: techId }
                        }
                    }))
                }
            },
        })
    },

    editExp: async ({ request }) => {
        let dataForm = await request.formData();
        let id = dataForm.get('id');
        let title = dataForm.get('title');
        let description = dataForm.get('description');
        let techs = dataForm.getAll('technos').map(Number);
        let societe = dataForm.get('societe')
        let status = dataForm.get('status')

        let response = await prisma.experiences.update({
            where: {
                id: id
            },
            data: {
                title,
                description,
                societe,
                status,
                exp_to_tech: {
                    deleteMany: {
                        exp: id
                    },
                    create: techs.map(techId => ({
                        technos: {
                            connect: { id: techId }
                        }
                    }))
                }
            }
        });
    },

    deleteExp: async({request}) =>{
        let data = await request.formData()
        let id = data.get('id')
        let response = await prisma.experiences.delete({
            where:{
                id
            }
        })
    },

    // trainings actions

    addTrain: async ({request}) => {
        let data = await request.formData()
        let name = data.get('name')
        let description = data.get('description')
        let obtention_date = new Date(data.get('obtention_date'))
        let completion = Number(data.get('completion'))
        let response = await prisma.formations.create({
            data: {
                name,
                description,
                obtention_date,
                completion
            }
        })
        console.log(response)
    },

    deleteTrain: async({request}) => {
        let data = await request.formData()
        let id = data.get('id')
        let response = await prisma.formations.delete({
            where:{
                id
            }
        })
    },

    editTrain: async ({request}) => {
        let data = await request.formData()
        let id = data.get('id')
        let name = data.get('name')
        let description = data.get('description')
        let obtention_date = new Date(data.get('obtention_date'))
        let completion = Number(data.get('completion'))
        let response = await prisma.formations.update({
            where:{
            id
                },
            data: {
                name,
                description,
                obtention_date,
                completion
            }
        })
        console.log(response)
    },
}

