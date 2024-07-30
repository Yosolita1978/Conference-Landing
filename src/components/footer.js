import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";

function Footer() {
  const iconsTab = [
    { icon: <FaLinkedinIn /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    
  ];
  return (
    <>
      <footer className="bg-white sticky bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left side */}
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-[15px] font-medium text-[#646464] md:mr-8">
              Take your technical training to the next level with TechConMe
            </p>
            <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start md:mr-8 mt-4 md:mt-0">
              {iconsTab.map(({ icon }, index) => (
                <div
                  key={index}
                  className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ffac1c] hover:text-white"
                  style={{ transition: "all 0.3s" }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[16px] font-medium text-[#646464] mt-4 md:mt-0">
              Privacy Policy | © {new Date().getFullYear()} Cristina Rodriguez
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;