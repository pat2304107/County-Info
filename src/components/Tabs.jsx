function Tabs({ title, desc }) {
  return (
    <div className="flex space-x-4 px-8 py-4 ">
      <div>
        <p className="text-primary font-bold text-3xl">{title}</p>
        <p className="text-secondary font-bold text-xl">{desc}</p>
      </div>
      <div className="border border-secondary rounded-full px-4 flex items-center ">
        <input type="text" className="border-none outline-none" placeholder="搜尋" />
        <button className="bg-secondary text-white px-4 py-1 rounded-full">查詢</button>
      </div>
    </div>
  );
}

export default Tabs;
