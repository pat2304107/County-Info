export default function Experience() {
  const data = [
    {
      id: 1,
      type: '職探課程',
      unit: '大同國中職探中心',
      name: '布藝工坊-摺布玩花樣',
      school: '東芳國小',
    },
  ];

  return (
    <div className="bg-white/90 rounded-xl shadow p-6 border border-secondary">
      <h2 className="text-2xl font-bold text-primary mb-4">參訪體驗心得</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-secondary/10 text-primary">
              <th className="py-2 px-4 font-semibold">類別 </th>
              <th className="py-2 px-4 font-semibold">辦理單位</th>
              <th className="py-2 px-4 font-semibold">活動名稱</th>
              <th className="py-2 px-4 font-semibold">參訪學校</th>
              <th className="py-2 px-4 font-semibold">動作</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.title}
                className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/10 hover:bg-secondary/20'}
              >
                <td className="py-2 px-4 whitespace-nowrap">{row.type}</td>
                <td className="py-2 px-4 text-primary underline cursor-pointer">{row.unit}</td>
                <td className="py-2 px-4 whitespace-nowrap">{row.name}</td>
                <td className="py-2 px-4 whitespace-nowrap">{row.school}</td>
                <td className="py-2 px-4 ">
                  <a
                    href={`/experience/${row.id}`}
                    className="bg-secondary text-white px-4 py-1 rounded-full w-fit flex items-center gap-2 hover:bg-secondary/80 transition"
                  >
                    <span className="material-icons">visibility</span>
                    看內容
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
