import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 350, height: 180 }}
        ></CardMedia>
        <CardContent sx={{ background: "#1e1e1e", height: 106 }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
              {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
              {snippet?.channelTitle || demoChannelTitle}
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
