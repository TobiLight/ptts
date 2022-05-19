import { Form } from "@remix-run/react"

export const ShopItem = ({ image, title, inStock, qty = 1 }: { image: string, title: string, inStock: boolean, qty: number }): JSX.Element => {
    return (
        <div className="w-full">
            <div className="relative w-full h-[500px] md:h-[250px] rounded" style={{ background: `url(${image}) no-repeat center center`, backgroundSize: 'cover' }}>
                <p className="bg-[#ffd800] px-3 py-1 absolute bottom-0 left-0 w-full text-center font-semibold text-sm">{title}</p>
            </div>
            <div className="grid items-center shadow-lg px-3 py-5 rounded-b">
                <Form method="get" className="grid grid-cols-2 gap-y-1">
                    <p className="text-sm font-semibold md:tex-sm">Stock: <span>4</span></p>
                    <div className="flex justify-end gap-x-4 md:gap-x-0 md:justify-between items-center">
                        <p className="text-sm font-semibold md:tex-sm">QTY</p>
                        <button className="px-3 rounded bg-[#1a8f7a] text-[#fff]"> - </button>
                        <p>{qty}</p>
                        <button className="px-3 rounded bg-[#1a8f7a] text-[#fff]"> + </button>
                    </div>
                </Form>
                <div className="mt-4">
                    {inStock ? <Form method="post" className="w-full">
                        <button className="w-full py-2 px-3 text-sm font-bold bg-[#1a8f7a] text-white shadow-md rounded">Add to cart</button>
                    </Form> : <button className="w-full py-2 px-3 text-sm font-bold bg-[#94d7cb] text-white shadow-md rounded cursor-not-allowed" disabled>Out of stock</button>}
                </div>
            </div>
        </div>
    )
}