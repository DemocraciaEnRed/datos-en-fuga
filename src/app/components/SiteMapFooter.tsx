import Image from 'next/image'
import derLogo from '~/shared/der2.png'
import odiaLogo from '~/shared/odia.svg'
import NavLinks from './NavLinks'

const SiteMapFooter = () => {
    return (
        <div className="flex flex-col gap-10 sm:justify-between sm:items-center sm:flex-row sm:gap-5 p-6">
            <div>
                <p className='mb-4 text-xl font-roboto text-white'>Un proyecto de</p>
                <div className="flex flex-wrap items-center justify-between sm:justify-normal gap-7">
                    <Image src={derLogo} width={2724} height={742} alt='Democracia en Red' className='w-[176px]' />
                    <Image src={odiaLogo} width={130.35} height={29.61} alt='Democracia en Red' className='w-[130px]' />
                </div>
            </div>
            <ul className="grid grid-cols-3 sm:grid-cols-2 justify-items-center sm:justify-items-start capitalize text-lg whitespace-nowrap gap-4 sm:gap-x-14 md:mr-[10vw] lg:mr-[15vw] text-white">
                <NavLinks />
            </ul>
        </div>
    )
}
export default SiteMapFooter