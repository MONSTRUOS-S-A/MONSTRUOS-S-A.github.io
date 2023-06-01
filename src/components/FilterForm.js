import React from "react";
import { getIssuesFiltered } from "../API/issues.api";
import { getAllUsers } from "../API/users.api"
import { useState, useEffect } from "react";

export function FilterForm({ onSearch }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setInputs((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const status = getCheckedValues("status");
    const priority = getCheckedValues("priority");
    const assignedTo = getCheckedValues("assignedTo");
    const unassigned = inputs.unassigned ? "unassigned" : "";
    const createdBy = getCheckedValues("createdBy");
    const searchword = inputs.searchword;
    const orderBy = inputs.orderBy;

    console.log("Formulario enviado:");
    console.log("Contains word:", inputs.searchword);
    console.log("Orders by:", inputs.orderBy);
    console.log("Status:", getCheckedValues("status")); // Obtener valoress agrupados
    console.log("Priority:", getCheckedValues("priority")); // Obtener valores agrupados
    console.log("Assigned to:", getCheckedValues("assignedTo"));
    console.log("Created by:", getCheckedValues("createdBy"));
    console.log("Unassigned:", getCheckedValues("unassigned"));
    const issues = await getIssuesFiltered(status, priority, assignedTo, unassigned, createdBy, searchword, orderBy);
    console.log(issues);
    onSearch(issues);

  };

  const estatInicial = [];
  const [users, setUsers] = useState(estatInicial);

  useEffect(() => {
    async function loadUsers() {
      const res = await getAllUsers();
      console.log(res.data);
      setUsers(res.data);
    }
    loadUsers();
  }, []);

  const getCheckedValues = (section) => {
    return Object.entries(inputs)
      .filter(([name, value]) => name.startsWith(section) && value)
      .map(([name, value]) => name.replace(`${section}-`, ""))
      .join(",");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inline-form">
        <small>Contains word</small>
        <input
          onChange={handleChange}
          type="text"
          name="searchword"
          value={inputs.searchword || ""}
        />
      </div>
      <div className="inline-form">
        <small>Orders by</small>
        <select name="orderBy" onChange={handleChange}>
          <option value="">None</option>
          <option value="date">Date</option>
          <option value="priority">Priority</option>
          <option value="status">Status</option>
          <option value="severity">Severity</option>
          <option value="type">Type</option>
          <option value="creator">Creator</option>
        </select>
      </div>
      <br />
      <div className="inline-form">
        <small>Status</small>
        <label>
          <input
            type="checkbox"
            name="status-New"
            checked={inputs["status-New"] || false}
            onChange={handleChange}
          />
          New
        </label>
        <label>
          <input
            type="checkbox"
            name="status-inprogress"
            checked={inputs["status-inprogress"] || false}
            onChange={handleChange}
          />
          In progress
        </label>
        <label>
          <input
            type="checkbox"
            name="status-readyfortest"
            checked={inputs["status-readyfortest"] || false}
            onChange={handleChange}
          />
          Ready for test
        </label>
        <label>
          <input
            type="checkbox"
            name="status-closed"
            checked={inputs["status-closed"] || false}
            onChange={handleChange}
          />
          Closed
        </label>
        <label>
          <input
            type="checkbox"
            name="status-needsinfo"
            checked={inputs["status-needsinfo"] || false}
            onChange={handleChange}
          />
          Needs info
        </label>
      </div>
      <div className="inline-form">
        <small>Priority</small>
        <label>
          <input
            type="checkbox"
            name="priority-Low"
            checked={inputs["priority-Low"] || false}
            onChange={handleChange}
          />
          Low
        </label>
        <label>
          <input
            type="checkbox"
            name="priority-Normal"
            checked={inputs["priority-Normal"] || false}
            onChange={handleChange}
          />
          Normal
        </label>
        <label>
          <input
            type="checkbox"
            name="priority-High"
            checked={inputs["priority-High"] || false}
            onChange={handleChange}
          />
          High
        </label>
      </div>
      <div className="inline-form">
        <small>Assigned to</small>
        {users.map((user) => (
          <label key={user.id}>
            <input
              type="checkbox"
              name={`assignedTo-${user.id}`}
              checked={inputs[`assignedTo-${user.id}`] || false}
              onChange={handleChange}
            />
            {user.first_name}
          </label>
        ))}
      </div>
      <div className="inline-form">
        <small>Created by</small>
        {users.map((user) => (
          <label key={user.id}>
            <input
              type="checkbox"
              name={`createdBy-${user.id}`}
              checked={inputs[`createdBy-${user.id}`] || false}
              onChange={handleChange}
            />
            {user.first_name}
          </label>
        ))}
      </div>
      <div className="inline-form">
        <small>Unassigned</small>
        <label>
          <input
            type="checkbox"
            name="unassigned"
            checked={inputs["unassigned"] || false}
            onChange={handleChange}
          />
          Unassigned
        </label>
      </div>
      <button className="btn-search-filter" type="submit">
        <i className="bx bx-search-alt-2"></i> Search
      </button>
    </form>
  );
}