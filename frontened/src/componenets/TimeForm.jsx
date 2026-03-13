import { useState } from 'react';
import axios from 'axios';

const TimeForm = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('timeData');
    return saved ? JSON.parse(saved) : {
      crop_name: '', year: '', state: '', district: ''
    };
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => {
      const updated = { ...prev, [e.target.name]: e.target.value };
      localStorage.setItem('timeData', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/predict_best_time/', formData);
    setResult(res.data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-light p-6 rounded-xl shadow">
      {['crop_name', 'year', 'state', 'district'].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field.replace('_', ' ').toUpperCase()}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      ))}
      <button type="submit" className="w-full bg-secondary text-white text-xl px-4 py-2 rounded hover:bg-accent">
        Predict Best Month
      </button>

      {result && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p><strong>📅 Best Month to Plant:</strong> {result.best_month}</p>
          <p><strong>Crop:</strong> {result.crop_name}</p>
        </div>
      )}
    </form>
  );
};

export default TimeForm;
