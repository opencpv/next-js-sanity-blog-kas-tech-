import Container from "../layout/Container";

const NewsLetterSub = () => {
  return (
    <section className="w-full bg-gray-100/50 py-12 my-14">
      <Container>
        <h3 className="font-poppins font-bold text-xl md:text-2xl mb-2 ">
          Subscribe to the newsletter
        </h3>
        <div className="flex flex-wrap gap-5 ">
          <input
            placeholder="Enter your email...."
            type={"text"}
            className={
              "w-full md:w-[75%] py-3 text-lg px-3 rounded-md border-black/20 border-2 shadow-sm outline-none text-[#888888]"
            }
          />
          <button className="flex-auto bg-red-500 h-[56px] rounded-full font-black font-poppins text-white shadow-sm ">
            Subscribe
          </button>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetterSub;
