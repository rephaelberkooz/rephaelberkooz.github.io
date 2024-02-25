import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const ListItemWithIcon = (props: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <ListItem disablePadding>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText>
        <Typography variant="body2">{props.text}</Typography>
      </ListItemText>
    </ListItem>
  );
};
