
import demoImage from '@/assets/images/demo.png';
import Image from "next/image";
export const Demo = () => {
  return (
    <div className={'w-100'}>
      <h3>Leg Extension</h3>
      <h6 className={'text-secondary'}>
        Completed Repetition: 4
      </h6>
      <div className={'w-100 text-center mt-3'}>
        <Image src={demoImage} className={'w-25 h-100'} alt={'demo'} />
      </div>
    </div>
  )
}