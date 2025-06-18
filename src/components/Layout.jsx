import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const url1 = "../assets/bg-main.jpg";
  const url2 = "https://www.pixelstalk.net/wp-content/uploads/image10/Geometric-shapes-in-motion-dynamic-abstract-background-HD.jpg"
  
  return (
    <div className="flex flex-col min-h-screen bg-zinc-700 text-white font-kanit 
      bg-[url(https://media.idownloadblog.com/wp-content/uploads/2021/06/abstract-iphone-wallpaper-idownloadblog-saumil8200-space.jpg)] 
      bg-blend-soft-light bg-cover bg-center">
      <Navbar />
      <main className="container flex-grow mx-auto p-4">{children}</main>
      <Footer />
    </div>
  )
}