import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            盖洛普博客
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">更多资料</h3>
          <div>
            <a
              href="https://www.xiaoyuzhoufm.com/podcast/64f2030fb883f7aff7a8279a"
              className="opacity-60 hover:opacity-100"
            >
              不完美女孩
            </a>
          </div>

          <div>
            <a
              href="https://mp.weixin.qq.com/s/yyZ-WKi1JS-koi9yVy32NQ"
              className="opacity-60 hover:opacity-100"
            >
              盖洛普测评及注意事项
            </a>
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">本博客</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              关于
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              解锁优势
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">联系方式</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://okjk.co/sYmfES"
              className="opacity-60 hover:opacity-100"
            >
              即刻
            </a>
          </div>

        </div>
      </section>

      <section className="container pb-14 text-center">
        <p>
          &copy; 2024 {" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://strengths.top/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            StrengthsTop
          </a>
        </p>
      </section>
    </footer>
  );
};
