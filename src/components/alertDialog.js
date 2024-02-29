import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import "../assets/css/alertDialog.css";

export default function AlertDialog({ open, onClose, errorMessage }) { 
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
        className="alert-dialog"
        PaperProps={{sx: {borderRadius: "20px",
        backgroundColor: "rgba(45, 89, 235, 0.8);",
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 10px 0 rgb(0 0 0 / 10%)",
        padding: "20px 40px",
    }}}
        >
      <DialogTitle id="alert-dialog-title" className="alert-dialog-title">
        <img
          src="data:image/svg+xml,%3Csvg height='32' style='overflow:visible;enable-background:new 0 0 32 32' viewBox='0 0 32 32' width='32' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cg id='Error_1_'%3E%3Cg id='Error'%3E%3Ccircle cx='16' cy='16' id='BG' r='16' style='fill:%23D72828;'/%3E%3Cpath d='M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z' id='Exclamatory_x5F_Sign' style='fill:%23E6E6E6;'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          alt="Error"
        />
      </DialogTitle>
      <DialogContent className="alert-dialog-content">
        <DialogContentText id="alert-dialog-description" className="alert-dialog-description">
          {errorMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="alert-dialog-actions">
        <Button onClick={onClose} autoFocus
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}
