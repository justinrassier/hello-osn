import React from "react"
import { graphql } from "gatsby"

import useAxios from "axios-hooks"

const SanityComponent = ({ data: pageData }) => {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://reqres.in/api/users?delay=1"
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <div>
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>title: {pageData.sanityPost.title}</div>
    </div>
  )
}

export const query = graphql`
  {
    sanityPost(id: { eq: "-24d4d2f7-2f62-574b-a5bb-a49ab86533e3" }) {
      title
      body {
        _rawChildren
      }
    }
  }
`

export default SanityComponent
