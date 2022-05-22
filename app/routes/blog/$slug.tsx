import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PageBanner } from "~/components/page-banner";
import image from "~/../public/images/codecamp.jpg"

export const loader: LoaderFunction = async ({ params, request }) => {
    return { params }
}

export default function Index(): JSX.Element {
    return (
        <main className="pt-[80px] md:pt-[180px] lg:pt-[120px] min-h-screen h-full bg-gray-100 grid">
            <section className="md:w-9/12 md:mx-auto bg-white h-[100%] shadow p-3">
                <article className="px-8 pt-12">
                    <div className="grid gap-y-10">
                        <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus. Eget aliquet nibh praesent tristique. Nisi porta lorem mollis aliquam ut porttitor. Vitae turpis massa sed elementum tempus egestas sed. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Lectus nulla at volutpat diam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Id donec ultrices tincidunt arcu non sodales neque. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lobortis feugiat vivamus at augue. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ornare aenean euismod elementum nisi quis eleifend.
                        </p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus. Eget aliquet nibh praesent tristique. Nisi porta lorem mollis aliquam ut porttitor. Vitae turpis massa sed elementum tempus egestas sed. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Lectus nulla at volutpat diam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Id donec ultrices tincidunt arcu non sodales neque. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lobortis feugiat vivamus at augue. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ornare aenean euismod elementum nisi quis eleifend.
                        </p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus. Eget aliquet nibh praesent tristique. Nisi porta lorem mollis aliquam ut porttitor. Vitae turpis massa sed elementum tempus egestas sed. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Lectus nulla at volutpat diam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Id donec ultrices tincidunt arcu non sodales neque. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lobortis feugiat vivamus at augue. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ornare aenean euismod elementum nisi quis eleifend.
                        </p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus. Eget aliquet nibh praesent tristique. Nisi porta lorem mollis aliquam ut porttitor. Vitae turpis massa sed elementum tempus egestas sed. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Lectus nulla at volutpat diam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Id donec ultrices tincidunt arcu non sodales neque. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lobortis feugiat vivamus at augue. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ornare aenean euismod elementum nisi quis eleifend.
                        </p>
                        <div className="flex justify-end text-[12px]">
                            <p>Posted by: John Doe on <span className="font-bold">12/06/2022</span></p>
                        </div>
                    </div>
                </article>
            </section>
            <section className="p-8 mt-10 md:mt-20">
                <h1 className="text-xl font-bold my-10">Related articles</h1>
                <div className="grid gap-y-8 md:grid-cols-3 md:gap-x-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
                    <div className="relative bg-white rounded-b">
                        <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '200px' }} className="rounded-t">
                        </div>
                        <div className="p-3">
                            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet</h1>
                        </div>
                    </div>
                    <div className="relative bg-white rounded-b">
                        <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '200px' }} className="rounded-t">
                        </div>
                        <div className="p-3">
                            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet</h1>
                        </div>
                    </div>
                    <div className="relative bg-white rounded-b">
                        <div style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover', height: '200px' }} className="rounded-t">
                        </div>
                        <div className="p-3">
                            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet</h1>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}