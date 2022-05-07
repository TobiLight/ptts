import { Form } from "@remix-run/react";
import { PageBanner } from "~/components/page-banner";
import pttsmerch1 from "../../../public/images/ptts-merch1.jpeg"
import pttsmerch2 from "../../../public/images/ptts-merch2.jpeg"

export default function Shop(): JSX.Element {
    return (
        <main className="pt-[80px] md:pt-0 min-h-screen h-full">
            <PageBanner text="Shop" />
            <section className="w-10/12 md:max-w-[900px] mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[80px] lg:gap-y-[60px] py-[50px]">
                    <div className="w-full">
                        <div className="relative">
                            <img src={pttsmerch1} alt="PTTS Merch Short sleeve" className="rounded-t relative w-[100%] h-auto" />
                            <p className="bg-[#ffd800] px-3 py-1 absolute bottom-0 left-0 w-full text-center font-semibold">PTTS MERCH</p>
                        </div>
                        <div className="grid items-center shadow-lg px-3 py-5 rounded-b">
                            <div className="grid grid-cols-2 gap-y-1">
                                <p className="text-lg font-semibold md:tex-sm">QTY</p>
                                <div className="flex justify-end gap-x-4 md:gap-x-0 md:justify-between items-center">
                                    <button className="px-3 rounded bg-[#1a8f7a] text-[#fff]"> - </button>
                                    <p>9</p>
                                    <button className="px-3 rounded bg-[#1a8f7a] text-[#fff]"> + </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Form className="w-full">
                                    <button className="w-full py-2 px-3 text-sm font-bold bg-[#1a8f7a] text-white shadow-md rounded">Add to cart</button>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="relative">
                            <img src={pttsmerch2} alt="PTTS Merch Short sleeve" className="rounded-t relative w-[100%] h-auto" />
                            <p className="bg-[#ffd800] px-3 py-1 absolute bottom-0 left-0 w-full text-center font-semibold">PTTS MERCH</p>
                        </div>
                        <div className="grid items-center shadow-lg px-3 py-5 rounded-b">
                            <div className="grid grid-cols-2 gap-y-1">
                                <p className="text-lg font-semibold md:tex-sm">QTY</p>
                                <div className="flex justify-end gap-x-4 md:gap-x-0 md:justify-between items-center">
                                    <button className="px-3 rounded bg-[#1a8f7a] text-[#fff]"> - </button>
                                    <p>9</p>
                                    <button className="px-3 rounded bg-[#1a8f7a] text-[#fff]"> + </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Form className="w-full">
                                    <button className="w-full py-2 px-3 text-sm font-bold bg-[#1a8f7a] text-white shadow-md rounded">Add to cart</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}