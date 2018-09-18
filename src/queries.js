import gql from 'graphql-tag'

export const GET_COMPANIES = gql`
  query getCompanies {
    companies: company {
      name
      stage
      sector
      investmentSize
    }
  }`

export const ADD_COMPANY = gql`
  mutation ($name: String!, $stage: String!, $sector: String!, $investmentSize: Int!) {
    addCompany(name: $name, stage: $stage, sector: $sector, investmentSize: $investmentSize) {
      name
      stage
      sector
      investmentSize
    }
  }`

export const updateCompaniesCache = (cache, {data: {addCompany}}) => {
  const {companies} = cache.readQuery({query: GET_COMPANIES})
  cache.writeQuery({
    query: GET_COMPANIES,
    data: {companies: companies.concat([addCompany])}
  })
}
