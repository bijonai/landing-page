import Footer from '@/components/footer'
import LinkCard from '@/components/link-card'
import Products from '@/components/products'
import OpenSource from '@/components/open-source'

export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <div className="w-full bg-linear-123 from-[#FFE373] via-[#F4C09F] to-[#DC73FF] py-4 px-5 text-white/70">
        <header className=" flex justify-end px-4 ">
          <div className="flex gap-4">
            <span>
              <a href="https://blog.bijon.ai">博客</a>
            </span>
            <span>
              <a href="https://bijon.ai">English</a>
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
                  description="与您的专属AI导师探索新知识"
                />
              </a>
              <a href="https://platform.bijon.ai">
                <LinkCard
                  title="Platform"
                  description="访问我们的API平台以获取开发者服务"
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
        <div className="my-5 text-black">
          <OpenSource />
        </div>
      </main>
      <Footer />
    </div>
  )
}
