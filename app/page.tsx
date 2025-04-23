import Footer from '@/components/footer'
import LinkCard from '@/components/link-card'
import Products from '@/components/products'

export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <div className="w-full bg-linear-123 from-[#FFE373] via-[#F4C09F] to-[#DC73FF] py-4 px-5 text-white/70">
        <header className=" flex justify-end px-4 ">
          <div className="flex gap-4">
            <span>
              <a href="https://blog.bijon.ai">Blog</a>
            </span>
            <span>
              <a href="https://bijon.ai">中文</a>
            </span>
          </div>
        </header>
        <div className="container mx-auto">
          <div className="pt-8 pb-32">
            <div className="">
              <div className="text-7xl font-bold">BijonAI</div>
              <div className="text-2xl pt-6">
                To <span className="underline">Innovate</span> the AI technology
                with <span className="underline">CREATIVITY</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-24 max-w-4xl">
              <a href="https://bijon.ai">
                <LinkCard
                  title="EchoAI"
                  description="Explore knowledges with your own studymate."
                />
              </a>
              <a href="https://github.com/bijonai/EchoAI">
                <LinkCard
                  title="GitHub"
                  description="Star our project on GitHub."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <main className="bg-white">
        <div className="my-5 text-black">
          <Products />
        </div>
      </main>
      <Footer />
    </div>
  )
}
