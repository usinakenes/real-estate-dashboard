import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Box, Button, textTransform, Typography } from "@pankod/refine-mui";
import { logo, yariga } from 'assets'

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Refine" width="28px" />
        ) : (
          <Box display='flex' >
            <img src={logo} alt="Refine" width="28px" />
            <Typography fontSize={28} fontWeight={500} ml={1} sx={{textDecoration: 'none', color: '#11142d', textTransform: 'capitalize'}}>Sina</Typography>
          </Box>
        )}
      </Link>
    </Button>
  );
};
