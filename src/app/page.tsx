// /* eslint-disable react/no-unknown-property */

import { Container } from '~/components/layout/container'

import Hero from './sections/hero'
import Shop from './sections/shop'
import Stack from './sections/stack'

export default function Page() {
  return (
    <>
      <Container>
        <Hero />
        <Shop />
        <Stack />
      </Container>
    </>
  )
}
