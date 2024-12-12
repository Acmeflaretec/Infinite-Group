import { useMutation, useQuery, useQueryClient } from "react-query";
import {
    getUsers,
    editUsers
} from "./storeUrls";
const useGetUser = (params) => {
    return useQuery(["get_user", params], () => getUsers(params), {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });
};
const useUpdateUserStatus = () => {

    const queryClient = useQueryClient();

    return useMutation(({ userId, newStatus }) => editUsers({ userId, newStatus }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries("get_user");
            return data;
        },
        onError: (data) => {
            return data;
        },
    });
};
export {
    useGetUser,
    useUpdateUserStatus
};
