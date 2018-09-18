import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from '@rebass/grid'

export * from '@rebass/grid'
export const Row = props => <Flex mx={-3} flexWrap="wrap" {...props} />
export const Column = props => <Box px={3} {...props} />
export const Container = styled(Box)`
  max-width: 1024px;
`
Container.defaultProps = {
  mx: 'auto',
  px: 3,
}
