import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function PackingList({
  items,
  deleteItem,
  handleToggle,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [open, setOpen] = useState(false);
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function handleDelete(id) {
    deleteItem(id);
  }

  function checkHandler(id) {
    handleToggle(id);
  }

  function handleSort(event) {
    setSortBy(event.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => {
          return (
            <li key={item.id}>
              <input
                type='checkbox'
                value={item.packed}
                onChange={() => checkHandler(item.id)}
              />
              <span
                style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
              </span>
              <button onClick={() => handleDelete(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={handleSort}>
          <option value='input '>Sort by Input order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed Status</option>
        </select>

        <React.Fragment>
          <button onClick={handleClickOpen}>Clear List</button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Please confirm you want to delete all items
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button
                onClick={() => {
                  handleClear();
                  handleClose();
                }}
                autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
    </div>
  );
}
