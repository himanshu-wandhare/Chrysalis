import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

type EventProps = {
    title: string;
    images: string[];
    vertical: boolean;
};

const ReviewCard = ({ img, alt }: { img: string; alt: number }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img alt={`event-${alt}`} src={img} />
            </div>
        </figure>
    );
};

export default function Event({ title, images, vertical }: EventProps) {
    const firstRow = images.slice(0, images.length / 2);
    const secondRow = images.slice(images.length / 2);
    return (
        <div
            className={`flex flex-col ${
                vertical && "md:flex-row justify-center items-center"
            } pt-32`}
        >
            <h1
                className={`text-4xl font-bold text-center text-white md:text-6xl ${
                    vertical && "md:ml-52"
                }`}
                style={{ fontFamily: "Bodoni Moda" }}
            >
                {title}
            </h1>
            <div
                className={`relative flex ${
                    title === "SPORTS" ? "" : "flex-col"
                } h-[800px] w-11/12 mx-auto ${
                    vertical ? "md:flex-row" : "md:flex-col"
                } items-center justify-center bg-gray-950 overflow-hidden rounded-lg md:shadow-xl`}
            >
                <Marquee
                    pauseOnHover
                    vertical={vertical}
                    className="[--duration:20s]"
                >
                    {firstRow.map((img, index) => (
                        <ReviewCard
                            key={`${index}-first`}
                            alt={index}
                            img={img}
                        />
                    ))}
                </Marquee>
                <Marquee
                    reverse
                    pauseOnHover
                    vertical={vertical}
                    className="[--duration:20s]"
                >
                    {secondRow.map((img, index) => (
                        <ReviewCard
                            key={`${index}-second`}
                            alt={index}
                            img={img}
                        />
                    ))}
                </Marquee>
                <div
                    className={`pointer-events-none absolute ${
                        vertical
                            ? "inset-x-0 top-0 h-1/6 bg-gradient-to-b"
                            : "inset-y-0 left-0 w-1/4 bg-gradient-to-r"
                    } from-black via-gray-950 dark:from-background`}
                ></div>
                <div
                    className={`pointer-events-none absolute ${
                        vertical
                            ? "inset-x-0 bottom-0 h-1/3 bg-gradient-to-t"
                            : "inset-y-0 right-0 w-1/4 bg-gradient-to-l"
                    } from-black via-gray-950 dark:from-background`}
                ></div>
            </div>
        </div>
    );
}
