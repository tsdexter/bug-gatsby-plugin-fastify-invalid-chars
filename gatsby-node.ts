import { GatsbyNode } from "gatsby"

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
  actions.createRedirect(
    {
      "fromPath":"/google/*",
      "toPath": "https://google.com/search?q=*",
      "isPermanent": true
    }
  )
}