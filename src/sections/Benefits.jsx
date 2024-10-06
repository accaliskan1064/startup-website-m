import Heading from "../components/Heading";
import Section from "../components/Section";
import ClipPath from "../assets/svg/ClipPath";

const benefits = [
    {
        title: "Star System and Distance:",
        text: "Centauri R-2 is a red dwarf star of spectral type M5V, significantly smaller and cooler than our Sun. With a mass and radius each about 20% of the Sun’s, it emits only 1% of the Sun’s luminosity, making it a faint star. Despite its low energy output, its long lifespan  provides a stable environment for planetary systems. Like many red dwarfs, Centauri R-2 burns its fuel slowly, remaining active for potentially trillions of years. Its low luminosity means any habitable planets must orbit close to the star to receive enough warmth, positioning it as a star that could potentially support long-term planetary evolution.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
    },
    {
        title: "Planet Thalassia-1b:",
        text: "Thalassia-1b is a terrestrial planet with a diameter of 14,000 kilometers, making it about 1.4 times larger than Earth. Despite its larger size, its mass—4.5 × 10²⁴ kg—is comparable to Earth's, giving it a similar surface gravity of 9.4 m/s², which would make it feel familiar to humans. Orbiting its host star, Centauri R-2, at a distance of 0.3 astronomical units (AU), Thalassia-1b completes an orbit every 120 Earth days, resulting in a relatively short year. The planet has a 30-hour rotation period, leading to a day-night cycle of 15 hours each. With an axial tilt of only 5 degrees, the planet experiences minimal seasonal variation, suggesting a stable climate throughout the year.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        light: true,
    },
    {
        title: "Atmospheric Composition",
        text: "Thalassia-1b's atmosphere is dense and multi-layered, dominated by 65% nitrogen (N₂) with significant levels of methane (CH₄) at 15% and hydrogen sulfide (H₂S) at 10%, contributing to a potent greenhouse effect despite the planet’s frigid temperatures. Argon (Ar) makes up 5%, while carbon dioxide (CO₂) accounts for 3%, with trace amounts of ammonia (NH₃) and neon (Ne) present at less than 2%. The atmospheric pressure at the surface is about 1.2 times that of Earth, which helps stabilize liquid water beneath a thick ice layer. Surface temperatures average around -50°C (-58°F), but the planet’s atmosphere, particularly the methane and hydrogen sulfide, traps enough heat to prevent it from becoming even colder, allowing for potential subsurface liquid water.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",

    },
];

const Benefits = () => {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="Planetary Overview" />

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

export default Benefits;
