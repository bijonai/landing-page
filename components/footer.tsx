import { Mail } from 'lucide-react'
import FooterList from './footer-list'
import { LogosX } from './icons/logos-x'
import { LogosYoutubeIcon } from './icons/logos-youtube'
import { LogosGithubIcon } from './icons/logos-github'

function Footer() {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="container mx-auto p-6">
        <div className="flex flex-row items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-12 h-12" />
          <img src="/text.svg" alt="logo-text" className="w-24 h-6" />
        </div>
        <div className="p-6">
          <div className="flex flex-row items-center gap-6">
            <Mail className="size-8 text-black/50" />
            <LogosYoutubeIcon className="size-8 text-black/50" />
            <LogosGithubIcon className="size-8 text-black/50" />
            <LogosX className="size-8 text-black/50" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 pt-3">
            <FooterList
              title="Products"
              items={['EchoAI', 'SciuxJs', 'Sciux Laplace']}
            />
            <FooterList
              title="Developer Services"
              items={['Documentations', 'GitHub Repository']}
            />
            <FooterList title="Policies" items={['Privacy Policy', 'Terms of Service', 'Help']} />
            <FooterList title="Join Us" items={['Job Requirements']} />
            <FooterList title="Other" items={['Pricing', 'Contact Us', 'Blog']} />
          </div>

          <div className="flex flex-col pt-24 text-[#ccc]">
            <span>Copyright © 2025 BijonAI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
