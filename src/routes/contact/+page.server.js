import {prisma} from "$lib/utils/prismaClient.js";
import emailjs from '@emailjs/nodejs'
import {PRIVATE_EMAIL_KEY} from "$env/static/private";
import {PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_USER_ID} from "$env/static/public";

const sendMail = async(data) =>{
    let service_id = PUBLIC_SERVICE_ID
    let template_id = PUBLIC_TEMPLATE_ID
    emailjs.init({
        publicKey: PUBLIC_USER_ID,
        privateKey: PRIVATE_EMAIL_KEY
    })

    let response = await emailjs.send(service_id, template_id, data)
        .then((res) => {
                console.log(res)
            },
            (err) => {
                console.log(err)
            })
}
export const actions = {
    send: async ({request}) => {
        let data = await request.formData()
        let name = data.get("name")
        let subject = data.get("subject")
        let email = data.get('email')
        let message = data.get('message')



        let response = await prisma.messages.create({
            data: {
                nom: name,
                sujet: subject,
                email,
                contenu: message
            }
        })

        let template_params = {
            email,
            name,
            subject,
            message
        }
        await sendMail(template_params)
    }
}