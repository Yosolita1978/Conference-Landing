import Link from "next/link"
import Image from "next/image"

export default function Home() {

  return (
    <main className="flex-1 flex w-fit items-center justify-center">
    <section className="w-fit p-12">
      <div className="container ">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center">
            <div className="w-fit">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Tech Knowledge
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join us for a transformative tech conference filled with inspiring speakers, cutting-edge workshops,
                    and unparalleled networking opportunities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#d8761a] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Register Now
                  </Link>
                  <Link
                    href="/agenda"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-[#d8761a] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-800 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/hero.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
    </main>
  )
};
