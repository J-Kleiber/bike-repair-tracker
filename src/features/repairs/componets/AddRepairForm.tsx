// src/features/repairs/components/AddRepairForm.tsx
import { useState } from 'react';
import { useRepairContext } from '../RepairContext';

export default function AddRepairForm() {
  // We get the addRepair function from context
  const { addRepair } = useRepairContext();

  // Local form state (controlled inputs)
  const [partName, setPartName] = useState('');
  const [cost, setCost] = useState('');
  const [kmAtInstall, setKmAtInstall] = useState('');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault(); // prevents page reload

    // Very basic validation
    if (!partName.trim() || !cost || !kmAtInstall) {
      alert('Please fill in all fields');
      return;
    }

    // Convert strings to numbers
    const costNum = parseFloat(cost);
    const kmNum = parseInt(kmAtInstall, 10);

    if (isNaN(costNum) || isNaN(kmNum) || costNum <= 0 || kmNum < 0) {
      alert('Please enter valid positive numbers for cost and kilometers');
      return;
    }

    // Call the context function!
    addRepair({
      partname: partName.trim(),
      cost: costNum,
      kmAtInstall: kmNum,
    });

    // Reset form
    setPartName('');
    setCost('');
    setKmAtInstall('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-lg mx-auto mt-8"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
        Add New Repair / Part
      </h2>

      {/* Part Name */}
      <div className="mb-5">
        <label
          htmlFor="partName"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Part Name
        </label>
        <input
          id="partName"
          type="text"
          value={partName}
          onChange={(e) => setPartName(e.target.value)}
          placeholder="e.g. Chain, Brake pads, Tires"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Cost */}
      <div className="mb-5">
        <label
          htmlFor="cost"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Cost (€)
        </label>
        <input
          id="cost"
          type="number"
          step="0.01"
          min="0.01"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="e.g. 45.50"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* KM at Install */}
      <div className="mb-6">
        <label
          htmlFor="kmAtInstall"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Kilometers at Installation
        </label>
        <input
          id="kmAtInstall"
          type="number"
          min="0"
          value={kmAtInstall}
          onChange={(e) => setKmAtInstall(e.target.value)}
          placeholder="e.g. 12500"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Repair
      </button>
    </form>
  );
}