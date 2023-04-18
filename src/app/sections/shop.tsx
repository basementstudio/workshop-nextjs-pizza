import { productFragment } from '~/shopify/sdk-gen/fragments'
import { storefront } from '~/shopify/sdk-gen/sdk'
import { getShopifyGid } from '~/shopify/utils'

import Grid from '../components/grid'
import { Product } from '../components/product'

export const Shop = async () => {
  const { collection } = await storefront.query({
    collection: {
      __args: { id: getShopifyGid('Collection', '442672120084') },
      products: {
        __args: { first: 4, sortKey: 'CREATED' },
        nodes: productFragment
      }
    }
  })

  return (
    <div>
      <section className="relative z-30 w-full border-t-2 border-black bg-cream">
        <div className="relative z-10 mx-4 grid gap-5 bg-transparent pt-8 md:mx-12 md:max-w-6xl md:pt-24 lg:mx-auto lg:grid-cols-2 xl:max-w-7xl">
          {collection?.products.nodes.map((product) => {
            return <Product key={product.id} data={product} />
          })}
        </div>
        <Grid />
      </section>
    </div>
  )
}
