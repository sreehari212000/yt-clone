import { Box, Stack } from "@mui/system"
import ChannelCard from "./ChannelCard"
import VideoCard from "./VideoCard"

function Videos({videos, direction}){
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((item, index)=>{
                return (
                    <Box key={index}>
                        {item.id.videoId && <VideoCard details={item}/>}
                        {item.id.channelId && <ChannelCard details={item}/>} 
                    </Box>
                )
            })}
        </Stack>
      
    )
}

export default Videos