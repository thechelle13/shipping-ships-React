export const getAllHaulers = () => {
    return fetch ('http://localhost:8000/haulers?_embed=docks').then((res)=> res.json())
}
