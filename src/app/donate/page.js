import FullWidthNavbar from '@/app/components/FullWidthNavbar';
import Footer from "@/app/components/footer"

export default function Donate() {
    return (
        <main class = "bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            <FullWidthNavbar />
            <h1 class="font-semibold text-title text-center text-white text-7xl mt-24">Donate</h1>

            <div className="iframeContainer">
                <iframe src="https://hcb.hackclub.com/donations/start/ai-explorers" style={{border:'none',}} name="donateFrame" scrolling="yes" frameborder="0" marginheight="0px" marginwidth="0px" height="750px" width="512px" allowfullscreen></iframe>
            </div>
            <Footer />
        </main>
    )
}