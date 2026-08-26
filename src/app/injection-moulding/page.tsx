import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import Image from "next/image";
import { RiStackFill } from "react-icons/ri";


const MouldIcon = ({ filled = false }: { filled: boolean }) => {
    if (!filled) {
        return <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9229 3.68444C20.9091 3.99344 20.793 4.28385 20.5995 4.48878L18.9663 6.21845C18.7599 6.43706 18.6416 6.75291 18.6416 7.08486V10.1008C18.6416 10.4146 18.7474 10.715 18.9345 10.9321L20.6313 12.9001C20.8184 13.1173 20.9242 13.4176 20.9242 13.7315V21.1012L20.9231 21.159C20.9111 21.4473 20.81 21.7206 20.6389 21.9236L18.9269 23.9541C18.7444 24.1707 18.6416 24.4671 18.6416 24.7765V27.7008C18.6416 28.0235 18.7535 28.3314 18.95 28.5495L20.6159 30.3979C20.8123 30.6159 20.9242 30.9238 20.9242 31.2465V33.3882H32.7178C33.243 33.3882 33.6689 32.8727 33.6689 32.2368V2.76316C33.6689 2.1273 33.243 1.61184 32.7178 1.61184V0C33.9784 0 35.0004 1.23711 35.0004 2.76316V32.2368C35.0004 33.7629 33.9784 35 32.7178 35H19.5927V31.4491L18.0503 29.7377C17.5787 29.2143 17.3101 28.4753 17.3101 27.7008V24.7765C17.3101 24.034 17.5569 23.3227 17.995 22.803L19.5927 20.9076V13.9278L18.0133 12.0958C17.5641 11.5746 17.3101 10.854 17.3101 10.1008V7.08486C17.3101 6.28813 17.5942 5.5302 18.0895 5.00553L19.5927 3.41302V0H32.7178V1.61184H20.9242V3.62237L20.9229 3.68444Z" fill="black" />
            <path d="M14.0762 31.4491L12.5338 29.7377C12.0622 29.2143 11.7936 28.4753 11.7936 27.7008V24.7765C11.7936 24.034 12.0404 23.3227 12.4785 22.803L14.0762 20.9076V13.9278L12.4968 12.0958C12.0476 11.5746 11.7936 10.854 11.7936 10.1008V7.08486C11.7936 6.28813 12.0777 5.5302 12.573 5.00553L14.0762 3.41302V1.61184H2.28262V0H15.4077V4.14429L13.45 6.21845C13.2436 6.43708 13.1251 6.75294 13.1251 7.08486V10.1008C13.1251 10.4146 13.231 10.7149 13.4182 10.9321L15.4077 13.2399V21.5849L13.4104 23.9541C13.2279 24.1706 13.1251 24.4671 13.1251 24.7765V27.7008C13.1251 28.0235 13.2371 28.3314 13.4336 28.5495L15.4077 30.7401V35H2.28262C1.02197 35 0 33.7629 0 32.2368V2.76316C0 1.23711 1.02197 0 2.28262 0V1.61184C1.75735 1.61184 1.33153 2.1273 1.33153 2.76316V32.2368C1.33153 32.8727 1.75735 33.3882 2.28262 33.3882H14.0762V31.4491Z" fill="black" />
        </svg>

    }
    return <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.9382 0H33.8012C34.4632 0 34.9999 0.567755 34.9999 1.26812V33.7319C34.9999 34.4322 34.4632 35 33.8012 35H18.9382V32.6412C18.9382 32.2857 18.7972 31.9466 18.5495 31.7064L16.4502 29.6704C16.2025 29.4302 16.0615 29.0911 16.0615 28.7356V25.5147C16.0615 25.1739 16.1912 24.8475 16.4212 24.609L18.5786 22.3722C18.8086 22.1337 18.9382 21.8073 18.9382 21.4665V17.5V13.3491C18.9382 13.0034 18.8048 12.6727 18.5689 12.4335L16.4308 10.2657C16.1949 10.0265 16.0615 9.69584 16.0615 9.35016V6.02833C16.0615 5.66265 16.2107 5.31477 16.4708 5.07398L18.5289 3.16878C18.789 2.92798 18.9382 2.5801 18.9382 2.21442V0Z" fill="black" />
        <path d="M16.0616 0V2.2145C16.0616 2.58012 15.9125 2.92802 15.6524 3.1688L13.5941 5.07395C13.3341 5.31473 13.1849 5.66263 13.1849 6.02826V9.35013C13.1849 9.6958 13.3182 10.0266 13.5541 10.2658L15.6925 12.4335C15.9283 12.6727 16.0616 13.0035 16.0616 13.3491V21.4666C16.0616 21.8073 15.9321 22.1338 15.7021 22.3723L13.5445 24.6089C13.3145 24.8474 13.1849 25.1739 13.1849 25.5146V28.7357C13.1849 29.0911 13.3259 29.4303 13.5735 29.6704L15.673 31.7064C15.9207 31.9465 16.0616 32.2857 16.0616 32.6411V35H1.19863C0.536645 35 0 34.4322 0 33.7319V1.26812C0 0.567755 0.536645 0 1.19863 0H16.0616Z" fill="black" />
    </svg>

}

export default function Injection() {

    const keyHighlights = [
        { title: "90-2800 Tons", subtitle: "Injection moulding machine range" },
        { title: "2800 Tons", subtitle: "Maximum machine capacity" },
        { title: "3 Facilities", subtitle: "Manufacturing infrastructure" },
        { title: "45+ Professionals", subtitle: "Engineering and plant operations team" },
    ]

    const advantages = [
        { title: "Capacity", subtitle: "High-Capacity Moulding", description: "Our machine portfolio extends up to 2800 tons, enabling production of large and complex injection-moulded components." },
        { title: "Flexibility", subtitle: "A Wide Range of Machine Sizes", description: "From 90-ton machines to high-capacity 2800-ton equipment, our range supports varied component and production requirements." },
        { title: "Production", subtitle: "Built for High-Volume Manufacturing", description: "Our manufacturing infrastructure is designed to support demanding production volumes for automotive, HVAC, white goods, and industrial applications." },
        { title: "Expertise", subtitle: "Experienced Engineering & Operations", description: "A team of 45+ professionals, including managers, engineers, and supervisors, supports plant operations and OEM-tailored requirements." },
         
       
    ]

    return (
        <main className="min-h-screen w-full flex flex-col overflow-x-hidden">
            <Header />
            <Hero />
            <Section>
                <div className="flex flex-col gap-16">
                    <div
                        className="bg-black w-full h-120"
                        style={{
                            WebkitMaskImage: "url('/CtaBanner.png')",
                            maskImage: "url('/CtaBanner.png')",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskPosition: "right",
                            maskPosition: "right",
                        }}
                    />
                    <div className="flex flex-row justify-between items-start ">
                        <div className="max-w-lg">
                            <h4 className="text-fluid-40 font-bold leading-none text-text-primary">
                                High-Capacity Injection
                                Moulding for
                                <span className="text-primary lg:block">
                                    Demanding Applications
                                </span>
                            </h4>

                        </div>
                        <div className="max-w-[35%] font-ce text-fluid-16 text-text-para text-right leading-snug">
                            <p>
                                SBB Mouldings provides high-capacity injection moulding solutions for automotive, HVAC, white goods, and industrial applications.
                                With machines ranging from 90 tons to 2800 tons, multiple manufacturing facilities, and experienced engineering and operations teams, we support diverse component requirements from production to high-volume manufacturing.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section disablePaddingY>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col max-w-[37%] gap-8 text-text-para">
                        <div className="">
                            <p className="text-fluid-24 font-neue text-text-primary font-normal">Advanced Injection Moulding Solutions</p>
                            <h4 className="text-fluid-40 font-neue max-w-md text-text-primary leading-none font-semibold" >Built for Precision.
                                Ready for Scale.</h4>
                        </div>
                        <p className="font-ce text-fluid-16">Our injection moulding operations combine high-capacity machinery, experienced professionals, and dedicated manufacturing infrastructure to produce reliable plastic components for demanding industrial applications.</p>
                        <p className="font-ce text-fluid-16">From large injection-moulded automotive parts to components for air conditioning and white goods, our broad machine range provides the flexibility to support different component sizes and production requirements.</p>
                        <div className="flex flex-col gap-6">
                            <h5 className="text-fluid-24 font-semibold text-text-primary">Key Highlights</h5>
                            <div className="flex flex-col gap-8">
                                {keyHighlights.map(hlt => <div key={hlt.title} className="flex flex-row gap-6 items-start">
                                    <div>
                                        <MouldIcon filled />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="leading-none font-bold text-fluid-24">{hlt.title}</h5>
                                        <p className="text-fluid-16 text-text-para">{hlt.subtitle}</p>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className="object-contain overflow-hidden rounded-3xl shadow-black/50 shadow-lg max-w-[42%]">
                        <Image height={1080} width={1920} src={"/injection-moulding/milling-machine.jpg"} className="h-210" alt="machine" />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-col gap-6">
                    <div className="">
                        <p className="font-neue text-fluid-24">Injection Moulding Advantages</p>
                        <h4 className="leading-none font-neue text-fluid-40 font-bold">Injection Moulding Advantages</h4>
                    </div>
                    <div className="grid lg:grid-cols-4 lg:gap-6 lg:mt-8 mt-4">
                        {[...advantages,].map(item => <AdvantageCard key={item.title} {...item} />)}
                    </div>
                </div>
            </Section>
        </main>
    )
}


const AdvantageCard = ({
    title,
    description,
    subtitle,
}: {
    title: string;
    subtitle: string;
    description: string;
}) => {
    return (
        <div
            className="group relative w-full overflow-hidden lg:h-125 h-100 rounded-4xl bg-white text-text-primary transition-colors duration-300 hover:text-primary-foreground"
            style={{
                boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
            }}
        >
            {/* Hover gradient */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #569FF2, #0057B8)",
                }}
            />

            {/* Monotone noise */}
            <div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-25"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="relative z-20 mx-auto flex h-full max-w-[80%] flex-col gap-6 pt-6 font-neue">
                <RiStackFill className="size-30" />

                <h5 className="text-fluid-40 font-bold leading-none">
                    {title}
                </h5>

                <p className="text-fluid-24 leading-none">
                    {subtitle}
                </p>

                <p className="text-fluid-16 font-ce leading-snug">
                    {description}
                </p>
            </div>
        </div>
    );
};