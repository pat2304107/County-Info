import { Link } from 'react-router-dom';

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
      {/* 桌機版 Table */}
      <div className="overflow-x-auto hidden md:block">
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
                key={row.id}
                className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/10 hover:bg-secondary/20'}
              >
                <td className="py-2 px-4 whitespace-nowrap">{row.type}</td>
                <td className="py-2 px-4 text-primary underline cursor-pointer">{row.unit}</td>
                <td className="py-2 px-4 whitespace-nowrap">{row.name}</td>
                <td className="py-2 px-4 whitespace-nowrap">{row.school}</td>
                <td className="py-2 px-4 ">
                  <Link
                    to={`/experience/${row.id}`}
                    className="bg-secondary text-white px-4 py-1 rounded-full w-fit flex items-center gap-2 hover:bg-secondary/80 transition"
                  >
                    <span className="material-icons">visibility</span>
                    看內容
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 手機版 Card */}
      <div className="space-y-4 md:hidden">
        {data.map((row) => (
          <div key={row.id} className="bg-white rounded-lg shadow border border-secondary/30 p-4">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-500">類別</span>
              <span>{row.type}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-500">辦理單位</span>
              <span className="text-primary underline">{row.unit}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-500">活動名稱</span>
              <span>{row.name}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-500">參訪學校</span>
              <span>{row.school}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold text-gray-500">動作：</span>
              <Link
                to={`/experience/${row.id}`}
                className="bg-secondary text-white px-4 py-1 rounded-full w-fit flex items-center gap-2 hover:bg-secondary/80 transition"
              >
                <span className="material-icons">visibility</span>
                看內容
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
