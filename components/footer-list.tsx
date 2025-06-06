function FooterList({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg text-black">{title}</h2>
      <div className="flex flex-col gap-1 text-[#454545]">
        {items.map((item) => (
          <a href={item[1]}><span key={item[0]}>{item[0]}</span></a>
        ))}
      </div>
    </div>
  )
}

export default FooterList
