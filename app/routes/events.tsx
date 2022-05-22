import { PageBanner } from "~/components/page-banner";

export default function Index(): JSX.Element {
    return (
        <main className="pt-[80px] md:pt-[180px] lg:pt-[120px] min-h-screen h-full bg-gray-100 grid">
            <PageBanner text={"Events"} />
        </main>
    )
}