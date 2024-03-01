// FormComponent.jsx
import React, { useState } from "react";
import Select from "react-select";
import { Slider } from "@mui/material";


const FormComponent = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    dateOfExpiry: "",
    area: "",
    currentOperator: "",
    service: "",
    speed: 0,
    price: 0,
  });
  const [speedValue, setSpeedValue] = useState(0);
  const [priceValue, setPriceValue] = useState(25);

  const areas = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Rustaq"];
  const areaOptions = areas.map((area) => ({ value: area, label: area }));
  const Operator = ["Ooredoo", "Omantel", "Vodafone"];
  const Serivce = ["Fiber", "5G", "DSL"];
  const prices = [
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40,
  ];
  const speed = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];
  const handleSpeedChange = (event, newValue) => {
    setSpeedValue(newValue);
    setFormData((prevData) => ({
      ...prevData,
      speed: newValue,
    }));
  }
  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
    setFormData((prevData) => ({
      ...prevData,
      price: newValue,
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://api.sheetmonkey.io/form/no4zi7XKpRriFV2kXeLWRz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success (optional)
      console.log('Form submitted successfully!');
      setFormData({
        customerName: "",
        phoneNumber: "",
        dateOfExpiry: "",
        area: "",
        currentOperator: "",
        service: "",
        speed: 0,
        price: 0,
      });
    } else {
      // Handle error
      console.error('Form submission failed:', response.status);
    }
  };


  return (
    <form
      className="max-w-md mx-auto mt-8 p-4 bg-[#715ac5] rounded shadow-md  font-gothamMedium"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          htmlFor="customerName"
          className="block text-sm font-medium text-white"
        >
          Customer Name:
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full shadow-white text-[#715ac5]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-white"
        >
          Phone Number:
        </label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full text-[#715ac5]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="dateOfExpiry"
          className="block text-sm font-medium text-white"
        >
          Date of Expiry:
        </label>
        <input
          type="month"
          id="dateOfExpiry"
          name="dateOfExpiry"
          value={formData.dateOfExpiry}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full text-[#715ac5]"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="area" className="block text-sm font-medium text-white">
          Area:
        </label>
        <Select
          id="area"
          name="area"
          value={areaOptions.find((option) => option.value === formData.area)}
          onChange={(selectedOption) => {
            setFormData((prevData) => ({
              ...prevData,
              area: selectedOption.value,
            }));
          }}
          options={areaOptions}
          className="mt-1 text-[#715ac5]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="currentOperator"
          className="block text-sm font-medium text-white"
        >
          Current Operator:
        </label>
        <select
          id="currentOperator"
          name="currentOperator"
          value={formData.currentOperator}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="" className="text-[#715ac5]"> Select Operator</option>
          {Operator.map((operator) => (
            <option key={operator} value={operator} className="text-[#715ac5]">
              {operator}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="service"
          className="block text-sm font-medium text-white"
        >
          Service:
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="">Select Service</option>
          {Serivce.map((service) => (
            <option
            className="text-[#715ac5]" key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-white text-center "
        >
          Price:
        </label>
        <div className="flex justify-between border-2 border-white px-10 bg-white rounded-md">
        <Slider
          aria-label="{price}"
          defaultValue={25}
          getAriaValueText={(value) => `${value}`}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={1}
          marks={prices}
          value={priceValue}
          onChange={handlePriceChange}
          sx={{ color:"#715ac5" }}
          min={20}
          max={40}
        />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="speed" className="block text-sm font-medium text-white text-center">
          Speed (Mbps):
        </label>
        <div className="flex justify-between border-2 border-white px-10 bg-white rounded-md">
        <Slider
          aria-label="Speed"
          defaultValue={25}
          getAriaValueText={(value) => `${value}`}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={50}
          value={speedValue}
          onChange={handleSpeedChange}
          marks={speed}
          min={50}
          sx={{ 
            color:"#715ac5"
           }}
          max={600}
        />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-white text-[#715ac5] font-bold py-2 px-4 rounded-xl hover:bg-[#9e87f8] hover:text-white
          font-gothamBold w-75"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
