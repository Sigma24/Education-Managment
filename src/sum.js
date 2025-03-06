import React from 'react';

import { useState } from 'react';

const Sum = () => {
    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")


    const HandleApi = async () => {
        if (!num1 || !num2) {
            console.log("Values are missing");
            return;
        }
    
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/sums?a=${num1}&b=${num2}`);
            const result = await response.json();
    
            // Correctly log the extracted value
            console.log("Result from BACKEND:", result.Result);
    
        } catch (error) {
            console.log(`Error fetching the response from API: ${error}`);
        }
    }
return (
         <div>
            <>
            <div className="flex flex-col items-center p-4 gap-4">
      <input
        type="number"
        placeholder="Enter Number 1"
        value={num1}
        onChange={(e) => setnum1(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Enter Number 2"
        value={num2}
        onChange={(e) => setnum2(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={HandleApi}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calculate Sum
      </button>
    </div>
            </>
            
        </div>
    );
}

export default Sum;
