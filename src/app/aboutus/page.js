import Nav from "@/app/components/navbarAbout"
import Footer from "@/app/components/footer"
import Image from "next/image"

export default function AboutUs() {
    return (
        <main>
            <Nav />
            <h1 class="font-semibold text-title text-center text-white text-7xl mt-10"> About Us</h1>

            <p class="font-semibold text-title text-center text-neutral-200 text-2xl mt-12"> Ai Explorer Description</p>

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
                <p className="absolute left-[370px] right-[300px] top-[70px] font-semibold text-title text-neutral-300 text-lg"> Description goes here. </p>
            </div>



            <Footer />
        </main>
    )
}