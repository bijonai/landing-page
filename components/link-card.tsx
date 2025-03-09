import { ArrowRight } from 'lucide-react'

function LinkCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-orange-50/90 rounded-lg px-6 py-4 flex flex-col justify-between hover:shadow-lg transition-shadow group text-black/70 cursor-pointer">
      <div>
        <h2 className="text-2xl mb-4">{title}</h2>
        <p className="text-black/55">{description}</p>
      </div>
      <div className="flex justify-end mt-8">
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  )
}

export default LinkCard
