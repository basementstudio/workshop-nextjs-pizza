// /* eslint-disable react/no-unknown-property */
// 'use client'

import { Container } from '~/components/layout/container'

import Nav from './components/nav'
import Footer from './sections/footer'
import Hero from './sections/hero'
import Shop from './sections/shop'
import Stack from './sections/stack'

export default function Page() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
        <Shop />
        {/* <Stack /> */}
        {/* <Footer /> */}
      </Container>
    </>
  )
}
