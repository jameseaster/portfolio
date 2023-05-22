import React from "react";
import Grid from "@mui/material/Grid";
import Page from "../components/Page";
import Card from "@mui/material/Card";
import pdf from "../assets/resume.pdf";
import { useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import avatar from "../assets/avatar.png";
import { mediaIcons } from "../data/mediaIcons";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import AbstractTooltip from "../components/AbstractTooltip";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

/**
 * Info Page
 */
const Info: React.FC<{}> = () => {
  // Style
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
                mb: { md: 2, xs: 1 },
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
            {mediaIcons.map(({ id, url, tooltip, style, icon }) => (
              <AbstractTooltip placement="bottom" title={tooltip} key={id}>
                <div>
                  <IconButton
                    component="button"
                    sx={{
                      p: 0,
                      mx: { xs: 1, sm: 2 },
                      boxShadow: theme.shadows[5],
                      ...style,
                    }}
                    onClick={() => window.open(url, "_blank", "noreferrer")}
                  >
                    <img
                      alt={tooltip}
                      src={icon[theme.palette.mode]}
                      style={{
                        width: theme.spacing(4),
                        height: theme.spacing(4),
                        transition: "all ease-in-out 0.25s",
                      }}
                    />
                  </IconButton>
                </div>
              </AbstractTooltip>
            ))}
            <AbstractTooltip placement="bottom" title="Resume">
              <IconButton
                component="button"
                sx={{ p: 0, mx: { xs: 1, sm: 2 }, boxShadow: theme.shadows[5] }}
                onClick={() => window.open(pdf, "_blank", "noreferrer")}
              >
                <ArticleOutlinedIcon
                  sx={{
                    width: theme.spacing(4),
                    height: theme.spacing(4),
                    padding: theme.spacing(0.5),
                    borderRadius: theme.spacing(2),
                    color: theme.palette.mode === "dark" ? "white" : "black",
                    backgroundColor:
                      theme.palette.mode === "dark" ? "black" : "white",
                  }}
                />
              </IconButton>
            </AbstractTooltip>
          </Grid>
        </CardContent>
      </Card>
    </Page>
  );
};

export default Info;
