import React, { useState } from "react";

const TeamForm = (props) => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          role: '',
        });

        const clearForm = () => {
          setFormData({ name: '', email: '', role: '' });
        };

        const handleSubmit = (event) => {
          event.preventDefault();
          props.setTeam([ ...props.team, formData ]);
          clearForm();
        };

        const handleChange = (event) => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        };

        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Team Member's Name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="role">Role:</label>
            <input
              id="role"
              name="role"
              type="text"
              placeholder="Job Role"
              value={formData.role}
              onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <button type="submit">Save Team Member!</button>
          </form>
        );
      };


export default TeamForm;