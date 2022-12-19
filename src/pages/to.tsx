import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const ToPage: React.FC<PageProps> = () => {
  const [q, setQ] = React.useState("loading...")
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramQ = params.get("q");
    setQ(paramQ || "loading...")
  }, [])
  return (
    <main>
      <h1>working redirect</h1>
      <p>You navigated to <pre>/from/{q}</pre> but ended up on <pre>/to/?q={q}</pre></p> 
    </main>
  )
}

export default ToPage

export const Head: HeadFC = () => <title>To Page</title>
