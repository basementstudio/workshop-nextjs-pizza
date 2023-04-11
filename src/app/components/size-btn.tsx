export default function SizeButton({ size, selected }) {
  return (
    <>
      <button
        aria-selected={selected}
        className="flex text-cream justify-center text-center text-base font-display bg-black rounded-full border-2 border-cream aria-selected:bg-teal aria-selected:text-black hover:bg-teal items-center leading-trim w-12 h-12"
      >
        {size}
      </button>
    </>
  )
}
