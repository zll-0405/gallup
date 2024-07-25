import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "参加盖洛普优势评估",
    description:
      "在线评估期间，你将看到 177 个配对的陈述，并选择最适合你的描述",
  },
  {
    icon: <MapIcon />,
    title: "获取个性化测试报告",
    description:
      "完成评估之后，你将获得一份测试报告",
  },
  {
    icon: <PlaneIcon />,
    title: "利用你的优势获得成功",
    description:
      "才干 * 投入 = 优势；解锁了自己的测试报告之后，能帮助你利用自己的优势获得成功",
  },
  {
    icon: <GiftIcon />,
    title: "找教练解读/同行",
    description:
      "如果预算充足 & 想要充分发挥自己的优势，最好找一个教练解读，或者找一个教练和你一起陪跑，帮助你发现并发挥你的优势",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        如何{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          解锁{" "}
        </span>
        个人专属优势
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        只需 177 个问题即可揭示你的真正自我。但是，成为最佳的自我则需要持续的努力。完成盖洛普优势测试，解锁你的个性化报告，获得个人专属优势，从而发挥你的最大潜能。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
