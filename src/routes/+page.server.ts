import { pb } from "$lib/pocketbase.server";
import { redirect } from "@sveltejs/kit";


export const load = async (event) => {
    
    const referrer = event.request.headers.get('referer')||""

    try{
        pb.collection('visit').create({
            url:event.url,
            source:referrer,
            IP:event.getClientAddress(),
        });
    } catch(_){

    }

    return {referrer}
};

export const actions = {
    register: async (event) => {
		const data = await event.request.formData();
		const referrer = data.get('referrer') as string;
		const email = data.get('email') as string;
		const firstName = data.get('first_name') as string;
		const lastName = data.get('last_name') as string;
		const platform_url = data.get('platform_url') as string;
		const platforms = data.getAll('platforms') as string[];


        try{
            pb.collection('register').create({
                email:email,
                first_name:firstName,
                last_name:lastName,
                source:referrer,
                platform_url:platform_url,
                IP:event.getClientAddress(),
                platforms:platforms.join(","),
            });
        } catch(_){
    
        }

        throw redirect(302, "/success")
    }
};