import Nav from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Image from "next/image"

export default function AboutUs() {
    return (
        <main>
            <Nav />
            <h1 class="font-semibold text-title text-center text-white text-7xl mt-24"> About Us</h1>

            {/* <p class="font-semibold text-title text-center text-neutral-200 text-2xl mt-12"> Ai Explorer Description</p> */}

            <div className="relative mt-32 ml-48"> {/*Alex Description*/}
                <Image 
                    src={"/images/placeholder.png"}
                    alt="Description of the image"
                    width={300}
                    height={500}
                    layout="fixed"
                />
                
                <h3 className="absolute left-[370px] top-0 font-semibold text-title text-white text-5xl"> Alex Cismaru </h3>
                <p className="absolute left-[370px] right-[300px] top-[70px] font-semibold text-title text-neutral-300 text-lg"> Hey everyone! My name is Alex and I am one of the co-founders for AI Explorers. I am currently a junior at Homestead High School in Cupertino. I am super passionate about all things tech and computer science related and am super intrigued by Artificial Intelligence and its capabilities. In my free time, I love to play tennis and piano and enjoy hang out with friends. </p>
            </div>

            <div className="relative mt-32 ml-48"> {/*Eric Description*/}
                <Image 
                    src={"/images/placeholder.png"}
                    alt="Description of the image"
                    width={300}
                    height={500}
                    layout="fixed"
                />
                
                <h3 className="absolute left-[370px] top-0 font-semibold text-title text-white text-5xl"> Eric Liu </h3>
                <p className="absolute left-[370px] right-[300px] top-[70px] font-semibold text-title text-neutral-300 text-lg"> Hi all! My name is Eric and I'm extremely proud to be one of the Co-Founders of AI Explorers. I am an uncoming senior at San Mateo High School. Innovation is something that I am truly inspired by and has led me to organize the first Hackathon at my school and other clubs. Some of my hobbies include water polo, working out, and camping.</p>
            </div>



            <Footer />
        </main>
    )
}