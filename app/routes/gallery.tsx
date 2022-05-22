import { PageBanner } from "~/components/page-banner";
import image from "~/../public/images/codecamp.jpg"

export default function Index(): JSX.Element {
    return (
        <main className="pt-[80px] md:pt-[180px] lg:pt-[120px] min-h-screen h-full bg-gray-100 grid">
            <PageBanner text={"Gallery"} />
            <div className="mt-4">
                <div className="grid lg:grid-cols-6 gap-10">
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="p-4 bg-white shadow-xl grid row-[span_4_/_span_4]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_6_/_span_6]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_7_/_span_7]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_5_/_span_5]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_7_/_span_7]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_6_/_span_6]"></div>

                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_6_/_span_6]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_7_/_span_7]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="p-4 bg-white shadow-xl grid row-[span_4_/_span_4]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_7_/_span_7]"></div>
                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_5_/_span_5]"></div>

                    <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '100%' }} className="shadow-xl p-4 bg-white grid row-[span_6_/_span_6]"></div>
                </div>
            </div>
        </main>
    )
}