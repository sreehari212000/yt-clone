import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { demoProfilePicture } from "../utils/constant"

function ChannelCard({details, marginTop}){
    return (
        <Box 
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '356px', md: '320px'},
                height: '326px',
                margin: 'auto',
                marginTop
            }}
        >
            <Link to={`/channel/${details?.id?.channelId}`}>
                <CardContent sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', 
            textAlign: 'center', color: '#fff'}}>
                <CardMedia image={details?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                    alt={details?.snippet?.title}
                    sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}} 
                />
                <Typography variant="h6">
                    {details?.snippet?.title}
                    <CheckCircle sx={{fontSize: 14, color: 'grey', ml:'5px'}}/>
                </Typography>
                {details?.statistics?.subscriberCount && (<Typography>
                    {parseInt(details?.statistics?.subscriberCount).toLocaleString()}
                    subscribers 
                </Typography>)}
            </CardContent>
            </Link>

        </Box>
    )
}

export default ChannelCard