import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { reviews } from "@/data/dummyData";

const firstRow = reviews.slice(reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    img,
}: {
    img: string;
    name: string;
}) => {
    return (
        <figure
            className={cn(
                "relative overflow-hidden rounded-lg border",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <Image src={img} alt={name} width={500} height={500} className="overflow-hidden w-full h-full" loading="lazy" />
        </figure>
    );
};

export function MarqueeCards() {
    return (
        <div className='py-10'>
            <div className='min-h-[60px]'>
                <h4 className="text-[1.8rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] max-w-[90%] mx-auto text-center">
                    Success in <span className="px-2 text-[#60a6e7]">Motion</span> – Our
                    clients&apos; journey
                </h4>
                <div className="relative flex w-full flex-col justify-center overflow-hidden bg-background md:shadow-xl">
                    <Marquee className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
