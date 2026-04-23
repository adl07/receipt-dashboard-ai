import { UploadReceipt } from "@/services/uploadReceipt";
import { useQueryClient, useMutation } from "@tanstack/react-query";


export const useUploadReceipt =()=>{
    const queryClient =  useQueryClient()

    return(useMutation({
        mutationFn: UploadReceipt,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['receipts']})
        }
    }))
}