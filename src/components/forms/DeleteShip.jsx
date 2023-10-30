export const DeleteShip = () => {

    const [ships, setShips] = useState([])

    useEffect(()=> {
        getAllShips().then((shipArray) => {
            setShips(shipArray)
        })
    }, [])



    return
}