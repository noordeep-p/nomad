import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import mapsample from "../public/Images/mapsample.png";

export default function MapContainer() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        alt="map1"
        height="140"
        image="../public/Images/mapsample.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Map 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Map description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <IconButton size="small">
          <ThumbUpIcon></ThumbUpIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
