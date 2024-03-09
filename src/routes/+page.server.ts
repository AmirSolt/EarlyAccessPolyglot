import { pb } from "$lib/pocketbase.server";

export const load = async (event) => {
    try{
        pb.collection('visit').create({
            url:"/",
            context:event
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
		const youtubeChannel = data.get('youtube_channel') as string;

        try{
            await pb.collection('register').create({
                email:email,
                first_name:firstName,
                last_name:lastName,
                youtube_channel:youtubeChannel,
                context:event,
            });
        } catch(_){
    
        }
    }
};