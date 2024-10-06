import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { canlı4, gradient} from "../assets";

const roadmap = [
    {
        id: "0",
        title: "Bioluminescence",
        text: "Function: Facilitates communication, predation, and camouflage in the dark ocean depths. Implementation: Organisms possess luciferin-luciferase systems producing light in various colors and patterns.",
        colorful: true,
    },
    {
        id: "1",
        title: "Silicate Biomineralization",
        text: "Function: Provides structural strength and protection against high-pressure, mineral-rich waters. Implementation: Incorporation of silicate minerals into exoskeletons and body structures.",
        colorful: true,
    },
    {
        id: "2",
        title: "Chemoreception",
        text: "Function: Enhanced sensory systems to detect chemical gradients for locating energy sources. Implementation: Specialized chemoreceptors and neural networks enabling rapid response to chemical signals.",
        colorful: true,

    },
    {
        id: "3",
        title: "Thermal Tolerance",
        text: "Function: Ability to withstand temperature gradients from freezing upper layers to hot vent regions. Implementation: Proteins and enzymes adapted to function across a wide temperature range, cellular structures resistant to thermal stress.",
        colorful: true,

    },
    {
        id: "4",
        title: "High-Pressure Adaptations",
        text: "Function: Structural integrity and metabolic processes functioning under extreme pressure. Implementation: Flexible cellular membranes, pressure-resistant enzymes, and robust internal frameworks.",
        colorful: true,

    },
    {
        id: "5",
        title: "Symbiotic Relationships",
        text: "Function: Mutualistic interactions between hosts and symbiotic bacteria for energy acquisition. Implementation: Specialized organs or tissues housing symbiotic microbes, vertical transmission of symbionts. Mutualism: Sulfuric tubeworms harbor sulfur-oxidizing bacteria, exchanging organic nutrients for inorganic chemicals.Commensalism: Methane jellyfish provide habitat for smaller organisms without affecting them.Parasitism: Litho-leeches extract chemical energy from mineral deposits on their hosts, sometimes impacting host health.",
        colorful: true,

    },
];

const Roadmap = () => (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading title="Adaptations to Extreme Conditions" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) => {

                    return (
                        <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`} key={item.id}>
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="relative z-1">
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                        <img className="w-full" src={gradient} width={942} height={942} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button href="#roadmap">Our roadmap</Button>
            </div>
            <img src={canlı4} className="relative z-1" width={2550} height={2550} alt="" />
        </div>
    </Section>
);

export default Roadmap;
