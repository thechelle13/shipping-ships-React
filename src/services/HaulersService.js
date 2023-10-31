export const getAllHaulers = () => {
    return fetch ('http://localhost:8000/haulers/?_embed=dock').then((res)=> res.json())
}

export const getHaulerById = (id) => {
    return fetch ('http://localhost:8000/haulers/${id}').then((res)=> res.json())
}

export const haulerEdited = (haulers) => {
    return fetch(`http://localhost:8000/haulers${haulers.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(haulers),
    })
     .then((res) => res.json());
  };