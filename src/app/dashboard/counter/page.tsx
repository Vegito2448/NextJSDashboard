import { CartCounter } from '@/app/shopping-cart';


export const metadata = {
  title: 'Counter Page',
  description: 'Counter Page only a simple page with a counter.',
};

const CounterPage = () => {


  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full bg-slate-100 text-slate-900"
    >
      <span className="font-bold">Products Cart</span>
      <CartCounter value={3} />

    </div>
  );
};
export default CounterPage;