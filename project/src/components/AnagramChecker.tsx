import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const AnagramChecker = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [result, setResult] = useState<boolean | null>(null);

  const checkAnagram = (e: React.FormEvent) => {
    e.preventDefault();
    const str1 = string1.toLowerCase().replace(/\s/g, '');
    const str2 = string2.toLowerCase().replace(/\s/g, '');
    
    if (str1.length !== str2.length) {
      setResult(false);
      return;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    setResult(sortedStr1 === sortedStr2);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Anagram Checker</h2>
      <div className="mb-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-700">
        Try these examples:
        <br />
        First string: "listen" → Second string: "silent"
        <br />
        First string: "debit card" → Second string: "bad credit"
      </div>
      <form onSubmit={checkAnagram} className="space-y-4">
        <div>
          <label htmlFor="string1" className="block text-sm font-medium text-gray-700 mb-1">
            First String
          </label>
          <input
            id="string1"
            type="text"
            value={string1}
            onChange={(e) => setString1(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first string... (e.g., listen)"
          />
        </div>
        <div>
          <label htmlFor="string2" className="block text-sm font-medium text-gray-700 mb-1">
            Second String
          </label>
          <input
            id="string2"
            type="text"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter second string... (e.g., silent)"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Check Anagram
        </button>
      </form>
      {result !== null && (
        <div className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
          result ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {result ? <Check size={20} /> : <X size={20} />}
          <span>
            The strings are {result ? 'anagrams' : 'not anagrams'}!
          </span>
        </div>
      )}
    </div>
  );
};

export default AnagramChecker;