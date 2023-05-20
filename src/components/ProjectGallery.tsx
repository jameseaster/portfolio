// Imports
import React from "react";
import Dialog from "@mui/material/Dialog";
import ImageList from "@mui/material/ImageList";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material";

// Types
export interface ProjectGalleryProps {
  open: boolean;
  label: string;
  gallery: AppImage[];
  handleClose: () => void;
}

interface AppImage {
  id: string;
  image: string;
  label: string;
}

/**
 * ProjectGallery is an image list in a dialog window for a project
 */
const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  open,
  label,
  gallery,
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

      <DialogTitle sx={{ pb: 0 }}>{label} Images</DialogTitle>
      <ImageList cols={1}>
        {gallery.map(({ id, image, label }) => (
          <ImageListItem
            key={id}
            sx={{ borderRadius: "4px", m: 3, boxShadow: theme.shadows[12] }}
          >
            <img
              alt={label}
              src={image}
              style={{ borderRadius: "4px" }}
              loading="lazy"
              // src={`${image}?w=164&h=164&fit=crop&auto=format`}
              // srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Dialog>
  );
};

export default ProjectGallery;
