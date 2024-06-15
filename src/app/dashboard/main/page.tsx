import { WidgetsGrid } from '@/components';


export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard for your app',
};

const MainPage = () => {
  return (
    <div
      className="text-black p-2"
    >
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span
        className="text-2xl text-gray-500"
      >
        Data Overview
      </span>

      <div className="flex flex-wrap p-2">
        <WidgetsGrid />
      </div>

    </div>
  );
};

export default MainPage;