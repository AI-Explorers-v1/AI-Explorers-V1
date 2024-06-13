import Nav from "@/app/components/navbar"
import Footer from "@/app/components/footer"


export default function Home() {

    return ( 
        <main>
            <Nav />
            
            <div className="relative min-h-screen bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: "url('/images/Cluster11Picture.png')" }}>
                <div className="absolute inset-0 bg-[url('/images/s_back.jpg')] bg-cover bg-opacity-50"></div>
                <div className="relative p-8">
                <h1 class="font-semibold text-title text-center text-white text-7xl mt-10 text-shadow"> AI Explorers</h1>
                <p class ="font-mono text-2xl text-center mt-12 text-shadow">At AI Explorers, our mission is to bridge the educational divide by empowering underprivileged communities with the knowledge and skills in Artificial Intelligence and Machine Learning. We are dedicated to providing accessible, high-quality education that inspires innovation, fosters creativity, and equips individuals with the tools needed to thrive in the evolving technological landscape. By democratizing AI education, we aim to unlock potential, promote inclusivity, and drive positive change through the transformative power of technology.</p>

                {/* Other content */}
                </div>
            </div>
            <Footer/>
        </main>
    )
}