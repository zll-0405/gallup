import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 
      "盖洛普官网在哪里",
    answer: 
      "官网链接在这里： https://www.gallup.com/home.aspx",
    value: "item-1",
  },
  {
    question:
      "从教练那里购买怎么比直接在官网购买还要便宜？",
    answer:
      "如果是官方认证的盖洛普教练，盖洛普官方都会给教练一些优惠码，所以从教练那里购买的话，他们可以通过使用优惠码来购买，就比自己直接在官网购买便宜",
    value: "item-2",
  },
  {
    question:
      "盖洛普优势测试是什么？",
    answer:
      "盖洛普优势测试是一种帮助人们发现和发挥个人优势的工具，通过回答一系列问题，测试识别出你的主要天赋，并提供如何利用这些优势的建议。这有助于提高自信心和工作满意度",
    value: "item-3",
  },
  {
    question: 
      "盖洛普优势测试，和其他测试有何不同？",
    answer: 
      "盖洛普优势测试与其他常见的性格测试（如DISC、MBTI、九型人格）有几个显著的不同点：第一个是不分类、不贴标签，盖洛普测试不将受测者归类为某种类型，而是识别个人独特的天赋组合，避免了标签化和可能导致的自我限制；第二个是每个人的报告完全一样的概率非常低：测试结果是高度个性化的，前五大天赋的组合几乎是独一无二的，强调每个人的独特性。第三个是应用导向，测试不仅识别天赋，还提供如何在实际生活和工作中利用这些天赋的建议，帮助个人更有意识地发挥优势",
    value: "item-4",
  },
  {
    question: 
      "盖洛普优势测试将天赋分为哪几个类别？",
    answer: 
      "盖洛普优势测试将天赋分为 34 个才干，并归纳为 4 个主要领域：执行力、影响力、关系建立和战略思维",
    value: "item-5",
  },
  {
    question:
      "盖洛普报告中，四大维度是怎么排出来的？",
    answer:
      "在盖洛普报告中，四个维度排序并不是固定不变的，是根据每个人在四个维度上的得分来确定的，这个得分是指一个人在每个维度上的得分相对于测试人群的平均得分的高低，测试人群是成千上万的人组成的，包括不同职业、不同年龄、不同性别、不同文化背景的人，至于这个得分是如何计算的，就是盖洛普的独门秘籍了",
    value: "item-6",
  },
  {
    question:
      "盖洛普优势解读是什么？",
    answer:
      "盖洛普优势解读是指，在专业的盖洛普教练引导下，结合自己的盖洛普报告，和自己做过的事情，来做深度觉察，来更好的了解自己，了解自己的报告。 请注意，盖洛普教练进行解读是额外收费的",
    value: "item-7",
  },
  {
    question:
      "盖洛普优势测试对职业选择有帮助吗？",
    answer:
      "有帮助，但如果期望通过测试来得到一个确切结果，可能让你失望了。盖洛普优势测试可以帮助人们了解自己的天赋特质，从而选择更适合自己的工作环境和发展方向。但对于你“最适合”什么工作，盖洛普没办法给你确定答案，它只能告诉你，你的天赋/兴趣点是什么，而工作除了这些，还需要经验/经历/技能/知识。",
    value: "item-8",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        仍有疑问？{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          联系我
        </a>
      </h3>
    </section>
  );
};
