export const PageBanner = ({ text }: { text: string }): JSX.Element => {
    return (
        <div className="banner h-[70px] md:h-[100px] bg-[#18af7a] bg-gradient-to-r from-[#06824a] text-[#ffd800] text-4xl font-bold grid items-center px-8">
            <h1>{text}</h1>
        </div>
    )
}