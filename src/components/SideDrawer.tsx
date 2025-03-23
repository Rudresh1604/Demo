import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Button } from "flowbite-react";
import { Typography } from "@mui/material";
import ContactWithUs from "./Contact";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 350,
        height: "100%",
        backgroundColor: "#f5f5f5", // Light grey background
        padding: "16px",
      }}
      role="presentation"
      onClick={toggleDrawer(true)}
    >
      <Box
        sx={{
          backgroundColor: "white", // White background
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Slight shadow for "shades of white"
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#333", // Darker text for contrast
            marginBottom: "16px",
          }}
        >
          Connect with Us..
        </Typography>
        <Divider />
        <Box
          sx={{
            marginTop: "16px",
          }}
        >
          <ContactWithUs />
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
