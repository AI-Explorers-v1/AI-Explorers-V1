import Nav from "@/app/components/navbar"
import Footer from "@/app/components/footer"


export default function Home() {

    return ( 
        <main>
            <Nav />
            
            <div className="relative min-h-screen bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: "url('/images/Cluster11Picture.png')" }}>
                <div className="absolute inset-0 bg-[url('/images/Cluster11Picture.png')] bg-cover bg-opacity-50"></div>
                <div className="relative p-8">
                <h1 class="font-semibold text-title text-center text-white text-7xl mt-10 text-shadow"> AI Explorers</h1>
                <p class ="font-mono text-2xl text-center mt-12 text-shadow"> Creating AI-oriented opportunities within children around the world.</p>

                {/* Other content */}
                </div>
            </div>
            <Footer/>
        </main>
    )
}