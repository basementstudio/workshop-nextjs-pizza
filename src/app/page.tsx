import { Container } from '~/components/layout/container'

import Hero from './sections/hero'
import Shop from './sections/shop'
import Stack from './sections/stack'

// can't use edge runtime yet because of this issue: https://github.com/vercel/next.js/issues/43690
// export const runtime = 'edge'

export default async function Page() {
  return (
    <>
      <Container>
        <Hero />
        {/* @ts-expect-error rsc */}
        <Shop />
        <Stack />
      </Container>
    </>
  )
}
