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
        className="flex h-6 w-6 items-center justify-center rounded-full border border-cream bg-black text-center font-display text-[16px] leading-trim text-cream hover:bg-teal aria-selected:bg-teal aria-selected:text-black sm:h-10 sm:w-10 sm:text-2xl  xl:h-12 xl:w-12 xl:border-2 xl:text-base"
      >
        {size}
      </button>
    </>
  )
}
