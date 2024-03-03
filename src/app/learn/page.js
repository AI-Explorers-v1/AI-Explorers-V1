import Nav from "@/app/components/navbarEvents";
import Footer from "@/app/components/footer";
import SideNavbar from  "@/app/components/SideNavbar";

export default function Learn() {
    return (
        <main>
            <Nav />
            <div className="flex">
                <SideNavbar />
                <div className="flex-1">
                    <h1 className="font-semibold text-title text-center text-blue-700">Learn</h1>
                    {/* Add your Learn content here */}
                </div>
            </div>
            <Footer />
        </main>
    );
}
