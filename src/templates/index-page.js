import React from 'react'
import { graphql } from 'gatsby'
import GreetCard from '../components/GreetCard';

export const IndexPageTemplate = props => {
  return (
    <GreetCard {...props} />
  );
}

const IndexPage = ({ data }) => {
  const { greet } = data.markdownRemark.frontmatter

  return (
    <IndexPageTemplate greet={greet} />
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query HelloPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        greet
      }
    }
  }`;
