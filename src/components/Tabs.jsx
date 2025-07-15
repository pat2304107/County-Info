function Tabs({ title, desc }) {
  return (
    <div className="flex space-x-4 px-8 py-4 md:flex-row flex-col">
      <div>
        <p className="text-primary font-bold text-3xl">{title}</p>
        <p className="text-secondary font-bold text-xl">{desc}</p>
      </div>
      <div className="border border-secondary rounded-full md:pr-4 pl-4 flex items-center justify-between">
        <input type="text" className="border-none outline-none bg-transparent" placeholder="搜尋" />
        <button className="bg-secondary text-white px-4 py-1 rounded-full whitespace-nowrap">
          查詢
        </button>
      </div>
    </div>
  );
}

export default Tabs;
