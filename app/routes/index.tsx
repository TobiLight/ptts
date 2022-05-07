import { Form, Link } from '@remix-run/react';
import heroBg from '../../public/images/hero-bg.jpg'
import mentalHealthImage from "../../public/images/mental-health.jpg"
import stigma from "../../public/images/stigma.png"
import summercode from "../../public/images/summer-code.jpeg"
import localpttsbg from "../../public/images/localpttsbg.jpg"

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <main className="relative min-h-screen h-full pt-[80px] md:pt-0">
        <section style={{ background: `url(${heroBg})`, width: '100%', height: 400, backgroundSize: 'cover', backgroundPosition: 'center' }} className="hero-section">
          <div className='lg:pl-10 max-w-lg'>
            <h1 className='hidden lg:block text-[40px] text-white lg:mb-8'>
              Get support
              <br />
              for your
              <br />
              <span className='text-[#FFD800] italic font-bold'>mental health</span>
            </h1>
            <p className="text-white text-[16px] px-8 sm:px-0 lg:text-xl">
              We are the only non-profit organization that focuses on empowering and communicating with youths and families in every community in Nigeria who need educational, moral, employment and health support to lift themselves out of poverty and become self-reliant.
            </p>
          </div>
        </section>

        <section className='bg-[#FFD800]'>
          <div className="flex flex-col-reverse lg:flex-row md:gap-x-[70px] justify-between">
            <div className='rounded-md md:max-w-3xl  mx-auto p-10 lg:p-0 lg:mx-0 flex items-center'>
              <img src={mentalHealthImage} alt="Mental Health Awareness" className='object-cover w-full hh-auto rounded-md' />
            </div>
            <div className="grid gap-y-4 lg:gap-y-10 lg:py-[150px] lg:mr-5">
              <div className="p-5 sm:p-[50px] lg:p-0">
                <h1 className='text-2xl lg:text-4xl font-semibold mb-6'>You deserve a mentally healthier <br /> <span className='font-bold text-green-ptts italic'>environment.</span></h1>
                <p className='text-sm text-md lg:text-xl text-[18px]'>We dream of building a future where your mental health doesn’t get in the way of achieving your dreams and thriving within your communities. We do this by spreading awareness to end the stigma, empowering you to support yourself or others, and collaborating across sectors for solutions that last.
                  <br />
                  <br />
                  We believe this—and so do the people and partners we’ve helped and worked with along the way!</p>
              </div>

              <div className="grid md:grid-cols-2 lg:flex lg:flex-wrap gap-y-6 justify-center lg:justify-between w-full">
                <div className='text-center'>
                  <h1 className='text-green-ptts text-[50px] mb-3'>100,000+</h1>
                  <p className='font-semibold'>Social media followers</p>
                </div>
                <div className='text-center'>
                  <h1 className='text-green-ptts text-[50px] mb-3'>30+</h1>
                  <p className='font-semibold'>Activities</p>
                </div>
                <div className='text-center'>
                  <h1 className='text-green-ptts text-[50px] mb-3'>14</h1>
                  <p className='font-semibold'>Partners</p>
                </div>
                <div className='text-center'>
                  <h1 className='text-green-ptts text-[50px] mb-3'>4</h1>
                  <p className='font-semibold'>Chapters nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-[50px] px-[25px]'>
          <div className='px-8 pb-14'>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>View latest</h1>
            <span className='w-[80px] h-[5px] bg-[#ffd800] mx-auto block mt-[30px]'></span>
          </div>

          <div className="max-w-[450px] mx-auto sm:max-w-full grid gap-y-[70px] sm:grid-cols-2 sm:place-items-center md:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:flex-wrap lg:place-items-center lg:gap-x-[2%]">
            <div className='relative bg-gray-100 w-[100%] sm:w-[95%] md:w-[90%] lg:w-[20%] h-[350px] md:h-[100%] grid rounded drop-shadow-md'>
              <div className='absolute right-0 top-0 bg-[#ffd800] p-[5px] max-w-[130px] rounded-bl'>
                <p className='text-gray-600 font-bold text-xs'>Upcoming events</p>
              </div>
              <div className='w-full h-[200px]'>
                <img src={summercode} alt="Symptoms and Stigma" className='object-cover w-full h-full' />
              </div>
              <div className='p-[10px] grid items-start justify-between ]'>
                <p className='text-[13px] w-[100%] md:text-[13px] mb-3'>PTTS is giving kids between ages of 9 -13 an opportunity to learn Web Development this summer.</p>
                <Form method='get' className='flex items-end'>
                  <button className='font-bold text-[14px] lg:text-[14px] border-2 hover:p-[7px] rounded border-[#ffd800] p-[7px] transition-all ease-in hover:bg-[#ffd800] hover:text-gray-600'>Read more</button>
                </Form>
              </div>
            </div>

            <div className='relative bg-gray-100 w-[100%] sm:w-[95%] md:w-[90%] lg:w-[20%] h-[350px] md:h-[100%] grid rounded drop-shadow-md'>
              <div className='absolute right-0 top-0 bg-[#ffd800] p-[5px] max-w-[130px] rounded-bl'>
                <p className='text-gray-600 font-bold text-xs'>Blog</p>
              </div>
              <div className='w-full h-[200px]'>
                <img src={stigma} alt="Symptoms and Stigma" className='object-cover w-full h-full' />
              </div>
              <div className='p-[10px] grid items-start justify-between ]'>
                <p className='text-[13px] w-[100%] md:text-[13px] mb-3'>PTTS is giving kids between ages of 9 -13 an opportunity to learn Web Development this summer.</p>
                <Form method='get' className='flex items-end'>
                  <button className='font-bold text-[14px] lg:text-[14px] border-2 hover:p-[7px] rounded border-[#ffd800] p-[7px] transition-all ease-in hover:bg-[#ffd800] hover:text-gray-600'>Read more</button>
                </Form>
              </div>
            </div>


          </div>
        </section>

        <section className="find p-4 sm:p-[50px]">
          <div className="px-6 py-10 md:px-0 flex flex-col-reverse md:grid md:grid-cols-2 md:gap-x-8">

            <div className="grid gap-y-5 items-center gap-x-3 w-full place-items-center md:place-items-start">
              <p className='text-md lg:text-xl'><span className='font-bold'>PTTS</span>, Please Talk To Somebody, is the nation's largest grassroots mental health organization dedicated to building better lives for the millions of Nigerians affected by mental illness.</p>
              <p className='font-bold text-sm'>Find your Local PTTS</p>
              <Form method="post" className='w-full max-w-sm grid'>
                <select name="" id="" className='rounded bg-white border-2 p-3 border-green-ptts w-full'>
                  <option value="Lagos">BY STATE</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Lagos">Oyo</option>
                  <option value="Lagos">Osun</option>
                </select>
                <button className='bg-green-ptts text-white p-4 rounded font-semibold w-full mt-5'>GO</button>
              </Form>
            </div>
            <div className='h-full'>
              <img src={localpttsbg} alt="Local PTTS BG" className='object-cover h-full w-full' />
            </div>
          </div>
        </section>

        <section className="join-community bg-[#74C3D7] p-[50px]">
          <h1 className='text-white font-bold text-2xl lg:text-4xl text-center mb-5'>Connect with your <span className='italic'>community today!</span></h1>
          <div className="grid gap-y-5 justify-center place-items-center text-white lg:max-w-md lg:mx-auto">
            <p className='text-center lg:text-xl'>Our trained professionals can help you put your skills to work! Let us  assist you in discovering a place for you within your community. Whether it is a earning a paycheck or making a significant contribution in a very meaningful way, we can help you to discover your own unique place and create a successful future!</p>
            <button className='rounded-full p-4 text-blue-600 bg-white w-auto'>View community</button>
          </div>
        </section>

        <section className="support-the-community px-8 bg-[#FFD800]">
          <h1 className='text-2xl lg:text-4xl text-center pt-8'>Support the Community<span className='italic'>!</span></h1>
          <div className="grid gap-y-6 items-center justify-center place-items-center mt-5 pb-20">
            <p className='lg:text-xl text-center'>Please Talk To Somebody is a private, non-stock, and non-profit organization, donations and any kind of support would  go a long way to help us run our campaigns! {'<3'} </p>
            <button className='rounded-full p-4 text-green-ptts bg-white w-auto'>Make donation</button>
          </div>
        </section>

        <section className="acrros-the-nation bg-gray-200 py-[50px]">
          <div className='px-8 pb-14'>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>From Next Door To Across The Nation</h1>
            <span className='w-[80px] h-[5px] bg-[#ffd800] mx-auto block mt-[30px]'></span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-y-[60px] md:gap-x-[35px] px-6 md:px-12">
            <div className="bg-white max-w-3xl py-[40px] place-content-start px-[20px] lg:px-[32px] w-[100%] grid gap-y-4 rounded lg:h-[340px]">
              <div className="card-header mb-7 grid justify-center lg:justify-start">
                <h1 className='text-2xl font-semibold'>Find Support</h1>
                <span className='w-[80px] h-[5px] bg-[#ffd800] mx-auto block mt-[20px] lg:mx-0'></span>
              </div>
              <div className='grid gap-y-8'>
                <p className="text-center text-[14px] lg:text-left">If you or someone you know is struggling, you are not alone. There are many support services and treatment options that may help.
                </p>
                <Link to="/find-support" className='text-center font-bold text-xl text-green-ptts lg:text-left'>Read more</Link>
              </div>
            </div>

            <div className="bg-white max-w-3xl py-[40px] place-content-start px-[20px] lg:px-[32px] w-[100%] grid gap-y-4 rounded lg:h-[340px]">
              <div className="card-header mb-7 grid justify-center lg:justify-start">
                <h1 className='text-2xl font-semibold'>Get Involved</h1>
                <span className='w-[80px] h-[5px] bg-[#ffd800] mx-auto block mt-[20px] lg:mx-0'></span>
              </div>
              <div className='grid gap-y-8'>
                <p className="text-center text-[14px] lg:text-left">Get involved and make a difference in the lives of Americans living with mental health conditions.
                </p>
                <Link to="/find-support" className='text-center font-bold text-xl text-green-ptts lg:text-left'>Read more</Link>
              </div>
            </div>

            <div className="bg-white max-w-3xl py-[40px] place-content-start px-[20px] lg:px-[32px] w-[100%] grid gap-y-4 rounded lg:h-[340px]">
              <div className="card-header mb-7 grid justify-center lg:justify-start">
                <h1 className='text-2xl font-semibold'>Advocate for Change</h1>
                <span className='w-[80px] h-[5px] bg-[#ffd800] mx-auto block mt-[20px] lg:mx-0'></span>
              </div>
              <div className='grid gap-y-8'>
                <p className="text-center text-[14px] lg:text-left">Policy change is one major way we can make a difference in the lives of people living with mental health conditions and their families. Limits the...
                </p>
                <Link to="/find-support" className='text-center font-bold text-xl text-green-ptts lg:text-left'>Read more</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
