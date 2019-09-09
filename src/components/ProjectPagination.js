import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  display: flex;
  max-width: ${props => props.theme.maxWidths.general};
  margin: 0 auto;
  padding: 1.5rem 0;
  a {
    color: ${props => props.theme.colors.color};
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    &:hover {
      color: ${props => props.theme.colors.linkHover};
    }
  }
  justify-items: center;
`

const Prev = styled.div`
  margin-left: auto;
`

const Next = styled.div`

`


const ProjectPagination = ({ next, prev }) => (
  <Wrapper>
    {next && (
      <Next>
        <Link to={next.fields.slug}>
          {"< "}
          {next.frontmatter.title}
        </Link>
      </Next>
    )}

    {prev && (
      <Prev>
        <Link to={prev.fields.slug}>
          {prev.frontmatter.title}
          {" >"}
        </Link>
      </Prev>
    )}
  </Wrapper>
)

export default ProjectPagination

ProjectPagination.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

ProjectPagination.defaultProps = {
  next: null,
  prev: null,
}
