import { FC } from "react";
import { Box, TextField } from "@mui/material";

const SearchProductsForm: FC = () => {
  return (
    <Box component="form">
      <TextField label="Search Products" />
    </Box>
  );
};

export default SearchProductsForm;
