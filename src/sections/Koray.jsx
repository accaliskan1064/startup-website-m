import Heading from "../components/Heading";
import Section from "../components/Section";
import ClipPath from "../assets/svg/ClipPath";

const benefits = [
    {
        title: "Nutrient Cycling:",
        text: "Geological Inputs: Hydrothermal vents and hydrocarbon seeps continuously supply chemicals like H₂S and CH₄.Biological Recycling: Decomposers break down dead matter, returning nutrients to the environment for reuse by primary producers.Mineral Redistribution: Silicate and mineral-rich organisms contribute to the distribution and recycling of essential elements.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
    },
    {
        title: "Habitat Formation:",
        text: "Hydrothermal Vents: Create localized ecosystems, providing niches for various life forms.Silicate Structures: Offer shelters and breeding grounds for fish and predatory species.Mineral Deposits: Influence the distribution of chemical energy sources, shaping the spatial dynamics of the ecosystem.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        light: true,
    },
    {
        title: "Energy Flow:",
        text: "Primary Producers: Convert chemical energy into biomass.Consumers: Transfer energy through trophic levels, from grazers to apex predators.Decomposers: Ensure the continuous recycling of nutrients, maintaining ecosystem sustainability.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",

    },
];

const Koray = () => {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="Ecological Interactions" />

                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item, i) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={i}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                            </div>

                            {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}

                            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">{item.imageUrl && <img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover" />}</div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Koray;
