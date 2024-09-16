"use client";
import chatapp from "@/assets/images/chat-app.png";
import avtozap from "@/assets/images/avtozap.png";
import vkdownloader from "@/assets/images/vkdownloader.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";


const portfolioProjects = [
    {
        company: "AutoClube",
        year: "2024",
        title: "Чат тех-поддержки",
        results: [
            {title: "Общение в реальном-времени"},
            {title: "Возможность создавать группы"},
            {title: "Адаптация под все устройства"},
        ],
        link: "https://github.com/PonomarevAleksandr/Fullstack-chat-app",
        image: chatapp,
    },
    {
        company: "AvtoZap",
        year: "2024",
        title: "Бот для поиска авто-запчастей",
        results: [
            {title: "Поиск запчастей по артикулу"},
            {title: "Техподдержка"},
            {title: "Интерактивный дизайн"},
        ],
        link: "https://t.me/get_my_zap_bot",
        image: avtozap,
    },
    {
        company: "AhueniyMusic",
        year: "2024",
        title: "Бот для скачивания музыки",
        results: [
            {title: "Реверс-инженеринг VK Music"},
            {title: "Поиск всей информации о треке"},
            {title: "Система кэширования"},
        ],
        link: "https://github.com/PonomarevAleksandr/vk-youtube-audio-bot",
        image: vkdownloader,
    },
];

export const ProjectsSection = () => {
    const Certificates = () => {
        window.open('/assets/files/certs.pdf', '_blank'); // Открывает PDF в новой вкладке
    };
    return (
        <section className="pb-16 lg:py-24" id="projects">
            <div>
                <div className="container">
                    <SectionHeader
                        title="Мои проекты"
                        description="Посмотрите как я превратил идеи, в реальные проекты"
                        eyebrow="Реальные результаты"/>
                    <div className="flex flex-col mt-10 gap-20 md:mt-20">
                        {portfolioProjects.map((project, projectIndex) => (
                            <Card key={project.title} className="
                                                        px-8
                                                        pt-8
                                                        pb-0
                                                        md:pt-12
                                                        md:px-10
                                                        lg:pt-16
                                                        lg:px-20
                                                        sticky
                                                        "
                                  style={{
                                      top: `calc(64px + ${projectIndex * 40}px`,
                                  }}
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                    <div className="lg:pb-16">
                                        <div className="
                                            bg-gradient-to-r
                                            from-emerald-300
                                            to-sky-400
                                            inline-flex
                                            gap-2
                                            font-bold
                                            uppercase
                                            tracking-widest
                                            text-sm
                                            text-transparent
                                            bg-clip-text
                                            ">
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className="
                                                font-serif
                                                text-2xl
                                                mt-2
                                                md:mt-5
                                                md:text-4xl
                                                "
                                        >
                                            {project.title}
                                        </h3>
                                        <hr className="
                                                border-t-2
                                                border-white/5
                                                mt-4
                                                md:mt-5
                                                "
                                        />
                                        <ul className="
                                                flex
                                                flex-col
                                                gap-4
                                                mt-4
                                                md:mt-5"
                                        >
                                            {project.results.map((result) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <li className="flex gap-2 text-sm text-white/50 md:text-base">
                                                    <CheckIcon className="size-5 md:size-6"/>
                                                    <span>{result.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a href={project.link}>
                                            <button className="
                                                        bg-white
                                                        text-gray-950
                                                        h-12
                                                        w-full
                                                        rounded-xl
                                                        font-semibold
                                                        inline-flex
                                                        items-center
                                                        justify-center
                                                        gap-2
                                                        mt-8
                                                        md:w-auto
                                                        px-6
                                                        "
                                            >
                                                <span>Смотреть</span>
                                                <ArrowUpRightIcon className="size-4"/>
                                            </button>
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <Image src={project.image} alt={project.title}
                                               className="
                                                    rounded-3xl
                                                    mt-8
                                                    -mb-4
                                                    md:-mb-0
                                                    lg:mt-0
                                                    lg:absolute
                                                    lg:h-full
                                                    lg:w-auto
                                                    lg:max-w-none
                                                    "
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                        {/*<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">*/}
                        {/*    <a href="/certificates">*/}
                        {/*        <button*/}
                        {/*            className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900*/}
                        {/*                       inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max font-bold"*/}
                        {/*        >*/}
                        {/*            Сертификаты*/}
                        {/*        </button>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

        </section>
    );
};
