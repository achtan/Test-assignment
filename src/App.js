import React from 'react'
import {ApolloProvider} from 'react-apollo'
import {ThemeProvider} from 'styled-components'

import client from './apollo'
import theme from './theme'
import GlobalStyles from './components/GlobalStyles'
import CompaniesOverview from './pages/CompaniesOverview'

const App = () =>
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <CompaniesOverview />
      <GlobalStyles />
    </ApolloProvider>
  </ThemeProvider>

export default App
