import Image from 'next/image'

export default function Grid() {
  const row = 2
  const num = 3
  return (
    <div className="">
      <Image
        className="absolute -top-[10px] h-[18px] w-[1920px] items-center justify-center"
        src="/hr.svg"
        height={18}
        width={1920}
      />
      <div className="absolute inset-0 -z-10">
        {[...Array(row)].map((e, i) => (
          <div key={i} className="flex w-full flex-wrap">
            {[...Array(num)].map((e, i) => (
              <>
                <span className=" box-outline aspect-square w-2/12  bg-teal" />
                <span className=" box-outline aspect-square w-2/12 bg-cream" />
              </>
            ))}
            {[...Array(num)].map((e, i) => (
              <>
                <span className=" box-outline aspect-square w-2/12 bg-cream" />
                <span className=" box-outline aspect-square w-2/12  bg-teal" />
              </>
            ))}
          </div>
        ))}
        <Image
          className="relative -top-[9px] h-[18px] w-[1920px] items-center justify-center"
          src="/hr.svg"
          height={18}
          width={1920}
        />
      </div>
    </div>
  )
}
