// Services.tsx
import { FaPaintBrush, FaBullhorn, FaTint, FaVideo } from "react-icons/fa";

const Services = () => {
    return (
        <section className="relative bg-[#1b1b1f] text-white py-16">
            {/* Companies list - overlaps between Hero and Services */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[90%] md:w-3/4 bg-[#2a2a30] rounded-lg shadow-lg grid grid-cols-3 md:grid-cols-3 gap-6 p-6 text-center">
                <div className="flex flex-col items-center justify-center bg-[#1f1f25] rounded-lg py-3">
                    <h3 className="text-lg font-semibold">30+</h3>
                    <p className="text-sm text-gray-400">Clients</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#1f1f25] rounded-lg py-3">
                    <h3 className="text-lg font-semibold">5+</h3>
                    <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#1f1f25] rounded-lg py-3">
                    <h3 className="text-lg font-semibold">10+</h3>
                    <p className="text-sm text-gray-400">Projects</p>
                </div>
            </div>

            {/* Main services content */}
            <div className="container mx-auto px-6 mt-10">
                {/* <h2 className="text-3xl font-bold mb-12 text-center lg:text-left">
                    My Main Services
                </h2> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Service 1 */}
                    <div className="flex items-center justify-center bg-[#2a2a30] rounded-lg p-6 shadow hover:bg-[#34343a] transition">
                        <FaPaintBrush className="text-yellow-400 text-4xl mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Print Design</h3>
                            <p className="text-sm text-gray-400">Posters, flyers, and brochures</p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="flex items-center justify-center bg-[#2a2a30] rounded-lg p-6 shadow hover:bg-[#34343a] transition">
                        <FaBullhorn className="text-yellow-400 text-4xl mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Digital Marketing</h3>
                            <p className="text-sm text-gray-400">SEO, ads, and campaigns</p>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="flex items-center justify-center bg-[#2a2a30] rounded-lg p-6 shadow hover:bg-[#34343a] transition">
                        <FaTint className="text-yellow-400 text-4xl mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Branding</h3>
                            <p className="text-sm text-gray-400">Logo and brand identity</p>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="flex items-center justify-center bg-[#2a2a30] rounded-lg p-6 shadow hover:bg-[#34343a] transition">
                        <FaVideo className="text-yellow-400 text-4xl mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Video Editing</h3>
                            <p className="text-sm text-gray-400">Promotional and social videos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
