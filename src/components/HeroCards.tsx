import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { FaceIcon, EyeOpenIcon, SpeakerLoudIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>F.D</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">彼得·德鲁克</CardTitle>
            <CardDescription>Peter F. Drucker</CardDescription>
          </div>
        </CardHeader>

        <CardContent>“一个人要想有所作为，只能靠发挥优势”</CardContent>
      </Card>

      {/* Person */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="./avatar.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">醒醒同学</CardTitle>
          <CardDescription className="font-normal text-primary">
            盖洛普认证教练
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            累计帮助 4000 人+完成优势测评，发挥优势，欢迎通过我购买测评码～
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="./buy.png"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only"></span>
              <FaceIcon className="w-5 h-5" />
            </a>

            <a
              rel="noreferrer noopener"
              href="https://okjk.co/sYmfES"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only"></span>
              <EyeOpenIcon className="w-5 h-5" />
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.xiaoyuzhoufm.com/podcast/64f2030fb883f7aff7a8279a"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only"></span>
              <SpeakerLoudIcon className="w-5 h-5" />
            </a>

          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            性价比最高
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">410</span>
            <span className="text-muted-foreground"> /次</span>
          </div>

          <CardDescription>
            官网价格 445，通过盖洛普认证教练购买，价格为 410
          </CardDescription>
        </CardHeader>

        <CardContent>
          <a 
            href="./buy.png"
            target="_blank"
          >
            <Button className="w-full">点击购买</Button>
          </a>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["解锁 34 项才干", "专属于你的优势报告","若实际价格与标价不符，以实际价格为准",].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <p className="ml-2">{benefit}</p>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>盖洛普优势测试</CardTitle>
            <CardDescription className="text-md mt-2">
              一个科学识人识己的工具
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
