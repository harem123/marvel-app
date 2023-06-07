import Button from "@mui/material/Button";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import Stack from "@mui/material/Stack";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";

export default function PagesButtons({ handlePageClick }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={(event) => handleClick(-20)}
        variant="contained"
        startIcon={<ArrowBackIosNewSharpIcon />}
      >
        Previous
      </Button>
      <Button
        onClick={(event) => handlePageClick(20)}
        variant="contained"
        endIcon={<NavigateNextSharpIcon />}
      >
        Next
      </Button>
    </Stack>
  );
}
