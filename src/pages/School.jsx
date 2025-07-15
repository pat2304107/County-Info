import Tabs from '../components/Tabs';
import CardList from '../components/CardList';
import Pagination from '../components/Pagination';

const schools = [
  {
    id: 1,
    tag: '連德高工',
    title: '照顧服務科',
    desc: '有鑑於政府大力推行長照2.0政策，各相關機構專業照護人力需求與日俱增，亟需培養第一線照顧服務人才，認為...',
    img: '/images/image.png',
  },
  {
    id: 2,
    tag: '連德高工',
    title: '機械科',
    desc: '培育學生能認識機械加工時所使用的基本量具、輔助器材，並且能熟悉其操作流程，且設有新穎的高速車床與CNC...',
    img: 'https://source.unsplash.com/100x100/?school,machine',
  },
  {
    id: 3,
    tag: '連德高工',
    title: '電子商務科',
    desc: '使學生具有建置與管理電子商店的知識與技能，以網路創新整合科技與商業，著重實務課程，與市場接軌，並設立...',
    img: 'https://source.unsplash.com/100x100/?school,ecommerce',
  },
];

function School() {
  return (
    <>
      <Tabs title="高中職學校參訪查詢" desc="高中職學校查詢" />
      <CardList data={schools} />
      <Pagination />
    </>
  );
}

export default School;
