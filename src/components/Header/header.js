import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className='bg-white flex justify-between p-3 sticky top-0 border-b-[2px]
    border-[#ffac1c]'>
      <Link href="/">
        <Image
        className='cursor-pointer'
        style={{marginLeft: "35px"}}
        src="/logo.png"
        width={350/2}
        height={120}
        alt="Logo of the TechConMe conference" />
        </Link>
    <div className='flex gap-4'>
        <Link href="/agenda">
        <p className="text-orange-500 font-semibold hover:text-blue-800 py-4 px-2">Agenda</p></Link>
        <Link href="/speakers">
        <p className="text-orange-500 font-semibold hover:text-blue-800 py-4 px-2">Speakers</p></Link>
        <Link href="/code">
        <p className="text-orange-500 font-semibold hover:text-blue-800 py-4 px-2">Code of Conduct</p></Link>
    </div>
    </div>
  )
}

export default Header