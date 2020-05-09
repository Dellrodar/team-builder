import React, { useState } from "react";

function TeamForm(){
    const NoteForm = (props) => {
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
          props.onSubmit(formData);
          clearForm();
        };

        const handleChange = (event) => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        };

        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
            />
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              name="body"
              type="text"
              placeholder="Some text you want to remember..."
              value={formData.body}
              onChange={handleChange}
            />
            <button type="submit">Save!</button>
          </form>
        );
      };
}


export default TeamForm;