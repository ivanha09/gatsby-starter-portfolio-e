import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import arrowLeft from '../images/left-chevron.svg'
import arrowRight from '../images/right-chevron.svg'

const Wrapper = styled.div`
  display: flex;
  max-width: ${props => props.theme.maxWidths.general};
  margin: 0 auto;
  padding: 3rem 0;
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
  img {
    width: 25px;
    height: 25px;
    margin: 0 1rem 0 0;
  }
  margin-left: auto;
`

const Next = styled.div`
  img {
    width: 25px;
    height: 25px;
    margin: 0 0 0 1rem;
  }
`


const ProjectPagination = ({ next, prev }) => (
  <Wrapper>
    {next && (
      <Next>
        <Link to={next.fields.slug}>
          {"<"}
          <img src={arrowLeft} alt="Arrow Left" />
          {next.frontmatter.title}
        </Link>
      </Next>
    )}

    {prev && (
      <Prev>
        <Link to={prev.fields.slug}>
          {prev.frontmatter.title}
          <img src={arrowRight} alt="Arrow Right" />
          {">"}
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
