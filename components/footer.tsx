import { ArrowRight, Mail, Github, Twitter } from 'lucide-react'
import FooterList from './footer-list'

function Footer() {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="container mx-auto p-6">
        <div className="flex flex-row items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-12 h-12" />
          <img src="/text.svg" alt="logo-text" className="w-24 h-6" />
        </div>
        <div className="p-6">
          <div className="flex flex-row items-center gap-2">
            <ArrowRight />
            <Mail />
            <Github />
            <Twitter />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4  pt-3">
            <FooterList
              title="产品"
              items={['EchoAI', 'SayoAI', 'Eich', 'IdeaJs']}
            />
            <FooterList
              title="开发者服务"
              items={['Platform', 'API Documentation', 'SDK']}
            />
            <FooterList title="政策" items={['隐私政策', '用户协议', '帮助']} />
            <FooterList title="加入我们" items={['职位要求']} />
            <FooterList title="其他" items={['定价']} />
          </div>

          <div className="flex flex-col pt-24 text-[#ccc]">
            <span>© 2025 xxxxx有限公司 版权所有</span>
            <span> xICP备xxxxxxxxxx号 </span>
            <span> x公网安备 xxxxxxxxxxxxxx 号</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
