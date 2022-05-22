import { Form, useFetcher, useTransition } from "@remix-run/react"
import { useEffect } from "react"

export const ShopItem = ({ image, title, inStock, qty = 1 }: { image: string, title: string, inStock: boolean, qty: number }): JSX.Element => {
    const shopFetcher = useFetcher()
    const transition = useTransition()

    console.log(shopFetcher.data);
    useEffect(() => {
        return
    }, [])
    return (
        <div className="w-full">
            <div className="relative w-full h-[500px] md:h-[250px] rounded" style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover' }}>
                <p className="bg-[#ffd800] px-3 py-1 absolute bottom-0 left-0 w-full text-center font-semibold text-sm">{title}</p>
                <p></p>
            </div>
            <div className="grid items-center shadow-lg px-3 py-5 rounded-b">
                <shopFetcher.Form method="post" className="grid grid-cols-2 gap-y-1">
                    {inStock ? (<>
                        <p className="text-sm font-semibold md:tex-sm">Stock: <span>4</span></p>
                        <div className="flex justify-end gap-x-4 md:gap-x-0 md:justify-between items-center">
                            <p className="text-sm font-semibold md:tex-sm">QTY</p>
                            <button name="decrement" className="px-3 rounded bg-[#1a8f7a] text-[#fff]"> - </button>
                            <p>{qty}</p>
                            <button onClick={(event) => {
                                event.preventDefault()
                            }} name="increment" className="px-3 rounded bg-[#1a8f7a] text-[#fff]"> + </button>
                        </div>
                    </>) : null}
                    <div className="currency col-span-2 mt-4">
                        <select name="" id="" className="w-full border rounded p-3">
                            <option value="">Select currency</option>
                            <option value="naira">Naira NGN</option>
                            <option value="usd">USD</option>
                            <option value="euro">Euro</option>
                            <option value="gbp">GBP</option>
                        </select>
                    </div>
                    <div className="mt-4 col-span-2">
                        {!inStock ?
                            <button className="w-full py-2 px-3 text-sm font-bold bg-[#94d7cb] text-white shadow-md rounded cursor-not-allowed" disabled>Out of stock</button>
                            :
                            <button onClick={() => [
                                shopFetcher.submit({ increment: document.querySelector('.increment')?.nodeValue as string }, { method: 'post', action: '/pages/shop' })
                            ]} className="w-full py-2 px-3 text-sm font-bold bg-[#1a8f7a] text-white shadow-md rounded">Add to cart</button>
                        }

                    </div>
                </shopFetcher.Form>
            </div>
        </div>
    )
}