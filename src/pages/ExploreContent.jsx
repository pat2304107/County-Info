import { Link, useParams } from 'react-router-dom';

export default function ExploreContent() {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[40px] font-bold">流行飾品設計師-多媒材飾品</h1>
      <p>
        <Link to="/explore" className="text-secondary underline">
          職探課程列表
        </Link>
        <span> / </span> 課程內容
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 border border-secondary rounded-lg">
          <div className="bg-secondary/20 p-4 ">
            <h3 className="flex items-center gap-2">點閱:987</h3>
            <p>媒合:0</p>
          </div>
          <div className="p-4">
            流行飾品設計師-多媒材飾品
            <br />
            每個包包上永遠少不了的裝飾品…..吊飾，吊飾可大可小，依個人喜好來吊掛。這次課程，學員可依自己喜歡的色系、配件來製作個性化的吊飾。
            <br />
            💓回程配合學校時間~
            <br />
            💓有任何問題私LINE 搜尋ID：@831bnevj
          </div>
        </div>
      </div>
    </div>
  );
}
