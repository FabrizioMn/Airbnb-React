import {Link} from 'react-router'

function NavBar() {

  return (
    <div className='nav bg-white flex items-center justify-between'>
      <a href="/"><img src="/src/assets/icon/icon.png" alt="Logo" className='max-w-[30px] object-fit-cover ml-[30px]' /></a>
        <ul className='text-zinc-800 flex justify-center gap-5 p-4 font-semibold flex-grow'>
            <li className='transition hover:text-red-500 px-5 py-1'><Link to="/">Home</Link></li>
            <li className='transition hover:text-red-500 px-5 py-1'><Link to="/explorar">Explorar</Link></li>
            <li className='transition hidden md:block hover:text-red-500 hover:bg-white hover:outline-2 hover:outline-red-500 bg-red-500 px-5 py-1 text-white rounded-xl'><a href="#">Registrate</a></li>
            <li className='transition hidden md:block hover:text-red-500 hover:bg-white hover:outline-2 hover:outline-red-500 bg-red-500 px-5 py-1 text-white rounded-xl'><a href="#">Iniciar Sesion</a></li>
        </ul>
    </div>
  )
}

export default NavBar