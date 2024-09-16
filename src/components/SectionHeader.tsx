export const SectionHeader = ({
                                  title,
                                  eyebrow,
                                  description,
                              }: {
    title: string;
    description: string;
    eyebrow: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="
                                uppercase
                                font-semibold
                                tracking-widest
                                bg-gradient-to-r
                                from-emerald-300
                                to-sky-400
                                text-transparent
                                bg-clip-text
                                text-center"
                >
                    {eyebrow}
                </p>
            </div>
            <h2 className="
                            text-3xl
                            text-center
                            mt-6
                            md:text-5xl
                            font-serif
                            "
            >
                {title}
            </h2>
            <p className="
                            text-center
                            lg:text-xl
                            text-white/60
                            mt-4
                            md:text-lg
                            max-w-md
                            mx-auto"
            >
                {description}
            </p>
        </>
    )
}