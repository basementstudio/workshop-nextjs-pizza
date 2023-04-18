import type {
  Cart,
  CartGenqlSelection,
  CartLine,
  CartLineGenqlSelection,
  CartUserError,
  CartUserErrorGenqlSelection,
  Collection,
  CollectionGenqlSelection,
  FieldsSelection,
  Image,
  ImageGenqlSelection,
  Product,
  ProductGenqlSelection,
  ProductVariant,
  ProductVariantGenqlSelection
} from './generated'

export const imageFragment = {
  url: true,
  width: true,
  height: true,
  altText: true
} satisfies ImageGenqlSelection

export const productVariantFragment = {
  id: true,
  title: true,
  availableForSale: true,
  quantityAvailable: true,
  compareAtPriceV2: {
    amount: true,
    currencyCode: true
  },
  priceV2: {
    amount: true,
    currencyCode: true
  },
  image: imageFragment,
  selectedOptions: {
    name: true,
    value: true
  }
} satisfies ProductVariantGenqlSelection

export const productFragment = {
  id: true,
  title: true,
  description: true,
  images: {
    __args: { first: 5 },
    edges: {
      node: imageFragment
    }
  },
  options: {
    __args: { first: 25 },
    id: true,
    name: true,
    values: true
  },
  availableForSale: true,
  priceRange: {
    minVariantPrice: {
      amount: true
    }
  },
  variants: {
    __args: { first: 100 },
    nodes: productVariantFragment
  }
} satisfies ProductGenqlSelection

export const cartLineItemFragment = {
  id: true,
  quantity: true,
  estimatedCost: {
    subtotalAmount: {
      amount: true
    }
  },
  cost: {
    subtotalAmount: { amount: true, currencyCode: true }
  },
  merchandise: {
    on_ProductVariant: {
      product: {
        id: true,
        title: true,
        description: true
      },
      selectedOptions: {
        name: true,
        value: true
      },
      image: imageFragment
    }
  }
} satisfies CartLineGenqlSelection

export const cartFragment = {
  id: true,
  checkoutUrl: true,
  createdAt: true,
  lines: {
    __args: { first: 100 },
    nodes: cartLineItemFragment
  },
  totalQuantity: true,
  cost: { subtotalAmount: { amount: true, currencyCode: true } }
} satisfies CartGenqlSelection

export type CartLineFragment = FieldsSelection<
  CartLine,
  typeof cartLineItemFragment
>

export type CartFragment = FieldsSelection<Cart, typeof cartFragment>

export type ImageFragment = FieldsSelection<Image, typeof imageFragment>

export type ProductVariantFragment = FieldsSelection<
  ProductVariant,
  typeof productVariantFragment
>

export type ProductFragment = FieldsSelection<Product, typeof productFragment>

export const collectionFragment = {
  id: true,
  title: true,
  description: true,
  products: {
    __args: { first: 100 },
    nodes: productFragment
  }
} satisfies CollectionGenqlSelection

export type CollectionFragment = FieldsSelection<
  Collection,
  typeof collectionFragment
>

export const userErrorFragment = {
  message: true,
  code: true,
  field: true
} satisfies CartUserErrorGenqlSelection

export type UserErrorFragment = FieldsSelection<
  CartUserError,
  typeof userErrorFragment
>
