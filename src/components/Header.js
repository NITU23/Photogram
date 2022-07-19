import React, { useState } from "react";
import { AppBar,Typography,Toolbar,Box,Button,Tabs,Tab,} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(22,13,48,1) 0%, rgba(32,19,54,1) 0%, rgba(40,24,59,1) 0%, rgba(32,28,108,1) 0%, rgba(2,0,36,1) 0%, rgba(154,21,127,1) 33%, rgba(210,14,176,1) 65%, rgba(35,28,31,1) 100%, rgba(232,215,222,1) 100%)",
      }}
    >
    
      <Toolbar>
      
      <Typography  variant="h4">
          Photogram
        </Typography>
      
        
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                
                LinkComponent={Link}
                to="/blogs"
                label="All Photos"
              />
              <Tab
                
                LinkComponent={Link}
                to="/myBlogs"
                label="My Photos"
              />
              <Tab
                
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Photos"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
