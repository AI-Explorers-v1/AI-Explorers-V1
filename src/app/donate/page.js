import FullWidthNavbar from '@/app/components/FullWidthNavbar';
import Footer from "@/app/components/footer";

export default function Donate() {
  return (
    <main className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative">
      <FullWidthNavbar />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <h1 className="font-semibold text-title text-center text-white text-7xl mt-24">Donate</h1>
      <div className="iframeContainer">
        <iframe 
          src="https://hcb.hackclub.com/donations/start/ai-explorers" 
          style={{ border: 'none' }} 
          name="donateFrame" 
          scrolling="yes" 
          frameBorder="0" 
          marginHeight="0px" 
          marginWidth="0px" 
          height="750px" 
          width="512px" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
