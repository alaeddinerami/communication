
interface SettingsModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isVisible, onClose }: SettingsModalProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg text-gray-300">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Chat Settings</h3>
            <p className="text-sm text-gray-400">Manage your chat preferences here.</p>
          </div>
          
          <div>
            <h3 className="font-semibold">Friend Settings</h3>
            <p className="text-sm text-gray-400">Manage friend-related settings here.</p>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
