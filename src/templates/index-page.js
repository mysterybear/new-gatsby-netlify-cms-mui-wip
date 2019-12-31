import React from 'react'
import { graphql } from 'gatsby'
import GreetCard from '../components/GreetCard';
import { Grid, Box, Container } from '@material-ui/core';
import TestimonialCard from '../components/TestimonialCard';

export const IndexPageTemplate = ({ greet, testimonials }) => {
  const spacing = 4;

  return (
    <Container maxWidth="lg" spacing={spacing/2}>
      <GreetCard greet={greet} />
      <Box mt={spacing}>
        <Grid container spacing={spacing}>
          {testimonials.map((props) =>
            <Grid item xs={12} md={4} key={props.name}>
              <TestimonialCard {...props} />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

const IndexPage = ({ data }) => {
  const { greet, testimonials } = data.markdownRemark.frontmatter

  return (
    <IndexPageTemplate greet={greet} testimonials={testimonials}/>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query HelloPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        greet
        testimonials {
          name
          role
          comments
        }
      }
    }
  }`;
