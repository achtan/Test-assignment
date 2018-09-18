import React from 'react'
import {Query} from 'react-apollo'
import styled from 'styled-components'

import {GET_COMPANIES} from '../queries'
import {Container} from '../components/Grid'
import {CompaniesBySector, CompaniesByInvestmentSize, CompaniesList} from '../widgets'

const Wrapper = styled.div`
  background-color: rgba(230,233,245);
`

const Banner = styled.div`
    text-align: center;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem;
    background-color: #343434;
    margin-bottom: 1rem;
`

const CompaniesOverview = () => (
  <Query query={GET_COMPANIES}>
    {({loading, error, data}) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <Wrapper>
          <Banner>vestberry test assignment from Dávid Ďurika</Banner>
          <Container>
            <CompaniesBySector companies={data.companies} />
            <CompaniesByInvestmentSize companies={data.companies} />
            <CompaniesList companies={data.companies} />
          </Container>
        </Wrapper>
      )
    }}
  </Query>
)

export default CompaniesOverview
