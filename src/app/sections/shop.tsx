import Grid from '../components/grid'
import Product from '../components/product'

export default function Shop() {
  return (
    <div>
      <section className="relative z-30 w-full border-t-2 border-black bg-cream">
        <div className="relative z-10 m-auto grid gap-5 bg-transparent pt-8 sm:max-w-6xl md:grid-cols-2 md:pt-24 xl:max-w-7xl">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <Grid />
      </section>
    </div>
  )
}
