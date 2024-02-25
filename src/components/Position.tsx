import { List, Stack, Typography } from "@mui/material";

import { ListItemWithIcon } from "./ListItemWithIcon";

export const Position = (props: {
  title?: string;
  company: string;
  dateRange: string;
  description: string;
  bulletPoints: string[];
  bulletIcon: React.ReactNode;
}) => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {props.title && (
          <Typography variant="body1">
            <b>{props.title}</b>
          </Typography>
        )}
        <Typography variant="body1">
          <b>{props.company}</b>
        </Typography>
        <Typography variant="body1">
          <i>{props.dateRange}</i>
        </Typography>
      </Stack>
      <Typography variant="body2">{props.description}</Typography>
      <List>
        {props.bulletPoints.map((point: string) => {
          return <ListItemWithIcon icon={props.bulletIcon} text={point} />;
        })}
      </List>
    </>
  );
};
