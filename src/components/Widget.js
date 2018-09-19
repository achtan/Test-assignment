import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Title} from './Typography'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgba(154, 167, 175, 0.5);
    margin-bottom: 1rem;
`

export const Header = styled.div`
  padding: 1rem;
  background-color: rgb(245, 247, 251);
  border-bottom: 1px solid ${p => p.theme.divider};
`

const Widget = ({label, children}) => (
  <Wrapper>
    {label && <Header><Title>{label}</Title></Header>}
    {children}
  </Wrapper>
)

Widget.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
}

export default Widget
