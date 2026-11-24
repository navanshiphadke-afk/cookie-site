const photos = {
  hero: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=90",
  classic: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
  seaSalt: "https://images.unsplash.com/photo-1634188023615-7e08901193b6?auto=format&fit=crop&w=900&q=85",
  double: "https://images.unsplash.com/photo-1557310717-d6bea9f36682?auto=format&fit=crop&w=900&q=85",
  story: "https://images.unsplash.com/photo-1639678111962-88fffeb071cb?auto=format&fit=crop&w=1100&q=85",
}

const cookies = [
  { name: "The Classic", description: "Brown butter, dark chocolate chunks, and a soft, golden center.", price: "$18", image: photos.classic, tag: "Bestseller" },
  { name: "Sea Salt & Chunk", description: "Extra-dark chocolate finished with flaky Maldon sea salt.", price: "$20", image: photos.seaSalt, tag: "Crowd favorite" },
  { name: "Double Chocolate", description: "Deep cocoa dough with pools of milk and dark chocolate.", price: "$20", image: photos.double, tag: "For chocoholics" },
]

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F1E7] text-[#2B160D]">
      <div className="bg-[#2B160D] px-5 py-2.5 text-center text-xs font-semibold tracking-[0.12em] text-[#FFF8EC] uppercase">
        Free shipping on boxes of 12 or more
      </div>

      <header className="border-b border-[#2B160D]/15">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <span className="font-display text-[1.7rem] leading-none tracking-[-0.04em]">Crumb & Co.</span>
          <span className="text-xs font-bold tracking-[0.18em] uppercase">Scroll for cookies</span>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-10 pt-8 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-12 lg:pb-16 lg:pt-12">
        <div className="rise order-2 max-w-xl py-4 lg:order-1 lg:py-12">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase">
            <span className="h-px w-8 bg-[#2B160D]" />
            Small batch. Big joy.
          </p>
          <h1 className="font-display text-[clamp(3.8rem,8vw,7.7rem)] leading-[0.82] tracking-[-0.065em]">
            The cookie
            <span className="block italic text-[#A74424]">you remember.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-[#2B160D]/70 sm:text-lg">
            Crisp at the edges, wonderfully gooey in the middle, and packed with chocolate in every bite. Baked fresh, just like home.
          </p>
          <div className="mt-9">
            <div className="text-[#A74424]" aria-label="5 out of 5 stars">★ ★ ★ ★ ★</div>
            <p className="mt-0.5 text-xs font-semibold">Loved by 4,000+ snackers</p>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="badge absolute -left-5 -top-5 z-10 hidden size-28 items-center justify-center rounded-full bg-[#E7B84B] text-center text-xs font-black leading-4 tracking-wider uppercase lg:flex">
            Baked<br />today
          </div>
          <div className="hero-clip relative h-[56vh] min-h-[420px] overflow-hidden bg-[#DDBF9A] lg:h-[690px]">
            <img src={photos.hero} alt="Freshly baked chocolate chip cookies stacked on a cooling rack" className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B160D]/35 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-7 max-w-56 font-display text-2xl leading-tight text-white">
              Made with really good butter & even better chocolate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F1DFC7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#A74424] uppercase">Pick your pleasure</p>
              <h2 className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-6xl">Cookies with character.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#2B160D]/65">
              Six generously sized cookies per box. Wrapped up pretty and delivered fresh to your door.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {cookies.map((cookie, index) => (
              <article key={cookie.name} className={`group ${index === 1 ? "md:-translate-y-4" : ""}`}>
                <div className="relative aspect-[4/4.7] overflow-hidden rounded-[2rem] bg-[#C99B6D]">
                  <img src={cookie.image} alt={`${cookie.name} chocolate chip cookies`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FFF8EC] px-4 py-2 text-[0.68rem] font-bold tracking-wider uppercase">{cookie.tag}</span>
                </div>
                <div className="flex items-start justify-between gap-4 px-2 pt-5">
                  <div>
                    <h3 className="font-display text-3xl tracking-[-0.03em]">{cookie.name}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-[#2B160D]/65">{cookie.description}</p>
                  </div>
                  <p className="pt-2 text-sm font-bold">{cookie.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[#A74424] text-[#FFF8EC] lg:grid-cols-2">
        <div className="min-h-[500px] lg:min-h-[720px]">
          <img src={photos.story} alt="Chocolate chip cookies being prepared with a wooden spoon" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-7 py-20 sm:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-bold tracking-[0.18em] text-[#F2C969] uppercase">Our not-so-secret recipe</p>
            <h2 className="font-display text-[clamp(3.2rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.055em]">
              Good things take
              <span className="block italic text-[#F2C969]">a little time.</span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-[#FFF8EC]/75">
              We brown the butter, rest the dough for 24 hours, and bake in tiny batches all day long. No shortcuts, no mystery ingredients. Just the kind of cookie that makes you close your eyes after the first bite.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-5 border-t border-white/25 pt-8">
              <div><strong className="font-display text-4xl">24h</strong><p className="mt-1 text-xs text-white/65">Dough rest</p></div>
              <div><strong className="font-display text-4xl">72%</strong><p className="mt-1 text-xs text-white/65">Dark chocolate</p></div>
              <div><strong className="font-display text-4xl">0</strong><p className="mt-1 text-xs text-white/65">Weird stuff</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2B160D] px-5 py-20 text-[#FFF8EC] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-[#E7B84B]" aria-label="5 out of 5 stars">★ ★ ★ ★ ★</p>
          <blockquote className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.5rem,5vw,5.2rem)] leading-[1.02] tracking-[-0.045em]">
            “The perfect ratio of crisp edge to soft middle. I hid the last one from my husband.”
          </blockquote>
          <p className="mt-7 text-xs font-bold tracking-[0.16em] text-white/55 uppercase">Nina R., verified cookie person</p>
        </div>
      </section>

      <footer className="bg-[#F8F1E7] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-b border-[#2B160D]/15 pb-10">
          <span className="font-display text-4xl tracking-[-0.04em]">Crumb & Co.</span>
          <p className="text-sm text-[#2B160D]/60">Baked with patience in Brooklyn.</p>
        </div>
        <div className="mx-auto flex max-w-[1400px] justify-between pt-6 text-[0.7rem] text-[#2B160D]/45">
          <p>© 2026 Crumb & Co.</p>
          <p>Made for good days.</p>
        </div>
      </footer>
    </main>
  )
}
