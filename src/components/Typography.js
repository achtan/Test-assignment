import React from 'react'
import styled, {css} from 'styled-components'

const baseHeading = css`
  color: ${p => p.theme.primary};
  text-transform: uppercase;
  text-align: ${p => p.align || 'left'};
`
export const Heading = styled.h2`
  font-size: 16px;
  ${baseHeading}
`

export const Title = styled.h3`
  font-size: 14px;
  margin: 0;
  font-weight: normal;
  ${baseHeading}
`
