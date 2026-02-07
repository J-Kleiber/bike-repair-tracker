// import './App.css'

 export default function App() {
  return (
   <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Bike Repair Tracker
        </h1>
        <p className="text-lg mb-6">
          Track parts, costs, and kilometers until next replacement
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Add First Repair
        </button>
      </div>
    </div>
  );
}
