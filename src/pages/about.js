import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header, Layout } from '../components'
import config from '../../config/site'

const Content = styled.div`
  margin: -7rem auto 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 0 ${props => props.theme.contentPadding} 6rem;
  position: relative;

  h1 {
    text-align: center;
  }

  h3 {
    color: hsl(0,0%,60%);
  }

  a {
    text-decoration: underline;
  }
`
const Description = styled.div`
  padding: 1rem 3.5rem 4rem 3.5rem;
  background-color: ${props => props.theme.colors.bg};
  border: 1px solid hsl(0,0%,80%);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.05);
`

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Index = () => (
  <Layout>
    <Header avatar={config.avatar} name={config.name} location={config.location} socialMedia={config.socialMedia} />
    <BG>
      <Content>

        <Description>
          <h1>About me</h1>
          <h3>I enjoy finding creative solutions for problems big and small. Solutions to these problems come in various mediums which is why I work in print, web and video. <a href="mailto:info@ivanha.com">Contact me</a> to see how I could help you with your needs.</h3>
        </Description>
      </Content>
    </BG>
  </Layout>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}
