import React from "react";
import Grid from "@mui/material/Grid";
import Page from "../components/Page";
import { useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import avatar from "../assets/avatar.png";
import Typography from "@mui/material/Typography";

/**
 * Info Page
 */
const Info: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <Page>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        Info
      </Typography>
      <Grid container justifyContent="center" sx={{ maxWidth: "500px" }}>
        <Avatar
          alt="James"
          src={avatar}
          sx={{
            m: 2,
            float: "left",
            width: 150,
            height: 150,
            boxShadow: theme.shadows[24],
          }}
        />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
          purus venenatis ipsum pharetra dapibus ac ut nunc. Vestibulum suscipit
          urna ac fermentum mattis.
        </Typography>
      </Grid>
      <Grid sx={{ maxWidth: "500px" }}>
        <Typography paragraph>
          Nulla facilisi. Duis eleifend non augue eget dignissim. Nunc eget
          sagittis ex. Donec nec rhoncus turpis. Nulla urna sapien, dignissim
          vel congue convallis, efficitur eu orci. Maecenas luctus, quam nec
          rutrum vestibulum, diam nunc hendrerit libero, sed rhoncus tellus
          mauris non enim. Donec vitae ex nec dui tempus venenatis. Aenean
          vulputate lacinia quam eget imperdiet.
        </Typography>
      </Grid>
    </Page>
  );
};

export default Info;
