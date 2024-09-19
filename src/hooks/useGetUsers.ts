import { User } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
    total: number;
    skip: number;
    limit: number;
    users: User[];
}

export function useGetUsers(skip: number) {

    const data = useQuery({
        queryKey: ["users", skip],
        queryFn: async (): Promise<Props> => {
            const response = await axios(`https://dummyjson.com/users?limit=10&skip=${skip}`)
            return response.data
        }
    })
    return data;
}