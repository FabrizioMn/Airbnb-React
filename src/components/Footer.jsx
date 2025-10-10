function Footer() {
return (
<footer className=" h-[150px] flex flex-col mt-5 p-5">
    <div className="flex-1 flex justify-between items-center text-slate-600 border-t-gray-400 border-t-2">
        <a href="/"><img src="/src/assets/icon/icon.png" alt="Logo"
                className='max-w-[30px] object-fit-cover ml-[30px]' /></a>
        <p>Redes</p>
    </div>
</footer>
)
}

export default Footer