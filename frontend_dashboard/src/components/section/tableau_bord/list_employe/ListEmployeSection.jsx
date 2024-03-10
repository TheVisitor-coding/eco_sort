import LineEmploye from './LineEmploye'

function ListEmployeSection () {
  return (
    <>
      <div className='bg-white flex flex-col gap-6 shadow-md h-fit px-8 pt-8 pb-6 rounded-section'>
        {/* Head Section */}
        <div className='flex flex-col w-full justify-between'>
          <h2 className='text-h2 font-arial-rounded'>Liste des  Employés</h2>
          <p className='font-gothic text-sm flex flex-row gap-1'><p>X</p> Employés au sein de mon Entreprise</p>
        </div>

        {/* Liste Employés */}
        <div className='flex flex-col gap-5'>
          <LineEmploye src='/avatar.png' name='Eléonore Mathé' />
          <LineEmploye src='/avatar.png' name='Eléonore Mathé' />
          <LineEmploye src='/avatar.png' name='Eléonore Mathé' />
          <LineEmploye src='/avatar.png' name='Eléonore Mathé' />
          <LineEmploye src='/avatar.png' name='Eléonore Mathé' />
          <LineEmploye src='/avatar.png' name='Eléonore Mathé' />

        </div>
      </div>
    </>
  )
}

export default ListEmployeSection
