
import React from 'react';

const AddContactForm = ({onInputChange, onFormSubmit}) => 
	(
		<form>
			<div className="form-group class-sm-3">
			    <label htmlFor="fullName">First Name</label>
			    <input type="name" class="form-control" name="name" onChange={onInputChange} placeholder="Bob" />
			</div>
			
			<div className="form-group class-sm-3">
			    <label htmlFor="age">Age</label>
			    <input type="name" class="form-control" name="age" onChange={onInputChange} placeholder="26" />
			</div>
			
			<div className="form-group">
			    <label htmlFor="phoneNumber">Phone</label>
			    <input type="number" class="form-control" name="phone" onChange={onInputChange} placeholder="+1 1234567890" />
			 </div> 
			  
			<div className="form-group">
			    <label htmlFor="physicalAddress">Category</label>
				<select onChange={onInputChange} className="form-control" name="category">
				<option value="Friend">Friend</option>
				<option value="Family">Family</option>
				</select>
			</div>

			<button type="submit" onClick={onFormSubmit} class="btn btn-primary"> Submit </button>
		</form>
	)

export default AddContactForm;