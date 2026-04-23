export const UploadReceipt=async(selectedFile: File)=>{
    const formData = new FormData()

    if(!selectedFile) return;
    formData.append("file", selectedFile)
    
    const base_url = 'http://localhost:3000/'
    const endpoint = 'receipt/upload'

    try {
        const result = await fetch(`${base_url}${endpoint}`,{
            method: 'POST',
            body: formData
        })
        if(result.status === 200){
            return result
        }else{
            throw new Error('Error al ejecutar UploadReceipt') 
        }
    } catch (error) {
        console.log('Error al ejecutar UploadReceipt')
    }
    
}