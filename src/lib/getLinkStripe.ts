import axios from 'axios'
export const getLinkStripe = async (total:number) => {
    console.log(total)
    const req = await axios.post('api/stripe',{total:total}) 
    return req.data
}