export default function TechnicalEducation() {
  const data = [
    {
      id: 1,
      way: '合作',
      school: '彰師大附工',
      jobGroup: ['機械職群', '動力機械職群', '電機電子職群', '土木建築職群', '設計職群'],
    },
  ];

  return (
    <div className="bg-white/90 rounded-xl shadow p-6 border border-secondary">
      <h2 className="text-2xl font-bold text-primary mb-4">國中技藝教育</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-secondary/10 text-primary">
              <th className="py-2 px-4 font-semibold">方式</th>
              <th className="py-2 px-4 font-semibold">辦理學校</th>
              <th className="py-2 px-4 font-semibold">開設職群</th>
              <th className="py-2 px-4 font-semibold">動作</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.title}
                className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/10 hover:bg-secondary/20'}
              >
                <td className="py-2 px-4 whitespace-nowrap">{row.way}</td>
                <td className="py-2 px-4 text-primary underline cursor-pointer">{row.school}</td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {row.jobGroup.map((job, i) => (
                    <span
                      key={i}
                      className="bg-secondary/10 text-secondary px-2 py-1 rounded-full mr-2"
                    >
                      {job}
                    </span>
                  ))}
                </td>
                <td className="py-2 px-4 ">
                  <a
                    href={`/technical-education/${row.id}`}
                    className="bg-secondary text-white px-4 py-1 rounded-full w-fit flex items-center gap-2 hover:bg-secondary/80 transition"
                  >
                    <span className="material-icons">visibility</span>
                    詳細內容
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
