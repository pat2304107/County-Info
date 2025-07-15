import { useParams } from 'react-router-dom';

export default function TechnicalEducationDetail() {
  const { id, detail_id } = useParams();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[40px] font-bold">國中技藝教育-職群介紹</h1>
      <h1 className="text-[24px] font-bold">承辦學校：彰師大附工</h1>
      <h1 className="text-[24px] font-bold">辦理方式：合作方式</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 border border-secondary rounded-lg">
          <div className="bg-secondary/20 p-4 ">
            <p>機械職群</p>
          </div>
          <div className="p-4">
            <p className="text-red-700 font-bold">課程內容大綱</p>
            課程內容部分有機械職群概論、機械基礎工作、機械試圖與製圖、清楚電腦輔助製造與銑床工作等，透過具體課程規劃以達到下列教學目標：傳授一般機械的功能、用途以及產業未來發展的概念，以及基礎機械識圖及加工的相關知識與基本技能，激發學生對機械行業的學習興趣，並培養良好的工作習慣及態度。1
            <p className="text-red-700 font-bold">優良事蹟</p>
            <p>
              1.彰化縣立彰安國中學生林奕成，參與106學年度國中技藝教育競賽機械職群（車床工組）第一名。
              <br />
              2.彰化縣立陽明國中學生林彥呈，參與106學年度國中技藝教育競賽機械職群（機械製圖組）第一名。
              <br />
              3.彰化縣立和群國中學生郭心昊，參與106學年度國中技藝教育競賽機械職群（電腦輔助製造組）第一名。
              <br />
              4.彰化縣立彰德國中學生林偉新，參與106學年度國中技藝教育競賽機械職群（機電整合組）第一名。
              <br />
              5.彰化縣立鹿港國中學生黃亭銨，參與106學年度國中技藝教育競賽機械職群（鑄造組）第一名。
            </p>
            <p className="text-red-700 font-bold">活動照片</p>
            <div className="grid grid-cols-2 gap-2 md:w-2/3 w-full">
              <img src="/County-Info/images/edu-sample-1.png" alt="活動照片" className="w-full" />
              <img src="/County-Info/images/edu-sample-1.png" alt="活動照片" className="w-full" />
              <img src="/County-Info/images/edu-sample-1.png" alt="活動照片" className="w-full" />
              <img src="/County-Info/images/edu-sample-1.png" alt="活動照片" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
