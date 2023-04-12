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
        className="flex h-6 w-6 items-center justify-center rounded-full border md:border-2 border-cream bg-black text-center font-display text-[16px] md:text-base leading-trim text-cream hover:bg-teal aria-selected:bg-teal aria-selected:text-black md:h-12 md:w-12"
      >
        {size}
      </button>
    </>
  )
}
