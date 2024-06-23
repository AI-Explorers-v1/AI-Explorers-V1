import Nav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";

export default function AboutUs() {
    return (
        <main className="bg-gray-900 text-white min-h-screen">
            <Nav />
            <div className="container mx-auto px-4 py-16">
                <h1 className="font-semibold text-7xl text-center mb-12 mt-12">About Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="relative flex flex-col items-center">
                        <Image
                            src={"/images/Alex_Headshot.png"}
                            alt="Alex Cismaru"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg mb-6"
                        />
                        <h3 className="font-semibold text-5xl mb-4 text-center">Alex Cismaru</h3>
                        <p className="text-neutral-300 text-lg text-center px-6">
                            Hey everyone! My name is Alex and I am one of the co-founders for AI Explorers. I am currently a junior at Homestead High School in Cupertino. I am super passionate about all things tech and computer science related and am super intrigued by Artificial Intelligence and its capabilities. In my free time, I love to play tennis and piano and enjoy hanging out with friends.
                        </p>
                    </div>

                    <div className="relative flex flex-col items-center">
                        <Image
                            src={"/images/Eric_headshot.png"}
                            alt="Eric Liu"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg mb-6"
                        />
                        <h3 className="font-semibold text-5xl mb-4 text-center">Eric Liu</h3>
                        <p className="text-neutral-300 text-lg text-center px-6">
                            Hi all! My name is Eric and I'm extremely proud to be one of the Co-Founders of AI Explorers. I am an upcoming senior at San Mateo High School. Innovation is something that I am truly inspired by and has led me to organize the first Hackathon at my school and other clubs. Some of my hobbies include water polo, working out, and camping.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
