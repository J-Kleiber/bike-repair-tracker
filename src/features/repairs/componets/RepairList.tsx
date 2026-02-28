// src/features/repairs/components/RepairList.tsx
import { useRepairContext } from '../RepairContext';

export default function RepairList() {
    // object desctruction, its just same as const ctx = useRepairContext(); -> const r = ctx.repairs
  const { repairs } = useRepairContext(); 

  if (repairs.length === 0) {
    return (
      <div className="mt-12 text-center py-10 text-gray-500 dark:text-gray-400">
        <p className="text-xl font-medium">No repairs logged yet</p>
        <p className="mt-2">Use the form above to add your first part!</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
        Logged Repairs ({repairs.length})
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Part
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Cost (€)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                KM at Install
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Added
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {repairs.map((repair) => (
              <tr key={repair.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {repair.partname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {repair.cost.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {repair.kmAtInstall.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {repair.dateAdded
                    ? new Date(repair.dateAdded).toLocaleDateString()
                    : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}