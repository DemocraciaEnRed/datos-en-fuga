'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Color = 'black'

const darkThemeSegments = ['about', 'abc', 'eventos']
const isDarkTheme = (path: string) => darkThemeSegments.some(segment => segment === path.split('/')[1])

const Footer = () => {

  const pathname = usePathname()
  const darkTheme = isDarkTheme(pathname)

  return (
    <footer className={`${darkTheme ? 'bg-[#212121] text-white' : 'bg-[#F1F1F1] text-black'} flex flex-row justify-around flex-wrap gap-y-5 py-3 max-[425px]:flex-col max-[425px]:items-center`}>
      <div>
        <Link href="https://democraciaenred.org" target="_blank">
          {
            darkTheme ?
              <Image
                alt="DER Logo"
                src="/shared/der.png"
                width={300}
                height={54}
                priority
              /> :
              <Image
                alt="DER Logo"
                src="/shared/dern.png"
                width={300}
                height={54}
                priority
              />
          }
        </Link>
      </div>

      <div className="flex flex-row gap-5 justify-center items-center content-center">
        <Link href="https://twitter.com/fundacionDER" target="_blank">
          <Image
            alt="Twitter"
            src={`${darkTheme ? "/shared/twitter.png" : "/shared/twittern.png"}`}
            width={23}
            height={16}
            priority
          />
        </Link>

        <Link href="https://www.instagram.com/democraciaenred/" target="_blank">
          <Image
            alt="Instagram"
            src={`${darkTheme ? "/shared/instagram.png" : "/shared/instagramn.png"}`}
            width={23}
            height={16}
            priority
          />
        </Link>

        <Link href="https://www.youtube.com/channel/UCm5n0zxmfWN0pMuMPxk7psw" target="_blank">
          <Image
            alt="Youtube"
            src={`${darkTheme ? "/shared/youtube.png" : "/shared/youtuben.png"}`}
            width={23}
            height={16}
            priority
          />
        </Link>
      </div>

      <div className="flex flex-row justify-center items-center">
        <Link href="mailto:contacto@democraciaenred.com" target="_blank">
          <p className="font-raleway">contacto@democraciaenred.com</p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer