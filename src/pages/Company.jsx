import Tabs from '../components/Tabs';
import CardList from '../components/CardList';
import Pagination from '../components/Pagination';

const companies = [
  {
    id: 1,
    tag: '順達窯業股份有限公司',
    title: '認識紅磚之窯場探索',
    desc: '【行程規劃】約2.5小時（行程可依團體需求規劃•停留時間會因DIY項目而不同） 1.認識紅磚: 紅磚文化/簡...',
    img: '/images/image.png',
  },
  {
    id: 2,
    tag: '順達窯業股份有限公司',
    title: '認識紅磚之窯場探索',
    desc: '【行程規劃】約2.5小時（行程可依團體需求規劃•停留時間會因DIY項目而不同） 1.認識紅磚: 紅磚文化/簡...',
    img: '/images/image.png',
  },
  {
    id: 3,
    tag: '順達窯業股份有限公司',
    title: '認識紅磚之窯場探索',
    desc: '【行程規劃】約2.5小時（行程可依團體需求規劃•停留時間會因DIY項目而不同） 1.認識紅磚: 紅磚文化/簡...',
    img: '/images/image.png',
  },
  {
    id: 4,
    tag: '順達窯業股份有限公司',
    title: '認識紅磚之窯場探索',
    desc: '【行程規劃】約2.5小時（行程可依團體需求規劃•停留時間會因DIY項目而不同） 1.認識紅磚: 紅磚文化/簡...',
    img: '/images/image.png',
  },
];

function Company() {
  return (
    <>
      <Tabs title="公司企業參訪查詢" desc="公司企業查詢" />
      <CardList data={companies} />
      <Pagination />
    </>
  );
}

export default Company;
