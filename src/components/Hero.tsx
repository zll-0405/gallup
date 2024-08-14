import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              盖洛普博客
            </span>{" "}
          </h1>{" "}
          给你提供{" "}
          <p className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              盖洛普优势
            </span>{" "}
            相关内容
          </p>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          盖洛普优势测试，如何入门盖洛普优势教练，盖洛普学习资料推荐
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a 
            href="https://strengthsinfo.com/"
            target="_blank"
          >
            <Button className="w-full md:w-1/3">优势信息</Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="https://mp.weixin.qq.com/s/yyZ-WKi1JS-koi9yVy32NQ"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            测评事项
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
