import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  if (!videos?.length) return "loading...";
  console.log(videos);
  return (
    <Stack
      direction={"row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
          {item.id.channelId && (
            <ChannelCard channelDetail={item}></ChannelCard>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
