import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function AnnouncementTable() {
  // 假資料
  const data = [
    {
      date: '2025-06-12',
      title: '太固國中職輔中心大職場113學年度模擬職場...',
      author: '太固國中職輔中心',
      views: 231,
    },
    {
      date: '2025-06-04',
      title: '2025 彰安職輔中心暑期報名單',
      author: '彰安國中職輔中心',
      views: 234,
    },
    {
      date: '2025-05-22',
      title: '太固國中職輔中心113學年度模擬職場報名...',
      author: '太固國中職輔中心',
      views: 249,
    },
    {
      date: '2025-05-01',
      title: '2025彰安職輔中心-夏令營',
      author: '彰安國中職輔中心',
      views: 481,
    },
    {
      date: '2025-03-10',
      title: '113-2 屏北職輔中心講座報名',
      author: '屏北國中職輔中心',
      views: 989,
    },
  ];
  return (
    <div className="bg-white/90 rounded-xl shadow p-6 border border-secondary">
      <h2 className="text-2xl font-bold text-primary mb-4">最新公告</h2>
      {/* 桌機版 Table */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-secondary/10 text-primary">
              <th className="py-2 px-4 font-semibold">公告日期</th>
              <th className="py-2 px-4 font-semibold">標題</th>
              <th className="py-2 px-4 font-semibold">發佈人</th>
              <th className="py-2 px-4 font-semibold">點閱</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.title}
                className={i % 2 === 0 ? 'bg-white' : 'bg-secondary/10 hover:bg-secondary/20'}
              >
                <td className="py-2 px-4 whitespace-nowrap">{row.date}</td>
                <td className="py-2 px-4 text-primary underline cursor-pointer">{row.title}</td>
                <td className="py-2 px-4 whitespace-nowrap">{row.author}</td>
                <td className="py-2 px-4 text-right">{row.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 手機版 Card */}
      <div className="space-y-4 md:hidden">
        {data.map((row, i) => (
          <div
            key={row.title}
            className="bg-white rounded-lg shadow border border-secondary/30 p-4"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-500">公告日期</span>
              <span>{row.date}</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-gray-500">標題：</span>
              <span className="text-primary underline cursor-pointer">{row.title}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                <span className="font-semibold">發佈人：</span>
                {row.author}
              </span>
              <span>
                <span className="font-semibold">點閱：</span>
                {row.views}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return <AnnouncementTable />;
}

export default Home;
