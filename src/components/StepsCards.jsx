function StepsCards({title,subtitle,pathImage}) {
  return (
    <>
    <div className="w-[430px] bg-white/20 text-white text-center rounded-xl p-4">
        <img src={pathImage} className="mx-auto invert  w-[140px] mb-3" />
        <p className="font-semibold text-[2rem] mb-2">{title}</p>
        <p className="text-sm text-[1.2rem]">{subtitle}</p>
      </div>
    </>
  )
}

export default StepsCards