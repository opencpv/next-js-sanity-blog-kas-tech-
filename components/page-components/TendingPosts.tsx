import ContainerCard from "../cards/ContainerCard"

import {Post }from "../../typings"
import CustomSwiper from "../layout/CustomSwiper";

interface Prop {
  data: Array<Post>;
}
const TrendingPosts = ({data}:Prop) => {
  return (
    <section className="mb-3">
      <h1 className="mx-auto font-poppins text-center font-semibold text-xl  lg:text-[60px] my-14  lg:my-20">Trending Posts</h1>

      <CustomSwiper data={data}>
          <div></div>
        </CustomSwiper>
    </section>
  );
};

export default TrendingPosts;
