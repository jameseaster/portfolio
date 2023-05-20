import React from "react";
import Grid from "@mui/material/Grid";
import Page from "../components/Page";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import avatar from "../assets/avatar.png";
import { mediaIcons } from "../data/mediaIcons";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import AbstractTooltip from "../components/AbstractTooltip";

/**
 * Info Page
 */
const Info: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <Page>
      <Card elevation={20}>
        <CardContent sx={{ p: 4, maxWidth: "450px", textAlign: "center" }}>
          <Grid container justifyContent="center">
            <Avatar
              alt="James"
              src={avatar}
              sx={{
                m: 3,
                width: 150,
                height: 150,
                mb: { md: 3, sm: 2, xs: 1 },
                boxShadow: theme.shadows[24],
              }}
            />
            <Typography paragraph sx={{ mt: 3 }}>
              Hi all, I'm James Easter, thanks for stopping by! I'm a software
              engineer currently enjoying mobile and web development. I also
              have a passion for music, coffee, & fly fishing and would love to
              learn more about you.
            </Typography>
            <Typography paragraph sx={{ mt: 3 }}>
              Feel free to peruse my recent work and send me a message. Cheers!
            </Typography>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 2, pt: 1 }}
          >
            {mediaIcons.map(({ id, url, tooltip, style, img }) => (
              <AbstractTooltip placement="bottom" title={tooltip} key={id}>
                <div>
                  <IconButton
                    component="button"
                    sx={{ p: 0, mx: 2, boxShadow: theme.shadows[3], ...style }}
                    onClick={() => window.open(url, "_blank", "noreferrer")}
                  >
                    <Avatar
                      src={img}
                      alt={tooltip}
                      sx={{ width: theme.spacing(4), height: theme.spacing(4) }}
                    />
                  </IconButton>
                </div>
              </AbstractTooltip>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Page>
  );
};

export default Info;
