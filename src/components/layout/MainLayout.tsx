import Header from './Header';
import Sidebar from './Sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-24 px-8 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}