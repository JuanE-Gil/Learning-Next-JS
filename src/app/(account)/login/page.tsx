'use client';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
   <div className='w-full h-full flex items-center justify-center flex-col'>
    <h2 className='text-2xl text-amber-300 sm:text-3xl sm:text-emerald-300 md:text-4xl md:text-red-300'>Login</h2>
    <button className="px-8 py-2 mt-8 rounded bg-blue-400 text-gray-100 focus:outline-none" onClick={handleClick}>Return to home</button>
   </div>
  );
}
