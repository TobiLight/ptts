import { Form } from "@remix-run/react";
import { BlogItem } from "~/components/blog-item";
import { PageBanner } from "~/components/page-banner";
import summercode from "../../../public/images/summer-code.jpeg"

export default function Blog(): JSX.Element {
    return (
        <main className="pt-[80px] md:pt-[180px] lg:pt-[120px] min-h-screen h-full">
            <PageBanner text="Blog" />

            <section>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-3 2xl:grid-cols-5 2xl:justify-center 2xl:gap-20 gap-x-8 gap-y-12 py-[50px] px-[30px] xl:px-[120px] 2xl:px-[60px]">
                    <BlogItem category={"Upcoming events"} image={summercode} contentSummary={"PTTS is giving kids between ages of 9 -13 an opportunity to learn Web Development this summer."} />
                    <BlogItem category={"Upcoming events"} image={summercode} contentSummary={"PTTS is giving kids between ages of 9 -13 an opportunity to learn Web Development this summer."} />
                    <BlogItem category={"Upcoming events"} image={summercode} contentSummary={"PTTS is giving kids between ages of 9 -13 an opportunity to learn Web Development this summer."} />
                    <BlogItem category={"Upcoming events"} image={summercode} contentSummary={"PTTS is giving kids between ages of 9 -13 an opportunity to learn Web Development this summer."} />
                    <BlogItem category={"Upcoming events"} image={summercode} contentSummary={"PTTS is giving kids between ages of 9 -13 an opportunity to learn Web Development this summer."} />
                    <BlogItem category={"Upcoming events"} image={summercode} contentSummary={"PTTS is giving kids between ages of 9 -13 an opportunity to learn Web Development this summer."} />
                </div>
            </section>

            <div className="grid justify-center mt-5 mb-10">
                <Form method="get">
                    <button className="bg-[#18af7a] hover:bg-[#207658] transition-all ease-linear text-white rounded p-3 drop-shadow-md">Load more</button>
                </Form>
            </div>
        </main>
    )
}