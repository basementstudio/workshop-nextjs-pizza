import { createStorefrontHooks } from '@bsmnt/storefront-hooks'

import { cartFragment, userErrorFragment } from '../sdk-gen/fragments'
import { storefront } from '../sdk-gen/sdk'
import { cartCookieKey } from './cart-cookie-key'

export const {
  QueryClientProvider,
  useCartQuery,
  useAddLineItemsToCartMutation,
  useOptimisticCartUpdate,
  useRemoveLineItemsFromCartMutation,
  useUpdateLineItemsInCartMutation,
  useCartOpenState
} = createStorefrontHooks({
  cartCookieKey,
  fetchers: {
    fetchCart: async (cartId) => {
      const { cart } = await storefront.query({
        cart: {
          __args: { id: cartId },
          ...cartFragment
        }
      })

      return cart ?? null
    }
  },
  mutators: {
    addLineItemsToCart: async (cartId, lines) => {
      const { cartLinesAdd } = await storefront.mutation({
        cartLinesAdd: {
          __args: {
            cartId,
            lines
          },
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })

      return {
        data: cartLinesAdd?.cart,
        userErrors: cartLinesAdd?.userErrors
      }
    },
    createCart: async () => {
      const { cartCreate } = await storefront.mutation({
        cartCreate: {
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors
      }
    },
    // TODO we could use the same mutation as createCart?
    createCartWithLines: async (lines) => {
      const { cartCreate } = await storefront.mutation({
        cartCreate: {
          __args: { input: { lines } },
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors
      }
    },
    removeLineItemsFromCart: async (cartId, lineIds) => {
      const { cartLinesRemove } = await storefront.mutation({
        cartLinesRemove: {
          __args: { cartId, lineIds },
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })
      return {
        data: cartLinesRemove?.cart,
        userErrors: cartLinesRemove?.userErrors
      }
    },
    updateLineItemsInCart: async (cartId, lines) => {
      const { cartLinesUpdate } = await storefront.mutation({
        cartLinesUpdate: {
          __args: {
            cartId,
            lines: lines.map((l) => ({
              id: l.merchandiseId,
              quantity: l.quantity,
              attributes: l.attributes
            }))
          },
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })
      return {
        data: cartLinesUpdate?.cart,
        userErrors: cartLinesUpdate?.userErrors
      }
    }
  },
  createCartIfNotFound: true
})

export { useProductFormHelper } from './use-product-form-helper'
