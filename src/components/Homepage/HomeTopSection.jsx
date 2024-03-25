const HomeTopSection = () => {
  return (
    <div>
      <div className="lg:p-20 bg-base-200 rounded-2xl">
        <div className="flex-col hero-content lg:flex-row-reverse lg:justify-between">
          <img
            src="https://s3-alpha-sig.figma.com/img/093f/28a2/713be2009ed5e0a38a726ba628d93944?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7k7kDgqZxPs8qerQCxbihcD-330NENI6lJnSrtKKKck1-Wu8Dptn2j276b3AdZNhqNHfY1dzN263aqzm6q1u4K9hK0V2JSmJdZ1b7wiUEN03JvGwWtUyV~T55bCFqKTr6nRIv05AgtB8ma-fBy5cdK0OGcKCwWTqPv7Dw7bEohyvWFEv3X8twqfAhojEOE~WpzbqcLaxeXfLiQThwUhKtSb4OIJPnnHgWY2D-VqiPHKtcRmJEEeXkvLW~u3opbaEwP~Pv7x3hSyb3x5yuTtzf2nTyRcNDRVcVJ1RhdAKxbBLYQ2XtL8Ep3Pt29jCwuPG~fhQimqFwk4fzkCdvnGjg__"
            className="lg:w-[300px] w-[200px] my-4 lg:my-0 rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <h1 className="py-6">Books to freshen up your bookshelf</h1>
            <button className="btn bg-[#23BE0A]">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;
