import Footer from '@/components/footer'
import LinkCard from '@/components/link-card'

export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <div className="w-full bg-linear-123 from-[#FFE373] via-[#F4C09F] to-[#DC73FF] py-4 px-5 text-white/70">
        <header className=" flex justify-end px-4 ">
          <div className="flex gap-4">
            <span>博客</span>
            <span>English</span>
          </div>
        </header>
        <div className="container mx-auto">
          <div className="pt-8 pb-32">
            <div className="">
              <div className="text-7xl font-bold">BijonAI</div>
              <div className="text-2xl pt-6">
                To Innovate the AI technology with CREATIVITY
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-24 max-w-4xl">
              <LinkCard
                title="EchoA"
                description="上您的专属AI导师探索新知识"
              />
              <LinkCard
                title="Platform"
                description="上您的专属AI导师探索新知识"
              />
            </div>
          </div>
        </div>
      </div>
      <main className="container mx-auto"></main>
      <Footer />
    </div>
  )
}
