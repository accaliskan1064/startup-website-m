import Section from "../components/Section";
import {  stars, lines, habitat} from "../assets";
import Heading from "../components/Heading";

const pricing = [
    {
        title: "Energy Acquisition",
        description: "Chemosynthesis Over Photosynthesis: With sunlight absent beneath the ice, organisms have evolved to harness chemical energy from geological sources like hydrogen sulfide and methane.",
       
    },
    {
        title: "Structural Evolution",
        description: "Silicate-Based Exoskeletons: Offer protection against high pressure and mineral-rich environments.Flexible Morphologies: Enable movement and survival in varying pressure and temperature gradients.",
    },
    {
        title: "Reproductive Strategies",
        description: "Asexual Reproduction: Some microbes reproduce rapidly through binary fission, ensuring quick colonization of new vent sites.Symbiotic Transmission: Larger organisms pass symbiotic bacteria to offspring, ensuring the continuity of mutualistic relationships.",
       
    },
    {
        title: "Sensory Adaptations",
        description: "Enhanced Chemoreception: Allows organisms to detect and navigate chemical gradients essential for locating energy sources.Bioluminescent Communication: Facilitates mating, territory establishment, and coordination among species in the dark environment.",
       
    },
    {
        title: "Survival Mechanisms",
        description: "Redundancy in Energy Sources: Ability to switch between sulfur and methane metabolism based on availability.Dormancy States: Some organisms can enter dormant states during periods of low chemical activity, reviving when conditions improve.",
    },
];

const Kaptan = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={habitat} className="relative z-1" width={2550} height={2550} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading title="Adaptations and Evolutionary Strategies"  />

                <div className="relative">
                    <div className="flex gap-[1rem] max-lg:flex-wrap">
                        {pricing.map((item, i) => (
                            <div key={i} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                                <h4 className="h4 mb-4">{item.title}</h4>

                                <p className="body-2 min-h-[4rem] mb-3 text-white/100">{item.description}</p>

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
        </Section>
    );
};

export default Kaptan;
