import { productFragment } from '~/shopify/sdk-gen/fragments'
import { storefront } from '~/shopify/sdk-gen/sdk'
import { getShopifyGid } from '~/shopify/utils'

import Grid from '../components/grid'
import Product from '../components/product'

export default async function Shop() {
  const { collection } = await storefront.query({
    collection: {
      __args: { id: getShopifyGid('Collection', '442672120084') },
      products: {
        __args: { first: 4 },
        nodes: productFragment
      }
    }
  })

  return (
    <div>
      <section className="relative z-30 w-full border-t-2 border-black bg-cream">
        <div className="relative z-10 m-auto grid max-w-7xl grid-cols-2 gap-5 bg-transparent pt-24">
          {collection?.products.nodes.map((product) => {
            return <Product key={product.id} data={product} />
          })}
        </div>

        <Grid />
      </section>
    </div>
  )
}
