
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Image from "next/image";



const HomePage = () => {

    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            // onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <Image alt="home-page-text" src={'/assets/HomePageText.png'} width={489} height={163} />
                            </div>
                        </div>

                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>

                    {/* ACTIONS */}
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <AnchorLink
                            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                            href={`contactus`}
                        >
                            Join Now
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* IMAGE */}
                <div
                    className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
                >
                    <img alt="home-pageGraphic" src={'/assets/HomePageGraphic.png'} width={575} height={628} />
                </div>
            </motion.div>
        </section>
    );
};

export default HomePage;
