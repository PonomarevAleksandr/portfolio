import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import DockerIcon from "@/assets/icons/docker-svgrepo-com.svg";
import mapIcon from "@/assets/images/map.png"
import smileMemoji from '@/assets/images/memoji-smile.webp'
import {CardHeader} from "@/components/CardHeader";
import {ToolboxItems} from "@/components/ToolboxItems";

const toolboxItems = [
    {
        title: 'JavaScript',
        iconType: JavascriptIcon,
    },
    {
        title: 'HTML5',
        iconType: HtmlIcon,
    },
    {
        title: 'CSS3',
        iconType: CssIcon,
    },
    {
        title: 'REACT',
        iconType: ReactIcon,
    },
    {
        title: 'GitHub',
        iconType: GithubIcon,
    },
    {
        title: 'DOCKER',
        iconType: DockerIcon,
    },
]

const hobbies = [
    {
        title: 'Спорт',
        emoji: '🏋️‍♂️',
        left: '5%',
        top: '5%',
    },
    {
        title: 'Фотография',
        emoji: '📷',
        left: '50%',
        top: '5%',
    },
    {
        title: 'Прогулки',
        emoji: '👟',
        left: '35%',
        top: '40%',
    },
    {
        title: 'Чтение',
        emoji: '📚',
        left: '10%',
        top: '35%',
    },
    {
        title: 'Музыка',
        emoji: '🎵',
        left: '70%',
        top: '45%',
    },
    {
        title: 'Блог',
        emoji: '🤳',
        left: '5%',
        top: '65%',
    },
    {
        title: 'Обучение',
        emoji: '👨🏻‍🎓',
        left: '45%',
        top: '70%',
    },
]

export const AboutSection = () => {
    return (
        <section id="info">
            <div className="py-20 lg:py-28">
                <div className="container">
                    <SectionHeader
                        title="Моя характеристика"
                        description="Изучите информацию обо мне, кто я и чем я занимаюсь"
                        eyebrow="Обо мне"/>
                    <div className="mt-20 flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                                <CardHeader title="Книги"
                                            description="К примеру, одна из изученных книг, которая может быть полезна."/>
                                <div className="w-40 mx-auto mt-2 md:mt-0">
                                    <Image src={bookImage} alt="Book cover"/>
                                </div>
                            </Card>
                            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                                <CardHeader
                                    title="Навыки"
                                    description="Список основных навыков которые я применяю при разработке проектов."
                                    className=""
                                />
                                <ToolboxItems items={toolboxItems} className=""/>
                                <ToolboxItems items={toolboxItems} className="mt-6"
                                              itemsWrapperClassName="-translate-x-1/2"/>

                            </Card>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
                            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                                <CardHeader
                                    title="Хобби"
                                    description="Мои интересы и хобби, не связанные с программированием."
                                    className="px-6 py-6 "
                                />
                                <div className="relative flex-1">
                                    {hobbies.map(hobby => (
                                        <div key={hobby.title}
                                             className="inline-flex absolute items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                                             style={{
                                                 left: hobby.left,
                                                 top: hobby.top
                                             }}>
                                            <span className="font-medium text-gray-950">{hobby.title}</span>
                                            <span>{hobby.emoji}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                                <Image
                                    src={mapIcon}
                                    alt="map"
                                    className="h-full w-full object-cover object-left-top"/>
                                <div className="absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
        size-20 rounded-full bg-gradient-to-r
        from-emerald-300 to-sky-400
        after:content-[''] after:absolute
        after:inset-0 after:outline
        after:outline-2 after:-outline-offset-2
        after:rounded-full
        after:outline-gray-950/30">
                                    <Image src={smileMemoji} alt="smiling memoji" className="size-20"/>
                                </div>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </section>);
};

















