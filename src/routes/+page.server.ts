import { pb } from "$lib/pocketbase.server";
import { redirect } from "@sveltejs/kit";

function getSourceName(sourceIDStr:string|null):string{
    if(sourceIDStr==null){
        return ""
    }
    const sourceID = parseInt(sourceIDStr)
    console.log("sourceID: ",sourceID)
    switch (sourceID) {
        case 1:
            return "reddit"
        default:
            return ""
    }
}

export const load = async (event) => {
    try{
        pb.collection('visit').create({
            url:event.url,
            source:getSourceName(event.url.searchParams.get("s")),
            IP:event.getClientAddress(),
        });
    } catch(_){

    }
};

export const actions = {
    register: async (event) => {
		const data = await event.request.formData();
		const source = data.get('source') as string;
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
                source:getSourceName(source),
                platform_url:platform_url,
                IP:event.getClientAddress(),
                platforms:platforms.join(","),
            });
        } catch(_){
    
        }

        throw redirect(302, "/success")
    }
};