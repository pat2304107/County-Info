import { useParams } from 'react-router-dom';

const jobGroup = ['機械職群', '動力機械職群', '電機電子職群', '土木建築職群', '設計職群'];

export default function TechnicalEducationContent() {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[40px] font-bold">國中技藝教育</h1>
      <p>
        <a href="/explore" className="text-secondary underline">
          國中技藝教育列表
        </a>
        <span> / </span>
        詳看內容
      </p>
      <h1 className="text-[24px] font-bold">承辦學校：彰師大附工</h1>
      <h1 className="text-[24px] font-bold">辦理方式：合作方式</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 border border-secondary rounded-lg">
          <div className="bg-secondary/20 p-4 ">
            <h3 className="flex items-center gap-2">職群列表</h3>
          </div>
          <div className="p-4 flex gap-2">
            {jobGroup.map((job, i) => (
              <a
                key={i}
                href={`/technical-education/${id}/${i + 1}`}
                className="bg-secondary text-white px-4 py-1 rounded-full w-fit flex items-center gap-2 hover:bg-secondary/80 transition"
              >
                <span className="material-icons">visibility</span>
                {job}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
