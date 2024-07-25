import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  关于{" "}
                </span>
                盖洛普优势测试
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                盖洛普优势测试（CliftonStrengths）是一种广泛使用的个人天赋识别工具，由全球知名的市调公司盖洛普（Gallup）开发 <br/>
                这个测试的核心理念是帮助个人发现并发挥自身的独特优势，而不是过分关注弱点 <br/>
                测试主要包含以下几个关键特点： <br/>
                34 个优势才干：盖洛普将人的天赋分为 34 种不同的类别，涵盖了各种性格特质和行为模式 <br/>
                四大天赋领域：这 34 种天赋被进一步归类为四个主要领域 执行力、影响力、关系建立和战略思维 <br/>
                个性化结果：测试会根据个人回答，生成独特的才干排序，反映出每个人的优势组合 <br/>
                广泛应用：许多全球 500 强企业采用这一工具来优化人才管理和团队配置 <br/>
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
