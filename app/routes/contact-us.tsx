import { Form } from "@remix-run/react";

export default function ContactUs(): JSX.Element {
    return (
        <div className="pt-[80px] md:pt-0 min-h-screen h-full">
            <div className="banner h-[130px] bg-[#18af7a] bg-gradient-to-r from-[#06824a] text-[#ffd800] text-4xl font-bold grid items-center px-8">
                <h1>Contact Us</h1>
            </div>
            <div className="flex flex-col-reverse md:flex-row w-full h-full bg-[#f1f1ef] md:border-t-2 border-[#ffd800]">
                <div className="w-full md:w-[40%] px-5 py-8 md:my-20 md:mx-6 bg-[#353434] md:bg-[#18af7a] grid gap-y-5 text-center lg:place-items-start md:text-left h-[max-content]">
                    <div className="border-b pb-6 border-white w-full">
                        <p className="mb-4 text-white">Find your local PTTS</p>
                        <Form method="post" className='w-full max-w-sm flex flex-col gap-y-4'>
                            <select name="" id="" className='rounded bg-transparent border-2 p-3 border-white text-white w-full'>
                                <option value="Lagos">BY STATE</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Lagos">Oyo</option>
                                <option value="Lagos">Osun</option>
                            </select>
                            <button className='bg-transparent border-2 border-white text-white px-3 py-2 md:p-4 rounded font-semibold w-auto md:mt-2'>GO</button>
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
                <div className="w-full bg-white grid p-12 h-auto">
                    <h1 className="text-xl font-semibold md:text-2xl">Contact Us</h1>
                    <p className="text-sm mt-8 lg:text-lg">We want to hear from you! Your questions, comments and concerns are important to us. If you don't see the information you need, please contact us at +2349000000000, Monday through Friday from 10 a.m. to 10 p.m, or email us by completing the form below.</p>

                    <Form method="post" className="mt-10 grid gap-y-5">
                        <label htmlFor="email" className="grid gap-y-2 text-sm font-semibold">
                            E-mail address:
                            <input type="email" id="email" name="email" placeholder="Email address" className="w-full rounded border p-4" />
                        </label>
                        <label htmlFor="confirm-email" className="grid gap-y-2 text-sm font-semibold">
                            Confirm E-mail address:
                            <input type="email" id="confirm-email" name="confirm-email" placeholder="Email address" className="w-full rounded border p-4" />
                        </label>
                        <label htmlFor="firstname" className="grid gap-y-2 text-sm font-semibold">
                            First Name:
                            <input type="text" id="firstname" name="firstname" placeholder="Firstname" className="w-full rounded border p-4" />
                        </label>
                        <label htmlFor="lasttname" className="grid gap-y-2 text-sm font-semibold">
                            Last Name:
                            <input type="text" id="lastname" name="lastname" placeholder="Lastname" className="w-full rounded border p-4" />
                        </label>
                        <label htmlFor="phonenum" className="grid gap-y-2 text-sm font-semibold">
                            Phone Number:
                            <input type="tel" id="phonenum" name="phonenum" placeholder="Phone Number" className="w-full rounded border p-4" />
                        </label>
                        <label htmlFor="phonenum" className="grid gap-y-2 text-sm font-semibold">
                            Subject:
                            <input type="text" id="subject" name="subject" placeholder="Message Subject" className="w-full rounded border p-4" />
                        </label>
                        <label htmlFor="message" className="grid gap-y-2 text-sm font-semibold">
                            Your message:
                            <textarea id="message" cols={30} rows={4} name="message" placeholder="Type your message here..." className="w-full border rounded p-4" />
                        </label>
                        <div className="flex w-full justify-end items-center">
                            <button className="px-4 py-2 w-auto text-white rounded drop-shadow-sm bg-[#18af7a] transition-all ease-in hover:bg-[#12865e]">Send</button>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    )
}