import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grain from "@/assets/images/grain.jpg"

export const ContactSection = () => {
    return (
        <section id="contacts">
            <div className="py-16 pt-12 lg:py-24 lg:pt-20">
                <div className="container">
                    <div
                        className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                        <div className="absolute inset-0 opacity-5 -z-10" style={{
                            backgroundImage: `url(${grain.src})`
                        }}></div>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                            <div className="">
                                <h2 className="font-serif text-2xl md:text-3xl">Контакты</h2>
                                <p className="text-sm md:text-base mt-2 ">Вы готовы превратить вашу идею в реальный
                                    проект?
                                    Свяжитесь со мной, я могу помочь с этим.</p>
                            </div>
                            <div>
                                <a href="https://t.me/AlexCodeTG" target="_blank" rel="noopener noreferrer">
                                    <button
                                        className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                                        <span className="font-semibold">Связаться</span>
                                        <ArrowUpRightIcon className="size-4"/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};
