import Tabs from '../components/Tabs';
import CardList from '../components/CardList';
import Pagination from '../components/Pagination';

const experts = [
  {
    id: 1,
    tag: '土黏香布袋戲DIY(或其他童玩DIY)',
    title: '藝術與設計類-藝術群',
    desc: '工坊開放參觀時間：周一至周日9:30~18:30 土黏香布袋戲DIY(或其他童玩DIY)：請來電預約 1.本工坊設有常...',
    img: '/County-Info/images/image.png',
  },
];

function Expert() {
  return (
    <>
      <Tabs title="職場達人參訪查詢" desc="職場達人查詢" />
      <CardList data={experts} />
      <Pagination />
    </>
  );
}

export default Expert;
