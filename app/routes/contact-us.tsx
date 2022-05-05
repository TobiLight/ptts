import { Form } from "@remix-run/react";

export default function ContactUs(): JSX.Element {
    return (
        <div className="pt-[80px] lg:pt-0 min-h-screen h-full">
            <div className="banner h-[130px] bg-[#18af7a] bg-gradient-to-r from-[#06824a] text-[#ffd800] text-4xl font-bold grid items-center px-8">
                <h1>Contact Us</h1>
            </div>
            <div className="flex flex-col md:flex-row w-full h-full bg-gray-200">
                <div className="w-full md:w-[40%] px-5 py-8 md:my-20 md:mx-6 bg-[#18af7a] grid gap-y-5 border-t-2 border-[#ffd800] md:border-0">
                    <div className="border-b pb-6 border-white">
                        <p className="mb-4 text-white">Find your local PTTS</p>
                        <Form method="post" className='w-full max-w-sm'>
                            <select name="" id="" className='rounded bg-transparent border-2 p-3 border-white text-white w-full'>
                                <option value="Lagos">BY STATE</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Lagos">Oyo</option>
                                <option value="Lagos">Osun</option>
                            </select>
                            <button className='bg-transparent border-2 border-white text-white p-4 rounded font-semibold w-auto mt-2'>GO</button>
                        </Form>
                    </div>

                    <div className="border-b border-white pb-6 text-white grid gap-y-4">
                        <h3 className="font-semibold text-lg tracking-wider">Call the <span className="font-bold text-xl">PTTS</span> helpline at</h3>
                        <h2 className="text-2xl font-bold">+2349000000000</h2>
                        <p>Or <span>in a crisis</span>, text "PTTS" to 7777</p>
                    </div>

                    <div>
                        <Form>
                            <button className="border-2 p-3 text-white border-white rounded">Donate now</button>
                        </Form>
                    </div>
                </div>
                <div className="w-full bg-white grid p-4 h-auto"></div>
            </div>
        </div>
    )
}