"use client"

export const GetReceipt = async()=>{

    const base_url = 'http://localhost:3000/'
    const endpoint = 'receipt/receiptInfo'
    
    try {
        const res = await fetch(`${base_url}${endpoint}`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(!res.ok){
            throw new Error('Ocurrio un error al consultar GetReceipt')
        }
        const data = await res.json()
        return data
    } catch (error) {
        
    }
}
