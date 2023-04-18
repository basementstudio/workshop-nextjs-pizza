import clsx from 'clsx'

export const SizeButton = ({
  size,
  selected,
  onClick,
  disabled
}: {
  size: string
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
}) => {
  return (
    <>
      <button
        type="button"
        className={clsx(
          selected && 'bg-teal text-black',
          'flex h-6 w-6 items-center justify-center rounded-full border border-cream bg-black text-center font-display text-[16px] leading-trim text-cream transition-colors ease-in disabled:opacity-30 sm:h-10 sm:w-10 sm:text-2xl xl:h-12 xl:w-12 xl:border-2 xl:text-base better-hover:hover:bg-teal'
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {size}
      </button>
    </>
  )
}
