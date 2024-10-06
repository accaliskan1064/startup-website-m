import Section from "../components/Section";
import Heading from "../components/Heading";
import {  check, gradient, seep, subduction, yüzey } from "../assets";


const Services = () => {
    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading title="Geological Features" text="" />

                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-white/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img src={yüzey}className="w-full h-full object-cover md:object-right" width={800} alt="" height={730} />
                        </div>

                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="h4 mb-4">Geological Features</h4>
                            <ul className="body-2">
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Mid-Ocean Ridges: Extensive underwater mountain ranges where tectonic plates diverge, facilitating volcanic activity and the formation of hydrothermal vents.</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Hydrothermal Vent Fields: Scattered across the ocean floor, these vents emit superheated, mineral-rich fluids containing hydrogen sulfide, methane, and other compounds essential for chemosynthesis.</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Subduction Zones: Areas where tectonic plates converge, recycling minerals and maintaining the chemical equilibrium necessary for sustaining the biosphere.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-white/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img src={seep} className="h-full w-full object-cover" width={630} height={750} alt="" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Mineral-Rich Hydrocarbon Seeps: </h4>
                                <p className="body-2 mb-[3rem] text-n-3">Locations where hydrocarbons seep from the ocean floor, providing additional chemical energy sources for life forms.</p>
                            </div>
                        </div>

                        <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Silicate Formations:</h4>
                                <p className="body-2 mb-[2rem] text-n-3"> Abundant silicate structures resulting from volcanic activity, serving as habitats for various marine species.</p>
                            </div>

                            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img src={subduction} className="w-full h-full object-cover" width={520} height={400} alt="" />
                                <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
                        <img className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2" src={gradient} width={1417} height={1417} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Services;
