import { useNavigate } from "react-router-dom"

export const EditHauler = () => {
    const [docks, setDocks] = useState([])
    const [haulers, setHaulers] = useState([])
    const navigate = useNavigate()


    useEffect(()=> {
        getAllDocks().then((dockArray) => {
            setDocks(dockArray)
        })
    }, [])


    // getAllDocks().then((dockObject) => {
    //     setDocks(dockObject)
    // },[])

    handleSave =() => {
        
    }

    return <>
   
    </>
}