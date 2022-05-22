import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { EyeIcon, EyeInvisibleIcon } from "~/components/icons";
import { PageBanner } from "~/components/page-banner";
import { ShopItem } from "~/components/shopitem";
import pttsmerch1 from "~/../public/images/ptts-merch1.jpeg"
import pttsmerch2 from "~/../public/images/ptts-merch2.jpeg"

type LoaderDataType = {
    id: number,
    title: string,
    image: string,
    qty: number,
}

export const loader: LoaderFunction = async ({ request }) => {
    const data: LoaderDataType[] = [{
        id: 1,
        title: 'PTTS Merch Short Sleeve',
        image: pttsmerch1,
        qty: 3,
    },
    {
        id: 2,
        title: 'PTTS Merch Long Sleeve',
        image: pttsmerch2,
        qty: 2,
    }
    ]
    return data
}

export const action: ActionFunction = async ({ request }) => {
    const form = request.formData()
    const increment = (await form).get('increment')
    const decrement = (await form).get('decrement')
    const cartVisibility = (await form).get('cart')

    // if (cartVisibility === 'show') {
    //     return json({
    //         showCart: true
    //     }, { status: 200 })
    // }
    console.log(increment);
    if (increment !== null) {
        return json(increment, { status: 200 })
    }

    return json({ data: null }, { status: 400 })
}

export default function Shop(): JSX.Element {

    return (
        <main className="pt-[80px] md:pt-[180px] lg:pt-[120px] min-h-screen h-full relative">
            <PageBanner text="Shop" />
            <section className="w-10/12 md:max-w-[900px] mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px] lg:gap-x-[30px] lg:gap-y-[60px] py-[50px]">
                    <ShopItem image={pttsmerch1} title={"PTTS Merch Short sleeve"} inStock={true} qty={1} />
                    <ShopItem image={pttsmerch2} title={"PTTS Merch Long sleeve"} inStock={true} qty={1} />
                </div>
            </section>
        </main>
    )
}