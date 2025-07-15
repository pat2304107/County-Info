function CardList({ data }) {
  return (
    <div className="space-y-6">
      {data.map((s) => (
        <div
          key={s.id}
          className="flex bg-white/90 rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-secondary"
        >
          <img src={s.img} alt={s.title} className="w-28 h-28 object-cover" />
          <div className="flex-1 p-4">
            <div className="text-xs text-secondary mb-1">{s.tag}</div>
            <div className="text-xl font-bold text-primary mb-1">{s.title}</div>
            <div className="text-sm text-primary mb-2">{s.desc}</div>
            <a href="#" className="text-secondary hover:underline text-sm">
              看詳細
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
