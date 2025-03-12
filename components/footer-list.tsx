function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg text-black">{title}</h2>
      <div className="flex flex-col gap-1 text-[#454545]">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default FooterList
