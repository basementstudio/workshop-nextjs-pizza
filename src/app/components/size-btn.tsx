export default function SizeButton({
  size,
  selected
}: {
  size: string
  selected?: boolean
}) {
  return (
    <>
      <button
        aria-selected={selected}
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream bg-black text-center font-display text-base leading-trim text-cream hover:bg-teal aria-selected:bg-teal aria-selected:text-black"
      >
        {size}
      </button>
    </>
  )
}
