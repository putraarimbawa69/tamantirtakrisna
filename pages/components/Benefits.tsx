
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
};

const Benefit = ({ icon, title, description }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                    {icon}
                </div>
            </div>

            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
            <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                href={`contactus`}
            >
                <p>Pelajari lebih Lanjut</p>
            </AnchorLink>
        </motion.div>
    );
};


const benefits: Array<any> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Fasilitas yang lengkap",
        description:
            "Anda tidak perlu khawatir jika tidak membawa pakaian renang, makanan, minuman semua tersedia disini",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Kelas Renang",
        description:
            "Kami juga menyediakan kelas renang dari senin - sabtu dengan jadwal yang bisa anda sesuaikan",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Dilatih oleh Penyelam Profesional",
        description: "Banyak atlet profesional menyelesaikan pelatihannya di kolam renang kami",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};



const Benefits = () => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div>
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">LEBIH DARI SEKEDAR KOLAM RENANG.</h1>
                    <p className="my-5 text-sm">
                        Kami menyediakan peralatan renang kelas dunia, pelatihan dan kelas untuk
                        anda yang meningkatkan kemampuan renang anda. Kami menyediakan menyediakan pelayanan terbaik untuk para anggota.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: any) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <Image
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={'/assets/BenefitsPage.png'}
                        width={490}
                        height={553}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
                                        KELAS RENANG TAMAN TIRTA KRISNA
                                    </h1>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                            Ayo, mari kita bergabung di kelas renang "Taman Tirta Krisna"! Di sini, 
                            kamu akan menemukan petualangan air yang tak terlupakan dan kesempatan untuk menguasai keterampilan berenang. 
                            Kelas renang kami didukung oleh instruktur berpengalaman yang akan membantu kamu meningkatkan keahlianmu dalam berenang. 
                            Apakah kamu ingin belajar gaya bebas yang elegan, menguasai teknik dasar renang, 
                            atau bahkan melatih untuk menjadi atlet renang yang tangguh, semua itu bisa kamu dapatkan di sini. Selain itu, 
                            Taman Tirta Krisna menawarkan fasilitas renang yang lengkap dan aman, dengan kolam yang terawat dengan baik. 
                            </p>
                            <p className="mb-5">
                            Jadi, jangan lewatkan kesempatan ini! Bergabunglah sekarang dan rasakan kegembiraan dan kepuasan dalam menjelajahi dunia renang. 
                            Segera daftarkan dirimu di kelas renang "Taman Tirta Krisna" dan bersiaplah untuk memulai petualangan air yang luar biasa!
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <AnchorLink
                                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                    href={`contactus`}
                                >
                                    Bergabung Sekarang
                                </AnchorLink>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;
