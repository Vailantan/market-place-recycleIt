import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "Furniture", label: "Furniture" },
    { value: "Watch", label: "Watch" },
    { value: "Mobile", label: "Mobile" },
    { value: "Television", label: "Television" },
    { value: "Laptop", label: "Laptop" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#425C5A",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#425C5A" : "white",
        color: state.isSelected ? "white" : "#425C5A",
        "&:hover": {
        backgroundColor: "#425C5A",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = async (selectedOption)=> {

        try { 
            const response = await fetch('https://vailantan.pythonanywhere.com/all-products');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
             const data = await response.json();
             const filteredData = data.products.filter(product => product.category === selectedOption.value);
            setFilterList(filteredData);
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
          }

        
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
