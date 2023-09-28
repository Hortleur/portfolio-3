<script>
import Icon from "@iconify/svelte";
import collectiveImg from '$lib/assets/clhg0vwcw00x463ht3wup1387.png'

let collective = collectiveImg
</script>

<main>
    <div class="lg:flex lg:flex-row lg:justify-around lg:items-center px-3 lg:px-20">
        <div class="w-11/12 mx-auto lg:w-6/12">
            <h2 class="text-2xl font-bold">Basé à Maisons-Alfort</h2>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21023.677666523392!2d2.4193687920688722!3d48.80174761474827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67330223988ff%3A0x1fbb0bf00a0d995d!2sMaisons-Alfort!5e0!3m2!1sfr!2sfr!4v1695675409091!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg w-11/12 lg:h-96"></iframe>
            </div>
        </div>
        <div class="flex flex-col flex-nowrap lg:w-6/12">
            <h2 class="text-2xl font-bold">Me contacter:</h2>
            <div class="flex flex-row justify-around my-5">
                <div>
                    <a href="mailto:dev@kevinb.run" class="hover:text-accent">
                    <Icon icon="line-md:email-twotone" width="52" class="mx-auto"/>
                    dev@kevinb.run
                    </a>
                </div>
                <div>
                    <a href="tel:0766200003" class="hover:text-accent">
                    <Icon icon="ion:call-sharp" width="52" class="mx-auto" />
                    0766200003
                    </a>
                </div>
            </div>
            <form action="?/send" method="post" class="flex flex-col flex-nowrap gap-10">
                <label for="email" class="flex flex-col">
                    <span class="font-semibold">Email</span>
                    <input type="text" name="email" id="email" class="input input-bordered">
                </label>
                <label for="name" class="flex flex-col">
                    <span class="font-semibold">Nom</span>
                    <input type="text" name="name" id="name" class="input input-bordered">
                </label>
                <label for="subject" class="flex flex-col">
                    <span class="font-semibold">Objet</span>
                    <input type="text" name="subject" id="subject" class="input input-bordered">
                </label>
                <label for="message" class="flex flex-col">
                    <span class="font-semibold">Votre Message</span>
                    <textarea name="message" id="message" cols="30" rows="5" class="textarea textarea-bordered"></textarea>
                </label>
                <button type="submit" class="btn btn-primary">Envoyer</button>
            </form>
        </div>
    </div>
    <div>
        <a href="https://sbk-acdsis.collective.work" target="_blank" class=" flex flex-row flex-nowrap items-center gap-3 border-2 rounded-xl w-11/12 lg:w-3/12 mx-auto my-10 py-5 px-3 font-semibold lg:hover:shadow-lg  ">
            <img src="{collective}" alt="Logo du collectif" class="w-28">
            <div>
                <p>Besoin d'une Equipe pour un projet plus ambitieux ?</p>
                <p>Retrouver mon collectif disponible pour vos grosses missions</p>
            </div>
        </a>
    </div>
</main>