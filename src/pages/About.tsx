import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { NavBar } from "../components";
import { MenuBook } from "@mui/icons-material";

export const About = () => {
  const theme = useTheme();
  return (
    <>
      <NavBar />
      <Container maxWidth={false}>
        <Stack
          spacing={2}
          divider={
            <Divider
              orientation="horizontal"
              flexItem
              color={theme.palette.text.secondary}
            />
          }
          sx={{ minWidth: "512px" }}
        >
          <Stack spacing={1}>
            <Typography variant="h5">Employment History</Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="body1">
                <b>Tulip Interfaces</b>
              </Typography>
              <Typography variant="body1">
                <i>June 2021 - Present</i>
              </Typography>
            </Stack>
            <Typography variant="body2">
              Series C startup from MIT - an IoT and cloud platform for
              manufacturing data and operations.
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="h5">Educaton</Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="body1">
                <b>The College of Wooster</b>
              </Typography>
              <Typography variant="body1">
                <i>August 2017 - May 2021</i>
              </Typography>
            </Stack>
            <Typography variant="body2">
              B.A. Mathematics - Cum Laude, Minor in Computer Science
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MenuBook color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">
                    B.A. Mathematics - Cum Laude, Minor in Computer Science
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Stack>
          <Typography>Item 3</Typography>
          <Typography>Item 4</Typography>
        </Stack>
      </Container>
    </>
  );
};
