import PromotionalBanner from '../components/PromotionalBanner'
import * as motion from "motion/react-client"
import Review from '../components/Review'
function Home() {
return (
<>







<header className="mx-5 rounded-3xl relative h-dvh bg-center bg-cover bg-[url(/src/assets/airbnb.jpg)]">
  <div className="absolute rounded-3xl inset-0 bg-black/50 z-0"></div>

  <motion.div   initial={{ opacity: 0, y: 150 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.3 }}
   className="relative z-10 flex flex-col justify-between text-center h-dvh xl:flex-row ">
    <div className=' flex flex-col place-self-center flex-grow justify-center'>
      <p className='hidden xl:block ml-[100px] text-[5.5rem] text-left text-white font-light '>Tu hogar temporal, con recuerdos que duran para siempre.</p>
      <h1 className="text-white text-[4rem] font-bold drop-shadow-lg xl:hidden">Airbnb</h1>
      <p className="text-zinc-300 text-[1.3rem] xl:text-left xl:text-[2.5rem] xl:ml-[100px]">Encuentra tu espacio ideal hoy mismo</p>
    </div>

    <div className='flex gap-5 text-center mb-5 justify-center xl:flex-col xl:justify-center xl:gap-[40px] xl:mr-5'>
      <div className="card min-w-[100px] xl:bg-red-500 xl:rounded-3xl xl:p-4">
        <h4 className='text-[2rem] text-white font-semibold xl:text-[4rem]'>12k+</h4>
        <p className='text-zinc-100 text-[0.75rem] xl:text-[1rem] italic'>Huespedes</p>
      </div>
      <div className="card min-w-[100px] xl:bg-red-500 xl:rounded-3xl xl:p-4">
        <h4 className='text-[2rem] text-white font-semibold xl:text-[4rem]'>2k+</h4>
        <p className='text-zinc-100 text-[0.75rem] xl:text-[1rem] italic'>Reseñas</p>
      </div>
      <div className="card  min-w-[100px] xl:bg-red-500 xl:rounded-3xl xl:p-4">
        <h4 className='text-[2rem] text-white font-semibold xl:text-[4rem]'>4.5k+</h4>
        <p className='text-zinc-100 text-[0.75rem] xl:text-[1rem] italic'>Casas Lujosas</p>
      </div>

    </div>
  </motion.div>
</header>






<section className=" py-[100px] text-center bg-white ">
  <h2 className="text-4xl font-bold text-black mb-4">¿Cómo funciona?</h2>
  <p className='text-zinc-800 italic max-w-4xl place-self-center mx-4'>Desde el primer clic hasta el último día de tu estadía, cada paso está pensado para que encuentres mucho más que un lugar donde dormir: descubras espacios únicos que te hagan sentir en casa y vivas experiencias que realmente conecten contigo.</p>
  <div className="flex  justify-center items-center flex-wrap gap-10 mt-[40px] bg-white text-black">
    <div className="max-w-[200px] bg-red-500 text-white text-center rounded-3xl p-4">
      <img src="/src/assets/decorations/searching-bar.png" className="mx-auto invert  w-[100px] mb-3" />
      <p className="font-semibold text-[1.3rem] mb-2">Explora</p>
      <p className="text-sm text-[1rem]">Encuentra el lugar ideal para ti</p>
    </div>

    <div className="max-w-[200px] text-center bg-red-500 text-white rounded-3xl p-4">
      <img src="/src/assets/decorations/checked.png" className="mx-auto invert  w-[100px] mb-3" />
      <p className="font-semibold  text-[1.3rem] mb-2">Reserva</p>
      <p className="text-sm  text-[1rem]">Haz tu eleccion en segundos</p>
    </div>
    <div className="max-w-[200px] text-center bg-red-500 text-white rounded-3xl p-4">
      <img src="/src/assets/decorations/smiley.png" className="mx-auto invert w-[100px] mb-3" />
      <p className="font-semibold text-[1.3rem] mb-2">Disfruta</p>
      <p className="text-sm text-[1rem]">Vive la experiencia inolvidable</p>
    </div>
  </div>
</section>



<section className='bg-[url(/src/assets/header.jpg)] min-h-[300px] max-w-[1200px] place-self-center bg-cover relative mx-5 rounded-4xl p-4'>
  <div className="absolute rounded-4xl inset-0 bg-black/50 z-0"></div>
  <div className='relative z-10 flex flex-col md:flex-row md:items-start md:justify-between'>
    <div className='flex flex-col md:mt-[40px] md:ml-[30px]'>
      <h2 className='text-center md:text-left text-white font-medium mb-3 text-[1.4rem] md:text-[3rem]'>¿Por que elegirnos?</h2>
      <p className='text-center md:text-left text-zinc-300 italic text-[1rem] md:text-[1rem]'>Porque no solo ofrecemos espacios, sino experiencias pensadas para que te sientas como en casa, estés donde estés.</p>
    </div>
    <div className='flex gap-5 flex-wrap justify-center mt-4 text-center'>
      <div className="card bg-white/10 backdrop-blur-sm w-2/6  border-1 border-zinc-600 p-2 flex flex-col items-center justify-center md:p-6 rounded-4xl">
      <img src="/src/assets/icon/late.png" alt="icono" className='w-[50px] invert mb-3' />
        <p className='text-white font-light'>No hay prisa. Sal cuando estes listo</p>
      </div>

      <div className="card bg-white/10 backdrop-blur-sm w-2/6  border-1 border-zinc-600 p-2 flex flex-col items-center justify-center md:p-6 rounded-4xl">
      <img src="/src/assets/icon/check.png" alt="icono" className='w-[50px] invert mb-3' />
        <p className='text-white font-light'>Reserva segura</p>
      </div>

      <div className="card bg-white/10 backdrop-blur-sm w-2/6  border-1 border-zinc-600 p-2 flex flex-col items-center justify-center md:p-6 rounded-4xl">
      <img src="/src/assets/icon/dollar.png" alt="icono" className='w-[50px] invert mb-3' />
        <p className='text-white font-light'>Precios transparentes</p>
      </div>
    </div>

  </div>
</section>

<Review />
<PromotionalBanner />

</>
);
}

export default Home;