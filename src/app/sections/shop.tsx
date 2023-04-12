import Grid from '../components/grid'
import Product from '../components/product'

export default function Shop() {
  return (
    <div>
      <section className="relative z-30 w-full border-t-2 border-black bg-cream">
        <div className="relative z-10 m-auto grid max-w-7xl grid-cols-2 gap-5 bg-transparent pt-24">
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
