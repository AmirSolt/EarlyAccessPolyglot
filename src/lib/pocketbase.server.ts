import PocketBase from 'pocketbase'
import { PRIVATE_POCKETBASE_URL } from '$env/static/private';

export const pb = new PocketBase(PRIVATE_POCKETBASE_URL);