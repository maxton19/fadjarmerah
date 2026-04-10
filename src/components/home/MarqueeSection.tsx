const row1 = ['Manufaktur', 'Retail', 'FMCG', 'Logistik', 'Perbankan', 'Healthcare', 'Konstruksi', 'Pertambangan', 'Otomotif', 'Teknologi']
const row2 = ['Farmasi', 'Agrikultur', 'Properti', 'Energi', 'Pendidikan', 'Media', 'Telekomunikasi', 'Asuransi', 'E-Commerce', 'Hospitality']

function Row({ items, dir }: { items: string[]; dir: 'left' | 'right' }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-3 whitespace-nowrap ${dir === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/12 bg-white/6 text-white/70"
          >
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <div className="bg-slate-900 border-y border-white/6 py-7 space-y-3 overflow-hidden">
      <Row items={row1} dir="left" />
      <Row items={row2} dir="right" />
    </div>
  )
}
