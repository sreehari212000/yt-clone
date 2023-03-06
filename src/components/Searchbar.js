import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton} from "@mui/material"
import {Search} from "@mui/icons-material"

function Seacrchbar(){
    const [searchterm, setSearchterm] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        if(searchterm){
            navigate(`/search/${searchterm}`)
            setSearchterm('')
        }
    }   
    return (
        <Paper onSubmit={handleSubmit} component="form" sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow:'none', mr:{sm: 5}}}>
            <input value={searchterm} onChange={(e)=>setSearchterm(e.target.value)} type="text" className="search-bar" placeholder="Search..."/>
            <IconButton type="submit" sx={{p: '10px'}}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default Seacrchbar