import CardStatistics from './CardStatistics'
import { statsCard } from '../../../../data/stats'
import StatsGraphic from './StatsGraphic'

function StatisticsSection () {
  return (
    <>
      <section className='bg-white flex flex-col gap-6 shadow-md h-fit w-2/3 px-8 py-8 rounded-section'>
        <h2 className='text-h2 font-arial-rounded'>Statistiques Générales</h2>
        {/* Statistiques Générales */}
        <div className='flex flex-row gap-4'>
          <CardStatistics iconSrc={statsCard[0].iconSrc} number='45' infoCss={statsCard[0].infoCss} unit={statsCard[0].unit} description={statsCard[0].description} cardCss={statsCard[0].cardCss} numberCss={statsCard[0].numberCss} descriptionCss={statsCard[0].descriptionCss} />
          <div className='flex flex-col gap-1'>
            <CardStatistics iconSrc={statsCard[1].iconSrc} number='22' description={statsCard[1].description} cardCss={statsCard[1].cardCss} numberCss={statsCard[1].numberCss} descriptionCss={statsCard[1].descriptionCss} />
            <CardStatistics iconSrc={statsCard[2].iconSrc} number='39' description={statsCard[2].description} cardCss={statsCard[2].cardCss} numberCss={statsCard[2].numberCss} descriptionCss={statsCard[2].descriptionCss} />
          </div>
          <CardStatistics iconSrc={statsCard[3].iconSrc} number='79' unit={statsCard[3].unit} description={statsCard[3].description} cardCss={statsCard[3].cardCss} numberCss={statsCard[3].numberCss} descriptionCss={statsCard[3].descriptionCss} infoCss={statsCard[0].infoCss} />
        </div>

        {/* Statistiques en Courbes */}
        <div className='flex flex-col'>
          <h3 className='text-xl font-arial-rounded'>Statistiques en Courbes</h3>
          <p className='text-sm text-gothic flex flex-row gap-1'><p className='text-green-primary'>(+5) more </p>in 2024</p>
          <StatsGraphic />
        </div>
      </section>
    </>
  )
}

export default StatisticsSection
