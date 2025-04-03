import React from 'react';

function Donate() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B256E] to-[#88C641] px-4 sm:px-6 lg:px-8 pt-24"> {/* pt-24 adds space below fixed navbar */}
      <div className="max-w-3xl mx-auto">
        {/* White card container - now properly positioned below navbar */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mt-4"> {/* Added mt-4 for extra spacing */}
          {/* Header Section */}
          <div className="bg-[#2B256E] p-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
              CHANGING <span className="text-[#88C641]">GENERATIONS</span>
            </h1>
            <p className="mt-2 text-lg text-white opacity-90">
              Support youth empowerment through M-Pesa
            </p>
          </div>

          {/* Donation Info Section */}
          <div className="p-6 md:p-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-[#2B256E] mb-6 text-center">
                M-PESA DONATION
              </h2>
              
              <div className="space-y-4">
                {/* Paybill Number */}
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">PAYBILL NUMBER</p>
                  <div className="flex items-center justify-between bg-white p-3 rounded-md border-2 border-[#2B256E]">
                    <span className="text-lg font-mono font-bold">600100</span>
                    <button 
                      onClick={() => copyToClipboard('600100')}
                      className="bg-[#2B256E] text-white px-2 py-1 rounded text-sm hover:bg-[#88C641] transition"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Account Number */}
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">ACCOUNT NUMBER</p>
                  <div className="flex items-center justify-between bg-white p-3 rounded-md border-2 border-[#2B256E]">
                    <span className="text-lg font-mono font-bold">0100007188859</span>
                    <button 
                      onClick={() => copyToClipboard('0100007188859')}
                      className="bg-[#2B256E] text-white px-2 py-1 rounded text-sm hover:bg-[#88C641] transition"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Instructions */}
                <div className="pt-4">
                  <h3 className="font-bold text-[#2B256E] mb-2 text-sm">HOW TO DONATE:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                    <li>Go to <strong>Lipa na M-Pesa</strong></li>
                    <li>Select <strong>Paybill</strong></li>
                    <li>Enter Paybill: <strong>600100</strong></li>
                    <li>Enter Account: <strong>0100007188859</strong></li>
                    <li>Enter amount & PIN</li>
                    <li>Confirm and send</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-[#2B256E] text-white px-4 py-2 rounded-full text-sm">
                <span className="mr-2">📞</span>
                <span>CONTACT: 0702868059</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;