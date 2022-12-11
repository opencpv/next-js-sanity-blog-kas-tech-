import { Post } from "../../typings";
import BlogCard1 from "../cards/BlogCard1";
import Container from "../layout/Container";

interface Prop {
  data: Array<Post>;
}
const BlogGrid = ({ data }: Prop) => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-20 gap-8">
          {data.map((post, index) => {
            return <BlogCard1 {...post} key={index} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default BlogGrid;
