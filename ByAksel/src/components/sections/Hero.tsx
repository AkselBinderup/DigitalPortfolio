import { ChevronDown } from "lucide-react";
import Iridescence from "../ui/Iridescence";

export const Hero = () => {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Iridescence
          color={[0.5, 0.6, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.7}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl flex flex-col gap-6">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight
                     [text-shadow:0_0_10px_rgba(0,0,0,0.3),0_0_25px_rgba(0,0,0,0.15)]"
        >
          Skaber pålidelige og moderne weboplevelser.{" "}
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-100 font-medium max-w-2xl mx-auto
                     [text-shadow:0_0_15px_rgba(0,0,0,0.25)]"
        >
          Jeg udvikler skræddersyede løsninger i React og .NET, der får din virksomhed til at skille sig ud – med fokus på hastighed, design og funktionalitet.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            onClick={scrollToWork}
            className="px-8 py-3 rounded-full bg-white text-[#1E293B] font-semibold 
                       hover:bg-[#f1f1f1] shadow-[0_0_15px_rgba(0,0,0,0.3)]
                       transition duration-300"
          >
            Se mit arbejde
          </button>

          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold 
                       hover:bg-white hover:text-[#1E293B] 
                       shadow-[0_0_12px_rgba(0,0,0,0.25)]
                       transition duration-300"
          >
            Kontakt mig
          </button>
        </div>
      </div>

      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition">
        <span className="text-xs uppercase tracking-widest text-gray-300 [text-shadow:0_0_8px_rgba(255,255,255,0.2)]">
          Se mere
        </span>
        <ChevronDown
          size={32}
          className="animate-bounce text-[#white] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  );
};
