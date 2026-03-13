import { useState } from 'react';
import axios from 'axios';

const CropForm = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('cropData');
    return saved ? JSON.parse(saved) : {
      state: '', district: '', year: '', month: '',
      N: '', P: '', K: '', pH: ''
    };
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => {
      const updated = { ...prev, [e.target.name]: e.target.value };
      localStorage.setItem('cropData', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/recommend_crop/', formData);
    setResult(res.data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-light p-6 rounded-xl shadow">
      {['state', 'district', 'year', 'month', 'N', 'P', 'K', 'pH'].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field.toUpperCase()}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      ))}
      <button type="submit" className="w-full bg-secondary text-white text-xl px-10 py-2 rounded hover:bg-accent">
        Predict Crop
      </button>

      {result && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p><strong>🌾 Recommended Crop:</strong> {result.recommended_crop}</p>
          <p>🌍 {result.state}, {result.district}</p>
          <p>☁️ Temperature: {result.predicted_temperature} °C</p>
          <p>🌧 Rainfall: {result.predicted_rainfall} mm</p>
        </div>
      )}
    </form>
  );
};

export default CropForm;
