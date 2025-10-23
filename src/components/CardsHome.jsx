import {alojamientos as data} from '../data/data'
import {useState , useEffect} from 'react'
function Cards() {

  const [lodging, setLodgings] = useState([]);
  
    useEffect(() => {
      setLodgings(data);
    }, []);
  
  return (
    <div className=' xl:mx-[150px] alojamientos flex flex-wrap align-center justify-center gap-5'>
      {lodging.map((casa,index) => {
        return <article key={index}
          className='w-[400px] md:w-[300px] bg-white hover:scale-105 transition flex flex-col shadow-lg rounded-b-xl'>
          <img src={casa.imagen} alt={casa.nombre} className="w-full rounded-xl h-52 object-cover" />
          <div className='flex justify-between items-center'>
            <div className='p-5 flex flex-col gap-2 flex-grow'>
              <p className='text-sm italic'>{casa.tipo}</p>
              <h2 className='text-xl font-bold'>{casa.nombre}</h2>
              <p className='text-zinc-600 font-medium'>{casa.ubicacion}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-lg font-semibold text-red-500">
                  S/{casa.precioPorNoche}
                </span>
                <span className="text-sm text-zinc-500">/noche</span>
              </div>
            </div>

          </div>
        </article>
      })}
    </div>
  );
}



export default Cards;

