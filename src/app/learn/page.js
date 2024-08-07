import Nav from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import SideNavbar from  "@/app/components/SideNavbar";

export default function Learn() {
    return (
        <main>
            <SideNavbar />
            <Nav />
        <div className="learn-page">
            <div className="flex">
                    <div className="flex-1">
                        <h1 className="mt-24 font-semibold text-title text-center text-blue-700">Learn</h1>
                        {/* Add your Learn content here */}
                        <p>This is your Learn page content.</p>
                    </div>
            </div>
            </div>
            <Footer />
        </main>
    );
}
