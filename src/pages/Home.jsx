import PromotionalBanner from '../components/PromotionalBanner'
import Information from '../components/Information';
import StepsCards from '../components/StepsCards';
function Home() {
return (
<>

<header className=" max-w-[1400px] h-[700px] mx-5 xl:mx-auto rounded-3xl mt-[20px] relative bg-center bg-cover bg-[url(/src/assets/airbnb.webp)]">
  <div className="absolute rounded-3xl inset-0 bg-black/50 z-0"></div>
  <div className="relative z-10 flex flex-col justify-between text-center h-full xl:flex-row">
    <div className=' flex flex-col place-self-center flex-grow justify-center'>
      <p className='hidden xl:block ml-[100px] text-[4rem] text-left text-white font-light '>Tu hogar temporal, con recuerdos que duran para siempre.</p>
      <h1 className="text-white text-[4rem] font-bold drop-shadow-lg xl:hidden">Airbnb</h1>
      <p className="text-zinc-300 text-[1.3rem] xl:text-left xl:text-[2rem] xl:ml-[100px]">Encuentra tu espacio ideal hoy mismo</p>
    </div>

    <div className='flex gap-5 text-center mb-5 justify-center xl:flex-col xl:justify-center xl:gap-[40px] xl:mr-5'>
      <div className="card min-w-[100px] xl:bg-red-500 xl:rounded-3xl xl:p-4 ">
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
  </div>
</header>

<Information highcontent={"Los mejores hogares"} info={"Descubre espacios donde el confort y la elegancia se encuentran. Tu próxima estadía inolvidable comienza aquí"}/>


<section className=" py-[150px] text-center bg-red-700  ">
  <div className=' max-w-[1400px] mx-auto'>
    <div className='mx-5 md:mx-1 text-left'>
      <p className="text-5xl text-white">Haz que cada momento cuente:</p>
      <p className="text-5xl text-white">desde el primer vistazo hasta el último amanecer.</p>
    </div>
    <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-5 md:gap-[50px] mt-[70px] mx-5 md:mx-0  text-black">
      <StepsCards title="Explora" subtitle="Encuentra el lugar ideal para ti" pathImage="src/assets/decorations/searching-bar.png"/>
      <StepsCards title="Reserva" subtitle="Haz tu eleccion en segundos" pathImage="src/assets/decorations/checked.png"/>
      <StepsCards title="Disfruta" subtitle="Vive la experiencia inolvidable" pathImage="src/assets/decorations/smiley.png"/>
    </div>
  </div>
</section>

<PromotionalBanner/>
</>
);
}

export default Home;