import { Form, Link } from '@remix-run/react';
import heroBg from '../../public/images/hero-bg.jpg'
import mentalHealthImage from "../../public/images/mental-health.jpg"
import stigma from "../../public/images/stigma.png"
import codecamp from "../../public/images/codecamp.jpg"

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <main className="relative min-h-screen h-full pt-[80px] md:pt-0">
        <section style={{ background: `url(${heroBg})`, width: '100%', height: 400, backgroundSize: 'cover', backgroundPosition: 'center' }} className="hero-section">
          <div className='lg:pl-10 max-w-lg'>
            <h1 className='hidden lg:block text-[50px] text-white lg:mb-8'>
              Get support
              <br />
              for your
              <br />
              <span className='text-[#FFD800] italic font-bold'>mental health</span>
            </h1>
            <p className="text-white text-[18px] px-8 sm:px-0 lg:text-2xl">
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
              <div className="p-[50px] lg:p-0">
                <h1 className='text-2xl lg:text-4xl font-semibold mb-6'>You deserve a mentally healthier <br /> <span className='font-bold text-green-ptts italic'>environment.</span></h1>
                <p className='lg:text-xl text-[18px]'>We dream of building a future where your mental health doesn’t get in the way of achieving your dreams and thriving within your communities. We do this by spreading awareness to end the stigma, empowering you to support yourself or others, and collaborating across sectors for solutions that last.
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

          <div className="grid gap-y-[70px]">
            <div className='grid gap-y-3'>
              <p className='font-semibold'>Upcoming events</p>
              <div className='bg-gray-100 grid justify-between h-[400px]'>
                <div>
                  <img src={codecamp} alt="Symptoms and Stigma" className='object-cover w-full h-full' />
                </div>
                <div className='px-8 py-3 grid justify-between h-full'>
                  <p>We have a summer code camp coming up for kids between ages of 10 -14</p>
                  <Form method='get' className='flex items-end'>
                    <button className='font-bold text-[18px]'>Read more</button>
                  </Form>
                </div>
              </div>
            </div>

            <div className='grid gap-y-3'>
              <p className='font-semibold'>Blog</p>
              <div className='bg-gray-100 grid justify-between h-[400px]'>
                <div>
                  <img src={stigma} alt="Symptoms and Stigma" className='object-cover w-full h-full' />
                </div>
                <div className='px-8 py-3 grid justify-between h-full'>
                  <p>Battling Mental Health Symptoms and the Consequences of Stigma</p>
                  <Form method='get' className='flex items-end'>
                    <button className='font-bold text-[18px]'>Read more</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="find p-4 sm:p-[50px]">
          <div className="max-w-2xl px-6 py-10 md:px-0">
            <p className='text-xl'><span className='font-bold'>PTTS</span>, Please Talk To Somebody, is the nation's largest grassroots mental health organization dedicated to building better lives for the millions of Nigerians affected by mental illness.</p>
            <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row items-center gap-x-3 mt-8">
              <p className='font-bold text-sm'>Find your Local PTTS</p>
              <Form method="post" className='flex flex-col gap-y-4 items-center gap-x-3 w-full'>
                <select name="" id="" className='rounded bg-white border-2 p-3 border-green-ptts w-full md:w-[300px] max-w-xl'>
                  <option value="Lagos">BY STATE</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Lagos">Oyo</option>
                  <option value="Lagos">Osun</option>
                </select>
                <button className='bg-green-ptts w-full text-white p-4 rounded font-semibold'>GO</button>
              </Form>
            </div>
          </div>

        </section>

        <section className="join-community bg-[#74C3D7] p-[50px]">
          <h1 className='text-white font-bold text-2xl lg:text-4xl text-center mb-5'>Join the <span className='italic'>community!</span></h1>
          <div className="grid gap-y-5 justify-center place-items-center text-white lg:max-w-md lg:mx-auto">
            <p className='text-center lg:text-xl'>Catch all our updates and connect with tens of thousands of mental health champions just like you—who share our dream of a mentally healthier environment!</p>
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
            <div className="bg-white max-w-3xl py-[40px] place-content-start px-[20px] lg:px-[32px] w-[100%] grid gap-y-4 rounded lg:h-[360px]">
              <div className="card-header mb-7 grid justify-center lg:justify-start">
                <h1 className='text-2xl font-semibold'>Find Support</h1>
                <span className='w-[80px] h-[5px] bg-[#ffd800] mx-auto block mt-[20px] lg:mx-0'></span>
              </div>
              <div className='grid gap-y-8'>
                <p className="text-center text-[17px] lg:text-left">If you or someone you know is struggling, you are not alone. There are many support services and treatment options that may help.
                </p>
                <Link to="/find-support" className='text-center font-bold text-xl text-green-ptts lg:text-left'>Read more</Link>
              </div>
            </div>

            <div className="bg-white max-w-3xl py-[40px] place-content-start px-[20px] lg:px-[32px] w-[100%] grid gap-y-4 rounded lg:h-[360px]">
              <div className="card-header mb-7 grid justify-center lg:justify-start">
                <h1 className='text-2xl font-semibold'>Get Involved</h1>
                <span className='w-[80px] h-[5px] bg-[#ffd800] mx-auto block mt-[20px] lg:mx-0'></span>
              </div>
              <div className='grid gap-y-8'>
                <p className="text-center text-[17px] lg:text-left">Get involved and make a difference in the lives of Americans living with mental health conditions.
                </p>
                <Link to="/find-support" className='text-center font-bold text-xl text-green-ptts lg:text-left'>Read more</Link>
              </div>
            </div>

            <div className="bg-white max-w-3xl py-[40px] place-content-start px-[20px] lg:px-[32px] w-[100%] grid gap-y-4 rounded lg:h-[360px]">
              <div className="card-header mb-7 grid justify-center lg:justify-start">
                <h1 className='text-2xl font-semibold'>Advocate for Change</h1>
                <span className='w-[80px] h-[5px] bg-[#ffd800] mx-auto block mt-[20px] lg:mx-0'></span>
              </div>
              <div className='grid gap-y-8'>
                <p className="text-center text-[17px] lg:text-left">Policy change is one major way we can make a difference in the lives of people living with mental health conditions and their families. Limits the...
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
