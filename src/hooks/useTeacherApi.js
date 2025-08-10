import { useCallback, useState } from "react"
import apiRoutes from "../api/apiRoutes"
import axios from "axios"
const useTeacherApi = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null) 

    const fetchTeacher = useCallback (async () =>{
        setLoading(true)
        setError(null)
        try{
            const res = await axios.get(apiRoutes.getAllTeachers)
            setData(res.data)

        }catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }


    }, [])

        const getTeacherById = useCallback (async (id) =>{
        setLoading(true)
        setError(null)
        try{
            const res = await axios.get(apiRoutes.getTeacherById(id))
           return res.data
          
        }catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }


    }, [])

      const deleteTeacherFromList = useCallback (async (id) =>{
        setLoading(true)
        setError(null)
        try{
            await axios.delete(apiRoutes.deleteTeacher(id))
            setData((prev) => prev.filter((el) => (el.id !==id)))

        }catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }


    }, [])

    const editTeacher = useCallback (async (id, editedData) =>{
        setLoading(true)
        setError(null)
        try{
           const res = await axios.put(apiRoutes.updateTeacher(id), editedData)
           
             setData(prev => prev.map(el => 
             el.id === id ?  res.data : el
             ))

        }catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }, [])

    const addNewTeacher = useCallback (async (newData) =>{
        setLoading(true)
        setError(null)

        try{
           const res = await axios.post(apiRoutes.addTeacher, newData)
           
             setData(prev => [newData, ...prev])

        }catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }, [])

    return {
        data,
        loading,
        error,
        getTeacherById,
        deleteTeacherFromList,
        editTeacher,
        fetchTeacher,
        addNewTeacher
    }
}
export default useTeacherApi