import fetcher from "../../config/fetcher";
import { TRockets } from './entities'


export const fetchAllRecipes = async (): Promise<TRockets[]> => {
    const response = await fetcher.get("/rockets")
    return response.data;
}


export const fetchSingleRecipes = async (
    id: string
): Promise<TRockets> => {
    const response = await fetcher.get(`/rockets/${id}`)
    return response.data;
}