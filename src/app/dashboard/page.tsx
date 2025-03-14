import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Digital Shelf Link Management System</p>
      </div>
      
      {/* System Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">ESL Devices</h2>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-blue-600">248</div>
            <div className="text-sm text-gray-500">
              <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span> 235 Active</div>
              <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-1"></span> 13 Inactive</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Products</h2>
          <div className="text-3xl font-bold text-purple-600">1,254</div>
          <div className="text-sm text-gray-500">Total Products</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Designs</h2>
          <div className="text-3xl font-bold text-green-600">32</div>
          <div className="text-sm text-gray-500">Active Templates</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Branches</h2>
          <div className="text-3xl font-bold text-orange-600">3</div>
          <div className="text-sm text-gray-500">Total Branches</div>
        </div>
      </div>
      
      {/* Main Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Product Management */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Product Management</h2>
          <p className="text-gray-600 mb-4">Manage your product catalog, update prices, and manage inventory.</p>
          <div className="space-y-2">
            <Link href="/products" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">View Products</div>
              <div className="text-sm text-gray-500">Browse and search your product catalog</div>
            </Link>
            <Link href="/products/new" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">Add New Product</div>
              <div className="text-sm text-gray-500">Create a new product entry</div>
            </Link>
            <Link href="/categories" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">Manage Categories</div>
              <div className="text-sm text-gray-500">Organize your product categories</div>
            </Link>
          </div>
        </div>
        
        {/* ESL Management */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">ESL Management</h2>
          <p className="text-gray-600 mb-4">Monitor and manage your Electronic Shelf Labels.</p>
          <div className="space-y-2">
            <Link href="/esls" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">View ESL Devices</div>
              <div className="text-sm text-gray-500">Check status of all ESL devices</div>
            </Link>
            <Link href="/esls/diagnostics" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">ESL Diagnostics</div>
              <div className="text-sm text-gray-500">Monitor battery levels and signal strength</div>
            </Link>
            <Link href="/esls/assignments" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">ESL Assignments</div>
              <div className="text-sm text-gray-500">Link products to ESL devices</div>
            </Link>
          </div>
        </div>
        
        {/* Store Layout */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Store Layout</h2>
          <p className="text-gray-600 mb-4">Design and manage your store's physical layout.</p>
          <div className="space-y-2">
            <Link href="/layouts" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">View Layouts</div>
              <div className="text-sm text-gray-500">Browse your store layouts</div>
            </Link>
            <Link href="/layouts/editor" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">Layout Editor</div>
              <div className="text-sm text-gray-500">Create or edit store layouts</div>
            </Link>
            <Link href="/layouts/assignments" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">Shelf Assignments</div>
              <div className="text-sm text-gray-500">Assign ESLs to shelves</div>
            </Link>
          </div>
        </div>
        
        {/* Template Design */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Design Templates</h2>
          <p className="text-gray-600 mb-4">Create and manage ESL display templates.</p>
          <div className="space-y-2">
            <Link href="/designs" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">View Templates</div>
              <div className="text-sm text-gray-500">Browse all design templates</div>
            </Link>
            <Link href="/designs/editor" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">Template Editor</div>
              <div className="text-sm text-gray-500">Create new display templates</div>
            </Link>
            <Link href="/designs/preview" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="font-medium">Preview Templates</div>
              <div className="text-sm text-gray-500">Test templates before deployment</div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Recent Updates */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Updates</h2>
        <div className="border-t border-gray-100">
          {[
            { action: 'Price update', item: 'Product #101', user: 'Admin', time: '2h ago' },
            { action: 'New ESL added', item: 'ESL-28734', user: 'John Manager', time: '3h ago' },
            { action: 'New design template', item: 'Summer Sale 2025', user: 'Sarah Designer', time: '5h ago' },
            { action: 'Layout updated', item: 'Main Store Floor', user: 'Admin', time: '6h ago' },
            { action: 'Product added', item: 'Organic Apples', user: 'Mark Staff', time: '1d ago' },
          ].map((update, index) => (
            <div key={index} className="py-3 border-b border-gray-100 hover:bg-gray-50 transition">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium text-gray-800">{update.action}: {update.item}</div>
                  <div className="text-sm text-gray-500">Updated by {update.user}</div>
                </div>
                <div className="text-sm text-gray-500">{update.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* System Health */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">System Health</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-green-50 border border-green-100">
            <div className="text-sm text-gray-500">Server Status</div>
            <div className="font-medium text-green-600 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Operational
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
            <div className="text-sm text-gray-500">MQTT Broker</div>
            <div className="font-medium text-blue-600 flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              Connected
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-green-50 border border-green-100">
            <div className="text-sm text-gray-500">Access Points</div>
            <div className="font-medium text-green-600 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              8/8 Online
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
            View System Logs
          </button>
        </div>
      </div>
    </MainLayout>
  );
}