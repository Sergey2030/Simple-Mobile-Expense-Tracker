export const fetchAllCategory = async () =>{
    try {
        const response = await fetch('http://localhost:5000/api/category',{
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        if(!response.ok){
            console.log("не")
            return
        }
        const data = await response.json()
        console.log(data);
        
        return data
    } catch (error) {
        console.error(error)
    }
}

export const fetchNewCategry = async (Category, imageCategory) =>{
    try {
        const response = await fetch('http://localhost:5000/api/category',{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            // credentials: 'include',
            body: JSON.stringify({name: Category, image: imageCategory})
        })
    } catch (error) {
        console.error(error)
    }
}

