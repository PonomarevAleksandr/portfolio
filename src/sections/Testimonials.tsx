import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import {SectionHeader} from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import {Card} from "@/components/Card";
import {Fragment} from "react";

const testimonials = [
    {
        name: "Влад",
        position: "Заказчик",
        text: "Делал бота у @AlexCodeTG\n" +
            "Сделал быстро как и обещал.\n" +
            "Предлагал свои идеи по улучшению и сделал всё быстро. Работой доволен",
        avatar: memojiAvatar1,
    },
    {
        name: "Ольга",
        position: "Заказчица",
        text: "Заказывала разработку телеграм-бота у @AlexCodeTG.\n" +
            "Работа выполнена быстро, качественно.\n" +
            "Хороший разработчик, внедрил много полезного функционала помимо Тех.Задания.\n" +
            "Всегда был на связи, советую.",
        avatar: memojiAvatar2,
    },
    {
        name: "Владислав",
        position: "Владелец студии WebStore",
        text: "Большое спасибо Александру за его работу, столкнулись с проблемой что наш телеграм бот внезапно вышел из строя и было необходимо его восстановить.\n" +
            "\n" +
            "Александр перед началом работы, провел анализ, выявил причину и в короткие сроки все исправил",

        avatar: memojiAvatar3,
    },
    {
        name: "Вероника",
        position: "Заказчица",
        text: "Заказала создание бота. Ответственный и все в срок. Работать комфортно, рекомендую👍.",
        avatar: memojiAvatar4,
    },
    {
        name: "Руслан",
        position: "Клуб Аhуенных Дам",
        text: "Отзыв!\n" +
            "Благодарю за создание бота. Все пожелания были учтены, более того после создания бота можно всегда обратиться за помощью. Буду делать второй бот так же через тебя, и буду всегда рекомендовать тебя по таким вопросам. Спасибо!",
        avatar: memojiAvatar5,
    },
];

export const TestimonialsSection = () => {
    return <div className="py-16 lg:py-24">
        <div className="container">
            <SectionHeader
                title="Что клиенты говорят о моей работе"
                description="Отзывы клиентов о сотрудничестве со мной."
                eyebrow="Довольные клиенты"/>
            <div
                className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
                <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
                    {[...new Array(2)].fill(0).map((_, index) => (
                        <Fragment key={index}>
                            {testimonials.map(testimonial => (
                                <Card key={testimonial.name}
                                      className="max-w-xs md:max-w-md p-6 md:p-8 h-[300px] hover:-rotate-3 transition duration-300 ">
                                    <div className="flex gap-4 items-center">
                                        <div
                                            className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="max-h-full"/>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-white/40">{testimonial.position}</div>
                                        </div>
                                    </div>
                                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                                </Card>
                            ))}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    </div>
};
