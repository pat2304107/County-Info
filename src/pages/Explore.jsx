export default function Explore() {
  const data = [
    {
      id: 1,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
    {
      id: 2,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
    {
      id: 3,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
    {
      id: 4,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
    {
      id: 5,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
    {
      id: 6,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
    {
      id: 7,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
    {
      id: 8,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
    {
      id: 9,
      date: '2025-03-10',
      time: '02-12~02-13',
      location: '彰安國中職探中心',
      name: '流行飾品設計師-多媒材飾品',
    },
  ];

  return (
    <div className="bg-white/90 rounded-xl shadow p-6 border border-secondary">
      <h2 className="text-2xl font-bold text-primary mb-4">職探課程列表</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-secondary/10 text-primary">
              <th className="py-2 px-4 font-semibold">項次</th>
              <th className="py-2 px-4 font-semibold">活動時間</th>
              <th className="py-2 px-4 font-semibold">報名時間</th>
              <th className="py-2 px-4 font-semibold">活動地點</th>
              <th className="py-2 px-4 font-semibold">課程名稱</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.title}
                className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/10 hover:bg-secondary/20'}
              >
                <td className="py-2 px-4 whitespace-nowrap">{row.id}</td>
                <td className="py-2 px-4 text-primary underline cursor-pointer">{row.time}</td>
                <td className="py-2 px-4 whitespace-nowrap">{row.date}</td>
                <td className="py-2 px-4 ">{row.location}</td>
                <td className="py-2 px-4 ">
                  <a
                    href={`/explore/${row.id}`}
                    className="bg-secondary text-white px-4 py-1 rounded-full w-fit flex items-center gap-2 hover:bg-secondary/80 transition"
                  >
                    {row.name}
                    <span className="material-icons">launch</span>
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
