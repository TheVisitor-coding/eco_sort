function CardStatistics ({ cardCss, numberCss, infoCss, descriptionCss, iconSrc, number, unit, description }) {
  return (
    <>
      <div className={`flex shadow-lg rounded-3xl ${cardCss}`}>
        <img src={iconSrc} alt='placeholder' />
        <div className={`flex flex-col ${infoCss}`}>
          <span className='flex flex-row justify-start items-end *:font-arial-rounded *:text-green-primary'>
            <p className={`${numberCss}`}>{number}</p>
            {
                { unit } && <p className='text-[2rem] leading-10'>{unit}</p>
            }
          </span>
          <p className={`${descriptionCss} font-gothic font-semibold`}>{description}</p>
        </div>
      </div>
    </>
  )
}

export default CardStatistics
