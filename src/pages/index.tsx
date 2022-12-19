import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>invalid chars bug</h1>
      <p>When redirecting wildcards, a special char crashes the server with error `ERR_INVALID_CHAR` causing a restart (and potential downtime in production). Nefarious users can hijack this behaviour to constantly crash your server with invalid requests</p>
      <p>ie: <pre>/from/*</pre> should send you to <pre>/to/?q=*</pre></p>
      <pre>
        {`// gatsby-config.ts
export const createPages: GatsbyNode["createPages"] = async ({
  actions,
}) => {
  actions.createRedirect(
    {
      "fromPath":"/from/*",
      "toPath": "/to/?q=*",
      "isPermanent": true
    }
  )
}`}
      </pre>
      <p>Works: <a href="/from/gatsby-plugin-fastify">/from/gatsby-plugin-fastify</a> -> /to/?q=gatsby-plugin-fastify</p>      
      <p>
        Crashes: <a href="/from/而且">/from/而且</a> -> Server crashes and 'site cannot be reached'. 
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
