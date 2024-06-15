
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
export default function Events() {
  return (
    <div className='p-0 m-0'>

        <Navbar color="black" />

        {/*explore section*/}
        <section className='mb-12'>

            {/*top section*/}
            <div className='mx-auto items-center p-16 py-24 xl:py-40 mb-12 justify-between bg-[url("../images/kathmandu-temple 1.png")] text-white flex flex-col gap-6' style={{backgroundImage:"url('../images/kathmandu-temple 1.png')"}}>

 <h2 className='text-[54px] font-bold'>Events</h2>

            </div>

            <h1 className='p-5 font-bold text-3xl'>UpComing Events</h1>
            {/*main body section*/}
            <div className='p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto'>
             
            <div className='shadow-xl border rounded-sm'>
              <div className='h-[300px]'>
              <img 
              className='w-full h-full object-cover'
              src="https://th.bing.com/th/id/OIP.eu_xy0KMhvmJ-38szQIftAHaEK?pid=ImgDet&rs=1" alt="" />
              </div>
            <div className='p-3'>
                        <h1 className='font-bold text-2xl'>Haritalika Teej</h1>
                            <p className='text-sm '>Join us for an enchanting celebration of Teej at the prestigious White House Party Palace! Teej is a vibrant and joyous festival celebrated by women to honor the sacred bond of marriage ...</p>
                            <p>Type: Festival</p>
                            <p>location: Pokhara</p>
                            <p>On: 2073/09/18</p>
                            <p>venue: WhiteHouse, Pokhara</p>
            </div>
            </div>

            <div className='shadow-xl border rounded-sm'>
              <div className='h-[300px]'>
              <img 
              className='w-full h-full object-cover'
              src="https://www.indiastudychannel.com/attachments/Resources/175295-4-Christmas-decoration-EA.jpg" alt="" />
              </div>
            <div className='p-3'>
                        <h1 className='font-bold text-2xl'>Celebration of the Chritmas Day at Bhatbhateni</h1>
                            <p className='text-sm '>The celebration of Christmas is a joyous and festive time that brings together people from all walks of life to commemorate the birth of Jesus Christ...</p>
                            <p>Type: Festival</p>
                            <p>location: Pokhara</p>
                            <p>On: 2073/12/25</p>
                            <p>venue: Bhatbhateni, NewRoad-Pokhara</p>
            </div>
            </div>

            <div className='shadow-xl border rounded-sm'>
              <div className='h-[300px]'>
              <img 
              className='w-full h-full object-cover'
              src="https://th.bing.com/th/id/R.2eb7a9d54dc2864772cba61bf25add05?rik=wkoal5lhI2f4pQ&pid=ImgRaw&r=0" alt="" />
              </div>
            <div className='p-3'>
            <h1 className='font-bold text-2xl'>Indra Jatra celebration at Basantapur Darbar Square</h1>
              <p className='text-sm'>Join us for an unforgettable celebration at Basantapur Durbar Square in Kathmandu as we commemorate the vibrant festival of Indrajatra...</p>
              <p>location: Kathmandu </p>
              <p>On: 2023/09/23=8</p>
              <p>venue: Basantapur Darbaur Square</p>
            </div>
            </div>

            </div>

            <h1 className='p-5 font-bold text-3xl'>You might be Interested In</h1>
            <div className='p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto'>
            <div className='shadow-xl border rounded-sm'>
              <div className='h-[300px]'>
              <img 
              className='w-full h-full object-cover'
              src="https://th.bing.com/th/id/R.f1ac25cbf947d91e5243600378a1ab4c?rik=n8HRb9Z9ZROhMA&pid=ImgRaw&r=0" alt="" />
              </div>
            <div className='p-3'>
                        <h1 className='font-bold text-2xl'>Chasing Sunrise: Methlang Run 25k | 5k FunRun | 1K Family FunRun</h1>
                            <p className='text-sm '>Join us for an enchanting celebration of Teej at the prestigious White House Party Palace! Teej is a vibrant and joyous festival celebrated by women to honor the sacred bond of marriage ...</p>
                            <p>Type: Fun</p>
                            <p>location: Pokhara</p>
                            <p>On: 2073/05/18</p>
                            <p>venue: Pokhara-5, Manakamana Mandir</p>
            </div>
            </div>



            </div>
        </section>

        <Footer />

    </div>
  )
}
