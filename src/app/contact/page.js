import Nav from "@/app/components/navbar"
import FullWidthNavbar from '@/app/components/FullWidthNavbar';
import Footer from "@/app/components/footer"

export default function Contact() {
    return (
        <main class = "bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            <FullWidthNavbar />
            <h1 class="mt-24 font-semibold text-title text-center text-blue-700"> Contact</h1>
            <Footer />
        </main>
    )
}