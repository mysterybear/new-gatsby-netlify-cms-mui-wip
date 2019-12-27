import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function GreetCard({ greet }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          Greet of the Day
        </Typography>
        <Typography variant="h5">
          Hello {greet}
        </Typography>
      </CardContent>
    </Card>
  );
}
