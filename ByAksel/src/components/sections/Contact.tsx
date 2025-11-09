import ColorBends from "../ui/ColorBends";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-linear-to-b from-[#e9effa] via-[#eef3fa] to-[#fdfcfb] py-20"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-[#1E293B]">
            Kontakt
          </h2>
          <p className="mt-4 text-[#475569] max-w-2xl mx-auto text-lg sm:text-xl">
            Ønsker du at høre mere om, hvordan jeg kan hjælpe din virksomhed med at skabe moderne weboplevelser? 
            Tøv ikke med at tage kontakt – jeg ser frem til at høre fra dig!
          </p>
        </div>

        <div
          className="w-full rounded-3xl bg-white/40 backdrop-blur-xl border border-[#9AB3FF]/25
                     shadow-[0_10px_40px_rgba(155,180,255,0.25)] relative overflow-hidden p-8 sm:p-12"
        >
          <div className="absolute inset-0 -z-10">
            <ColorBends
              colors={["#00ffd1", "#8a5cff", "#ff5c7a"]}
              rotation={30}
              speed={0.25}
              scale={1.1}
              frequency={1.2}
              warpStrength={1.0}
              mouseInfluence={0.6}
              parallax={0.4}
              noise={0.05}
              transparent
            />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative z-10 flex flex-col gap-6 text-[#1E293B]"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#475569] mb-2"
                >
                  Navn
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Dit navn"
                  className="w-full rounded-lg bg-white/60 border border-[#9AB3FF]/30 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-[#0A9396]/40 text-[#1E293B]
                             placeholder:text-[#94a3b8] transition"
                  required
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#475569] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Din email"
                  className="w-full rounded-lg bg-white/60 border border-[#9AB3FF]/30 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-[#0A9396]/40 text-[#1E293B]
                             placeholder:text-[#94a3b8] transition"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#475569] mb-2"
              >
                Besked
              </label>
              <textarea
                id="message"
                placeholder="Skriv din besked her..."
                rows={5}
                className="w-full rounded-lg bg-white/60 border border-[#9AB3FF]/30 px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-[#0A9396]/40 text-[#1E293B]
                           placeholder:text-[#94a3b8] resize-none transition"
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-10 py-3 rounded-full bg-[#0A9396] text-white font-semibold 
                           hover:bg-[#FF6B35] shadow-[0_0_20px_rgba(10,147,150,0.4)] 
                           hover:shadow-[0_0_25px_rgba(255,107,53,0.4)] transition duration-300"
              >
                Send besked
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
