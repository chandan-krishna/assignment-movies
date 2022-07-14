import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MovieCard = ({ movie }) => {
  const { Title, Year, Runtime, Poster } = movie;

  return (
    <Grid item md={6}>
      <Card sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {Title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {`${Year} | ${Runtime}`}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={Poster}
          alt={Title}
        />
      </Card>
    </Grid>
  );
};

export default MovieCard;
