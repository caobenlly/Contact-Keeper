import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.Module.scss";

const cx = classNames.bind(styles);

export default function SideBar() {
  const dataItems = [
    {
      email: "jill@gmail.com",
      name: "Jill Johnson",
      phone: "111-111-1111",
      type: "Personal",
    },
    {
      email: "sara@gmail.com",
      name: "Sara Watson",
      phone: "222-222-2222",
      type: "Personal",
    },
    {
      email: "harry@gmail.com",
      name: "Harry White",
      phone: "333-333-3333",
      type: "Professional",
    },
  ];

  const [list, setList] = useState(dataItems);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddToList = () => {
    if (formData.name && formData.email && formData.phone && formData.type) {
      if (editingIndex !== null) {
        // Update existing item
        const updatedList = list.map((item, index) =>
          index === editingIndex ? { ...formData } : item
        );
        setList(updatedList);
        setEditingIndex(null); // Reset editing state
      } else {
        // Add new item to list
        setList((prevList) => [...prevList, formData]);
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "",
      });
    } else {
      console.log("Please fill in all fields.");
    }
  };

  const removeToList = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingItem(list[index]);
    setFormData(list[index]); // Pre-fill the form with the current item data
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "",
    });
    setEditingIndex(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); 
  };

  useEffect(() => {
    console.log("List has been updated:", list);
  }, [list]);

  // Filter the list based on search query
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="grid-2">
        <div className="add-contact-form">
          <h2 className="text-primary">Add/Edit Contact</h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <h5>Contact Type</h5>
            <div className="radio-group">
              <input
                type="radio"
                name="type"
                value="personal"
                checked={formData.type === "personal"}
                onChange={handleChange}
              />
              <label htmlFor="personal" className="button">
                Personal
              </label>
              <input
                type="radio"
                name="type"
                value="professional"
                checked={formData.type === "professional"}
                onChange={handleChange}
              />
              <label htmlFor="professional" className="button">
                Professional
              </label>
            </div>

            <div className="button-container">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value={editingIndex !== null ? "Update Contact" : "Add Contact"}
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToList();
                }}
              />
              {editingIndex !== null && (
                <button
                  className="btn btn-secondary btn-block"
                  onClick={handleClear}
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="contact-filter">
          <form>
            <input
              type="text"
              placeholder="Filter Contacts..."
              value={searchQuery}
              onChange={handleSearch} 
            />
          </form>
          <h4>Please Add a Contact</h4>

          {filteredList?.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                color: "#333",
                border: "1px solid #ccc",
                background: "#f4f4f4",
              }}
            >
              <h3 className="text-primary text-left">
                {item.name}
                <span
                  className="badge badge-primary"
                  style={{
                    background:
                      item.type === "Professional" ? "#28a745" : "#003699",
                    float: "right",
                  }}
                >
                  {item.type}
                </span>
              </h3>
              <ul className="list">
                <li>
                  <i className="fas fa-envelope"></i>
                  {item.email}
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  {item.phone}
                </li>
              </ul>
              <p>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeToList(index)}
                >
                  Delete
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
