import { Form } from "@remix-run/react"


export const BlogItem = ({ category, image, contentSummary }: { category: string, image: string, contentSummary: string }): JSX.Element => {
    return (
        <div className='relative bg-gray-100 w-full xl:w-[90%] h-[350px] md:h-[100%] grid rounded drop-shadow-md'>
            <div className='absolute right-0 top-0 bg-[#ffd800] p-[5px] max-w-[130px] rounded-bl'>
                <p className='text-gray-600 font-bold text-xs'>{category}</p>
            </div>
            <div className='w-full h-[200px]'>
                <img src={image} alt="Symptoms and Stigma" className='object-cover w-full h-full' />
            </div>
            <div className='p-[10px] grid items-start justify-between ]'>
                <p className='text-[13px] w-[100%] md:text-[13px] mb-3'>{contentSummary}.</p>
                <Form method='get' className='flex items-end'>
                    <button className='font-bold text-[14px] lg:text-[14px] border-2 hover:p-[7px] rounded border-[#ffd800] p-[7px] transition-all ease-in hover:bg-[#ffd800] hover:text-gray-600'>Read more</button>
                </Form>
            </div>
        </div>
    )
}