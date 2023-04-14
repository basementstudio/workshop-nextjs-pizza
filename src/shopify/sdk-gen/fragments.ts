import type {
  Cart,
  CartGenqlSelection,
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

export const cartFragment = {
  id: true,
  checkoutUrl: true,
  createdAt: true,
  lines: {
    __args: { first: 100 },
    nodes: {
      id: true
    }
  },
  totalQuantity: true,
  cost: { subtotalAmount: { amount: true, currencyCode: true } }
} satisfies CartGenqlSelection

export type CartFragment = FieldsSelection<Cart, typeof cartFragment>

export const imageFragment = {
  url: true,
  width: true,
  height: true,
  altText: true
} satisfies ImageGenqlSelection

export type ImageFragment = FieldsSelection<Image, typeof imageFragment>

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

export type ProductVariantFragment = FieldsSelection<
  ProductVariant,
  typeof productVariantFragment
>

export const productFragment = {
  id: true,
  title: true,
  options: {
    __args: { first: 25 },
    id: true,
    name: true,
    values: true
  },
  availableForSale: true,
  variants: {
    __args: { first: 100 },
    nodes: productVariantFragment
  }
} satisfies ProductGenqlSelection

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
