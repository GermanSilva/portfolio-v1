import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {  
  return (
    <div className="flex flex-col min-h-screen bg-zinc-700 text-white font-kanit 
      bg-[url(../assets/bg.jpg)] 
      bg-blend-soft-light bg-cover bg-center">
      <Navbar />
      <main className="container flex-grow mx-auto p-4">{children}</main>
      <Footer />
    </div>
  )
}