// Imports
import React from "react";
import Dialog from "@mui/material/Dialog";
import ImageList from "@mui/material/ImageList";
import DialogTitle from "@mui/material/DialogTitle";
import ImageListItem from "@mui/material/ImageListItem";

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
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{label}</DialogTitle>
      <ImageList
        cols={1}
        rowHeight={500}
        sx={{ minWidth: "80%", overflow: "auto" }}
      >
        {gallery.map(({ image, label }) => (
          <ImageListItem key={image}>
            <img
              alt={label}
              loading="lazy"
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Dialog>
  );
};

export default ProjectGallery;
