'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { sharedImages } from "~/shared/index"

const darkThemeSegments = ['about', 'abc', 'novedades']
const isDarkTheme = (path: string) => darkThemeSegments.some(segment => segment === path.split('/')[1])

const Footer = () => {

  const pathname = usePathname()
  const darkTheme = isDarkTheme(pathname)

  return (
    <footer className={`${darkTheme ? 'bg-[#212121] text-white' : 'bg-[#F1F1F1] text-black'} flex flex-row justify-around flex-wrap gap-y-5 py-3 max-[780px]:flex-col max-[780px]:items-center h-[54px]`}>
      {/* <Link href="https://democraciaenred.org" target="_blank">
        <div className="max-w-[300px] h-[54px] flex items-center gap-2">
          <Image
            alt="DER Logo"
            src={sharedImages.der}
            className="block h-2/3 w-auto"
            priority
          />
          <div className="font-raleway text-sm">
            <span>Desarrollado por</span>
            <span className="block">
              <strong className="font-semibold">Democracia en Red</strong>
            </span>
          </div>
        </div>
      </Link>
      <div className="flex flex-row gap-5 justify-center items-center content-center">
        <Link href="https://twitter.com/fundacionDER" target="_blank">
          <Image
            alt="Twitter"
            src={darkTheme ? sharedImages.twitter : sharedImages.twittern}
            className="w-[23px]"
            width={41}
            height={34}
            priority
          />
        </Link>

        <Link href="https://www.instagram.com/democraciaenred/" target="_blank">
          <Image
            alt="Instagram"
            src={darkTheme ? sharedImages.instagram : sharedImages.instagramn}
            className="w-[23px]"
            width={40}
            height={39}
            priority
          />
        </Link>

        <Link href="https://www.youtube.com/channel/UCm5n0zxmfWN0pMuMPxk7psw" target="_blank">
          <Image
            alt="Youtube"
            src={darkTheme ? sharedImages.youtube : sharedImages.youtuben}
            className="w-[23px]"
            width={48}
            height={34}
            priority
          />
        </Link>
      </div>

      <div className="flex flex-row justify-center items-center">
        <Link href="mailto:contacto@democraciaenred.com" target="_blank">
          <p className="font-raleway">contacto@democraciaenred.org</p>
        </Link>
      </div> */}
    </footer>
  )
}

export default Footer