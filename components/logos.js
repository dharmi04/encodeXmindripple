import { Oswald, Roboto } from "next/font/google";
import Image from 'next/image';
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
  });

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
  });

const Logos = () => {
    return ( 
        <div className={` ${oswald.className} flex md:h-screen flex-col  space-y-8 align-middle justify-center`}>
        <div className="flex flex-row items-center flex-wrap gap-x-4 justify-center"> {/* Add flex-wrap and justify-center for mobile responsiveness */}
          <Image src="/Images/mindripple_logo.png" alt="MindRipple Logo" width= {500} height= {500} className="h-[100px] w-[101px]" />
          <Image src="/Images/X.png" alt="x" width= {500} height= {500} className="h-[50px] w-[44px]" />
          <Image src="/Images/Encode_Logo.png" alt="Encode Logo" width= {500} height= {500} className="h-[100px] w-[100px]" />
        </div>
        <div className="flex flex-row font-semibold text-5xl justify-center items-center font-oswald"> {/* Use different font size for mobile and larger screens */}
          <p className="text-green-500 ">Surf</p>
          <p className="text-yellow-500 ">Quest</p>
          <p className="text-green-500 gap-x-2 "> 1.0</p>
        </div>
      </div>
     );
}
 
export default Logos;