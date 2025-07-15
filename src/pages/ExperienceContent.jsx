import { useParams } from 'react-router-dom';

export default function ExploreContent() {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[40px] font-bold">觀看參訪體驗心得</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 border border-secondary rounded-lg">
          <div className="bg-secondary/20 p-4 ">
            <p>職探課程：布藝工坊-摺布玩花樣</p>
          </div>
          <div className="p-4">
            <p className="text-red-700 font-bold">辦理單位</p>大同國中職探中心
            <p className="text-red-700 font-bold">參加單位</p> 東芳國小
            <p className="text-red-700 font-bold">心得感想</p>
            O榕：我之前都想，為什麼布都要兩塊相反的縫在一起，經過老師講解才知道，原來是為了立起來的時候兩邊都是正面，我還學到怎樣使用縫紉機，在過程中，我還不小心讓針在同一個地方打轉，後來老師幫我把卡在一起的線剪掉，老師還有幫我縫，我看到老師把速度調到最快，針就動得超快，老師熟練的操作，轉眼間就縫好了。
            <br />
            O桓：這是我第一次操作裁縫機，讓我印象非常深刻。雖然曾經在家中看奶奶用過裁縫機，不過今天我使用的機器，和奶奶用的不太一樣，操作方式更是不同，令我興奮不已。
            <p className="text-red-700 font-bold">活動照片</p>
            <img
              src="/County-Info/images/experience-sample-1.png"
              alt="活動照片"
              className="w-1/2"
            />
            <img
              src="/County-Info/images/experience-sample-1.png"
              alt="活動照片"
              className="w-1/2"
            />
            <img
              src="/County-Info/images/experience-sample-1.png"
              alt="活動照片"
              className="w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
