/**
 * @type {import("@bsmnt/sdk-gen").Config}
 */
module.exports = {
  endpoint: 'https://next-js-pizza-by-bsmnt.myshopify.com/api/2023-01/graphql',
  headers: {
    'x-shopify-storefront-access-token':
      process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN
  }
}
