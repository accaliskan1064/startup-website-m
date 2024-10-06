import {  check, surface } from "../assets";
import Section from "../components/Section";

const collabContent = [
    {
        title: "In the Surface Layer the Ice Crust Thickness is ~1,500 kilometers composed of high-pressure ice polymorphs such as ice VII and ice X, which remain solid under extreme pressure. Embedded within the ice are pockets of saline brines, allowing for liquid water layers beneath.",
    },
    { title: "In the Ocean Layer the Ocean Depth is approximately 3,000 kilometers of liquid water beneath the ice crust.Temperature Gradient: Ranges from -30°C at the upper layers to 50°C near the hydrothermal vents.Salinity: Higher than Earth’s oceans, rich in dissolved minerals like magnesium sulfate, sodium chloride, and various sulfides." },
    { title: "Subsurface Ocean Stability's Heat Source is primarily from tidal heating due to gravitational interactions with Centauri R-2 and possible internal radioactive decay, maintaining the liquid state of the ocean." },
];


const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8"> Ice and Ocean Structure</h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item, i) => (
                            <li className="mb-3 py-3" key={i}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="" />
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                </div>
                                <img src={surface} width={1000} height={600} alt="NIGA"/>
            </div>
        </Section>
    );
};

export default Collaboration;
