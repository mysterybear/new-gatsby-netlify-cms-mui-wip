import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';


export default function TestimonialCard({ name, role, comments }) {

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={role}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {comments}
        </Typography>
      </CardContent>
    </Card>
  );
}
