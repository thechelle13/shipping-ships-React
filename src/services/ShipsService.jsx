export const getAllShips = () => {
    return fetch ('http://localhost:8000/ships?_expand=hauler').then((res)=> res.json())
}