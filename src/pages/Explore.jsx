import { Link } from 'react-router-dom';

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
      {/* 桌機版 Table */}
      <div className="overflow-x-auto hidden md:block">
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
                key={row.id}
                className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/10 hover:bg-secondary/20'}
              >
                <td className="py-2 px-4 whitespace-nowrap">{row.id}</td>
                <td className="py-2 px-4 text-primary underline cursor-pointer">{row.time}</td>
                <td className="py-2 px-4 whitespace-nowrap">{row.date}</td>
                <td className="py-2 px-4 ">{row.location}</td>
                <td className="py-2 px-4 ">
                  <Link
                    to={`/explore/${row.id}`}
                    className="bg-secondary text-white px-4 py-1 rounded-full w-fit flex items-center gap-2 hover:bg-secondary/80 transition"
                  >
                    {row.name}
                    <span className="material-icons">launch</span>
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
              <span className="font-semibold text-gray-500">項次</span>
              <span>{row.id}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-500">活動時間</span>
              <span className="text-primary underline">{row.time}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-500">報名時間</span>
              <span>{row.date}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-500">活動地點</span>
              <span>{row.location}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold text-gray-500">課程名稱：</span>
              <Link
                to={`/explore/${row.id}`}
                className="bg-secondary text-white px-4 py-1 rounded-full w-fit flex items-center gap-2 hover:bg-secondary/80 transition"
              >
                {row.name}
                <span className="material-icons">launch</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
