import { Stack } from "@mui/material"
import { categories } from "../utils/constant"


const Sidebar = ({selectedCategory, setSelectedCategory})=>{
    return (
        <Stack direction='row' sx={{
            overflow: 'auto',
            height: {sx: 'auto', md:'95%'},
            flexDirection: {md: 'column'}
            }}>
                {categories.map((cat)=>{
                    return (
                        <button className="category-btn"
                        onClick={()=>setSelectedCategory(cat.name)}
                        style={{
                            background: cat.name === selectedCategory && '#fc1503',
                            color: 'white'
                        }} key={cat.name}> 
                            <span style={{color: cat.name === selectedCategory? 'white':'red', marginRight: '15px'}}>{cat.icon}</span>
                            <span style={{opacity: cat.name === selectedCategory ? '1': '0.8'}}>{cat.name}</span>
                        </button>
                    )
                })}

        </Stack>
    )
}

export default Sidebar