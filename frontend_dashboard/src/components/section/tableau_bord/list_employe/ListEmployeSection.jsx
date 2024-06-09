import LineEmploye from './LineEmploye'

function ListEmployeSection () {
  return (
    <>
      <div className='bg-white flex flex-col gap-6 shadow-md h-fit px-8 pt-8 pb-6 rounded-section'>
        {/* Head Section */}
        <div className='flex flex-col w-full justify-between'>
          <h2 className='text-h2 font-arial-rounded'>Liste des  Employés</h2>
          <p className='font-gothic text-sm flex flex-row gap-1'><p>6</p> Employés au sein de mon Entreprise</p>
        </div>

        {/* Liste Employés */}
        <div className='flex flex-col gap-5'>
          <LineEmploye src='/avatar2.png' name='Marjorie DAVID' />
          <LineEmploye src='/avatar7.png' name='Mohamed Larbi EL BAIDI' />
          <LineEmploye src='/avatar1.png' name='Mattéo ROSSI' />
          <LineEmploye src='/avatar6.png' name='Ilona BOURSERIE' />
          <LineEmploye src='/avatar5.png' name='Anaïs AKA' />
          <LineEmploye src='/avatar3.png' name='Jennifer BONDIL' />

        </div>
      </div>
    </>
  )
}

export default ListEmployeSection
