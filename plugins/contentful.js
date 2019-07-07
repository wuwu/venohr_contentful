
const contentful = require('contentful')

// use default environment config for convenience
// these will be set via 'env' property in nuxt.config.js

const config = {
    space: 'whqblyqlo46i',
    accessToken: 'VaCA6WYzb3eVmuX7SQs0Lsp0ScQj1GfQTzMfao01Ibo'
}
// export 'createClient' to use it in page components

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
