import { Container } from '~/components/layout/container'

import Nav from './components/nav'
import Footer from './sections/footer'
import Hero from './sections/hero'
import Shop from './sections/shop'
import Stack from './sections/stack'

export const runtime = 'edge'

export default async function Page() {
  return (
    <>
      <Container>
        {/* @ts-expect-error rsc */}
        <Nav />
        <Hero />
        {/* @ts-expect-error rsc */}
        <Shop />
        <Stack />
        <Footer />
      </Container>
    </>
  )
}
