import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className='text-2xl text-amber-300 sm:text-3xl sm:text-emerald-300 md:text-4xl md:text-red-300'>Product #{params.productId}</h1>
    </div>
  );
}
