import { GetReceipt } from "@/services/getReceipt"
import { useQuery } from "@tanstack/react-query"



export const useGetReceipt =()=>{
    return useQuery({
        queryKey: ["receipts"],
        queryFn: GetReceipt
    })
}