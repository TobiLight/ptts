import { PageBanner } from "~/components/page-banner";

export default function AboutUs(): JSX.Element {
    return (
        <main className="pt-[80px] md:pt-[180px] lg:pt-[120px] min-h-screen h-full">
            <PageBanner text="About Us" />

            <div className="grid md:gap-y-8 md:max-w-3xl lg:max-w-4xl mx-auto md:mt-10 md:mb-14">
                <section className="py-[50px] px-10 md:px-[100px] md:shadow md:rounded">
                    <h1 className="text-3xl font-bold mb-6">Objective</h1>
                    <p>We are the only non-profit organization that focuses on empowering and communicating with youths and families in every community in Nigeria who need educational, moral, employment and health support to lift themselves out of poverty and become self-reliant.</p>
                </section>

                <section className="py-[50px] px-10 md:px-[100px] bg-[#343434] text-white md:rounded md:shadow">
                    <h1 className="text-3xl font-bold mb-6">Our Mission</h1>
                    <p>PleaseTalkToSomebody reshape lives by noticing potentials, those in need and creating better futures for them through education, workshops, training, employment, guidance and counseling.</p>
                </section>

                <section className="py-[50px] px-10 md:px-[100px] md:shadow md:rounded">
                    <h1 className="text-3xl font-bold mb-6">Our Vision</h1>
                    <p>PleaseTalkToSomebody exists to help the youths and families facing whatever challenges attain success and thereby lift themselves out of poverty, enrich not only their lives but also the community they live in.</p>
                </section>

                <section className="py-[50px] px-10 md:px-[100px] bg-[#343434] text-white md:rounded md:shadow">
                    <h1 className="text-3xl font-bold mb-6">Our Goal</h1>
                    <p>Our goal is to empower each person to reach their full potential so they may have a successful future, become self-reliant and be able to give back to their community. We also help imporve communities by assisting children engage in extra-curricular activities and programs like tech workshops, sports, art, community service and help adults get and maintain employments..</p>
                </section>
            </div>
        </main>
    )
}