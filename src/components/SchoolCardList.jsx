function SchoolCardList() {
  // 假資料
  const schools = [
    {
      id: 1,
      tag: '連德高工',
      title: '照顧服務科',
      desc: '培養照顧服務專業人才，強調實務與關懷。',
      img: 'https://source.unsplash.com/100x100/?school,care',
    },
    {
      id: 2,
      tag: '連德高工',
      title: '機械科',
      desc: '學習機械設計與製造，強調動手實作。',
      img: 'https://source.unsplash.com/100x100/?school,machine',
    },
    {
      id: 3,
      tag: '連德高工',
      title: '電子商務科',
      desc: '培養電子商務與行銷能力，結合理論與實務。',
      img: 'https://source.unsplash.com/100x100/?school,ecommerce',
    },
  ];
  return (
    <div className="space-y-6">
      {schools.map((s) => (
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

export default SchoolCardList;
