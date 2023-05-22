// Imports
import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import AbstractTabs from "./AbstractTabs";
import ImageList from "@mui/material/ImageList";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import ImageListItem from "@mui/material/ImageListItem";

// Types
export interface ProjectGalleryProps {
  open: boolean;
  label: string;
  details: Detail[];
  gallery: AppImage[];
  handleClose: () => void;
}

interface AppImage {
  id: string;
  image: string;
  label: string;
}

interface Detail {
  header: string;
  paragraphs: string[];
}

/**
 * ProjectGallery is an image list in a dialog window for a project
 */
const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  open,
  label,
  gallery,
  details,
  handleClose,
}) => {
  // Styles
  const theme = useTheme();

  return (
    <Dialog fullWidth open={open} maxWidth="md" onClose={handleClose}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          top: 8,
          right: 8,
          position: "absolute",
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ pb: 0 }}>{label}</DialogTitle>
      <AbstractTabs
        tabs={[
          {
            id: "screenshot_tab",
            label: "Screenshots",
            panel: {
              id: "screenshot_panel",
              components: (
                <ImageList sx={{ mt: 1 }} cols={1}>
                  {gallery.map(({ id, image, label }) => (
                    <ImageListItem
                      key={id}
                      sx={{
                        m: { xs: 1, sm: 1, md: 3 },
                        borderRadius: "4px",
                        boxShadow: theme.shadows[12],
                      }}
                    >
                      <img
                        alt={label}
                        src={image}
                        loading="lazy"
                        style={{ borderRadius: "4px" }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              ),
            },
          },
          {
            id: "details_tab",
            label: "Details",
            panel: {
              id: "details_panel",
              components: (
                <Box sx={{ pt: 1, minHeight: "75vh" }}>
                  {details.map((text, idx) => (
                    <div key={idx}>
                      <Typography fontSize={18}>
                        <strong>{text.header}</strong>
                      </Typography>
                      {text.paragraphs.map((text, idx) => (
                        <Typography key={idx} paragraph>
                          {text}
                        </Typography>
                      ))}
                    </div>
                  ))}
                </Box>
              ),
            },
          },
        ]}
      />
    </Dialog>
  );
};

export default ProjectGallery;
