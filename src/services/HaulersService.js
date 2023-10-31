export const getAllHaulers = () => {
    return fetch ('http://localhost:8000/haulers').then((res)=> res.json())
}

export const getHaulerById = (id) => {
    return fetch ('http://localhost:8000/haulers/${id}').then((res)=> res.json())
}