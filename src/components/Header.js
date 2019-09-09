import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background: url("${props => props.theme.bgPattern}") #000;
  display: flex;
  position: relative;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 2rem 1rem 1rem 1rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 300px;
  }
`

const Avatar = styled.div`
  height: 50px;
  width: 125px;
  margin: 0 auto;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  img {
    border-radius: 0%;
  }
`

const SocialMedia = styled.div`
  margin-top: 0.1rem;

  a {
    margin: 0 1rem;
  }
`

const Header = ({ avatar, name, socialMedia }) => (
  <Wrapper>
    <Content>
      <a href="/">
        <Avatar>
          <img src={avatar} alt={name} />
        </Avatar>
      </a>
      <SocialMedia>
        {socialMedia.map(social => (
          <a key={social.name} href={social.url}>
            {social.name}
          </a>
        ))}
      </SocialMedia>
    </Content>
  </Wrapper>
)

export default Header

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  socialMedia: PropTypes.array.isRequired,
}
