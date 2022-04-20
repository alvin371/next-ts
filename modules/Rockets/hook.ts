import { useQuery, UseQueryResult } from "react-query";
import { fetchAllRecipes, fetchSingleRecipes } from "./api";
import { TRockets } from "./entities";

const useAllRecipes = (): UseQueryResult<TRockets[], Error> => {
    return useQuery<TRockets[], Error>("rockets", fetchAllRecipes)
}

const useSingleRecipes = (id: string): UseQueryResult<TRockets, Error> => {
    return useQuery<TRockets, Error>(["rockets", id], () =>
        fetchSingleRecipes(id))
}

export { useAllRecipes, useSingleRecipes }