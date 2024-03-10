import { pb } from "$lib/pocketbase.server";
import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
    try{
        pb.collection('visit').create({
            url:event.url,
            IP:event.getClientAddress(),
        });
    } catch(_){

    }
};

export const actions = {
    register: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email') as string;
		const firstName = data.get('first_name') as string;
		const lastName = data.get('last_name') as string;
		const youtubeChannel = data.get('channel_url') as string;

        try{
            pb.collection('register').create({
                email:email,
                first_name:firstName,
                last_name:lastName,
                channel_url:channel_url,
                IP:event.getClientAddress(),
            });
        } catch(_){
    
        }

        throw redirect(302, "/success")
    }
};