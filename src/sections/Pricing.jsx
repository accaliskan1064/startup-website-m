import Section from "../components/Section";
import {  stars, lines, piramit, canlı, canlı3} from "../assets";
import Heading from "../components/Heading";

const pricing = [
    {
        title: "Primary Producers: Chemosynthetic Microbes",
        description: "Methanotrophic Bacteria (Methanos Thalassia)",
        detail: "Role: Primary producers converting methane into organic matter. Adaptations: Enzyme systems specialized for methane oxidation, thriving in high-methane environments near seep areas.",
        features: ["Sulfur-Oxidizing Bacteria (Sulfuris Thalassia)"],
        detail2: "Role: Primary producers utilizing hydrogen sulfide from hydrothermal vents.Adaptations: Possess sulfide-oxidizing enzymes, forming dense mats around vents.",
    },
    {
        title: "Primary Consumers: Grazers and Filter Feeders",
        description: "Sulfuric Tubeworms (Tubeworma sulfatis)",
        detail:"Appearance: Long, tube-like structures composed of mineralized tissue, housing symbiotic sulfur-oxidizing bacteria. Function: Filter feeders deriving energy from symbiotic bacteria, forming the backbone of vent communities.",
        features: ["Methane Jellyfish (Gelatinaria methanea)"],
        detail2: "Appearance: Transparent, gelatinous bodies with gas-filled bladders for buoyancy. Function: Drift near methane seeps, absorbing methane directly through membranes for energy.",
    },
    {
        title: "Secondary Consumers: Small Predatory Species",
        description: "Crystalline Fish (Crystallus piscis)",
        detail: "Appearance: Fish-like with silicate-based exoskeletons that reflect and refract light from bioluminescent organisms. Function: Predatory species feeding on primary consumers, utilizing mineralized armor for defense.",
        features: ["Litho-Leeches (Leechus lithonus)"],
        detail2: "Appearance: Small, elongated parasitic organisms with adhesive suckers. Function: Attach to larger hosts, siphoning chemical energy from mineral deposits on their surfaces.",
    },
    {
        title: "Tertiary Consumers: Apex Predators",
        description: "Abyssal Serpents (Serpens abyssalis)",
        detail: "Appearance: Large, serpentine predators with bioluminescent markings for communication and camouflage. Function: Apex predators maintaining population balance among mid-level consumers.",
        features: ["Mineral Sharks (Chondrus mineralis)"],
        detail2: "Appearance: Shark-like creatures with crystalline tooth structures and mineral-encrusted skin. Function: Top-tier predators preying on abyssal serpents and crystalline fish.",
    },
    {
        title: "Decomposers: Detritivores and Scavengers",
        description: "Mineral Detritus Worms (Detritus vermis mineralis)",
        detail:"Appearance: Segmented worms with mineral deposits along their bodies. Function: Decompose dead organic matter, recycling nutrients back into the ecosystem.",
        features: ["Bio-Calcifying Scavengers (Calcifera scavenges)"],
        detail2: "Appearance: Small crustaceans with calcified shells. Function: Scavenge dead organisms, aiding in nutrient cycling and maintaining ecosystem health.",
    },
];

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={piramit} className="relative z-1" width={2550} height={2550} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading tag="Thalassia’s ecosystem is a marvel of chemosynthetic life, intricately woven through its geological and chemical landscape." title="Biosphere and Ecosystem"  />

                <div className="relative">
                    <div className="flex gap-[1rem] max-lg:flex-wrap">
                        {pricing.map((item, i) => (
                            <div key={i} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                                <h4 className="h4 mb-4">{item.title}</h4>

                                <p className="body-2 min-h-[4rem] mb-3 text-white/100">{item.description}</p>
                                <p className="body-2-min-h-[4rem] mb-3 text-white/50">{item.detail}</p>

                                <ul>
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-start py-5 border-t border-n-6">
                                            <p className="body-2 ml-4">{feature}</p>
                                        </li>
                                    ))}
                                </ul>

                                <p className="body-2-min-h-[4rem] mb-3 text-white/50">{item.detail2}</p>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                </div>
            </div>
            <img src={canlı} className="relative z-1" width={1500} height={1250} alt="" /> 
            <img src={canlı3} className="relative z-1" width={1500} height={1250} alt="" /> 
        </Section>
    );
};

export default Pricing;
