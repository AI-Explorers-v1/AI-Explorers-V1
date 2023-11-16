import Nav from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function Home() {

    return ( 
        <main class="bg-cosmos-picture">
            <Nav />
            <h1 class="font-semibold text-title text-center text-blue-700"> AI Explorers</h1>
            <p class ="font-mono text-xl text-center"> Creating AI-oriented opportunities within children around the world.</p>
            <Footer/>
        </main>
    )
}