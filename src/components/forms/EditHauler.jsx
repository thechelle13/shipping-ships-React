import { useNavigate } from "react-router-dom"

export const EditHauler = () => {
    const [docks, setDocks] = useState([])
    const [haulers, setHaulers] = useState([])
    const Navigate = useNavigate()


    useEffect(()=> {
        getAllDocks().then((dockArray) => {
            setDocks(dockArray)
        })
    }, [])


    useEffect(()=> {
        getAllHaulers().then((haulerArray) => {
            setHaulers(haulerArray)
        })
    }, [])

    // handleSave =() => {
        
    // }

    return <>
   
    </>
}

// const handleInputChange = (evt) => {
//     const copy = { ...owner };
//     copy[evt.target.id] = evt.target.value;
//     setOwner(copy);
//     };

//     const handleSave = (event) => {
//     event.preventDefault();

//     const updatedUser = {
//         id: currentUser.id,
//         fullName: owner.fullName,
//         isPetOwner: owner.isPetOwner,
//         city: owner.city,
//         email: owner.email,
//     };

//     userEdited(updatedUser)
//         .then((res) => {
//         //console.log("API Response:", res);
//         setCurrentUser(res); 
//         Navigate(`/Owners`);
//         })
//         .catch((error) => {
//         //console.error("Error updating user data:", error);
            
//         });
//     };