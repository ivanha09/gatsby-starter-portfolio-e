import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const Footer = () => (
  <Content>
    Ivan Ha &copy; {(new Date().getFullYear())}
  </Content>
)

export default Footer
