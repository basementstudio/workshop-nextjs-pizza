# workshop-nextjs-pizza

Simple t-shirt shop project strongly spiced with [basement.studio](https://basement.studio/) flavor for the Next.js & Pizza Workshop.


## Our Commerce Toolkit

This project is powered by the [BSMNT Commerce Toolkit](https://github.com/basementstudio/commerce-toolkit) that we built to build fast and reliable storefronts that could handle crazy amounts of traffic.

- [shopmrbeast.com](https://shopmrbeast.com)
- [karljacobs.co](https://karljacobs.co)
- [shopmrballen.com](https://shopmrballen.com)
- [ranboo.fashion](https://ranboo.fashion)


## The Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shopify](https://www.shopify.com/)


## Resources

- [Storefront Design - Figma File](https://www.figma.com/file/apST1EGGxQ5E2FiTLAbzlM/Untitled?node-id=0%3A1&t=q09OsJxJaDru8Yfc-1)


## Development

1. Install yarn:

   ```
   npm install -g yarn
   ```

2. Install the dependencies with:

   ```
   yarn
   ```

3. Start developing and watch for code changes:

   ```
   yarn dev
   ```

## Phase 1: Product UI — `20 minutes`

- Using Tailwind
- Don't connect to shopify yet

## Phase 2: Integrate with Shopify using `@bsmnt/sdk-gen` — `20 minutes`

- Read the docs: [https://github.com/basementstudio/commerce-toolkit#bsmntsdk-gen](https://github.com/basementstudio/commerce-toolkit#bsmntsdk-gen)
- Use shopify graphql endpoint: `https://next-js-pizza-by-bsmnt.myshopify.com/api/2023-01/graphql`
- Use public shopify storefront access token (found in `.env.example`)

## Phase 3: Add cart functionality using `@bsmnt/storefront-hooks` — `20 minutes`

- Why? Standard, uses react-query, can connect to any backend
- Read the docs: [https://github.com/basementstudio/commerce-toolkit#bsmntstorefront-hooks](https://github.com/basementstudio/commerce-toolkit#bsmntstorefront-hooks)
- Also you can check the example with Shopify here: [https://github.com/basementstudio/commerce-toolkit/blob/main/examples/nextjs-shopify/src/storefront/hooks/index.tsx](https://github.com/basementstudio/commerce-toolkit/blob/main/examples/nextjs-shopify/src/storefront/hooks/index.tsx)

## BONUS: Bring the initial cart state from the server — `5 minutes`

- Prevent "flash of unfetched cart"
- Feel the power of React Server Components

---

![cover image](https://github.com/basementstudio/next-typescript/raw/main/public/og.png 'We Make Cool Sh*t That Performs')
