import { useForm } from "react-hook-form";
import { useState } from "react";

function Entityform(){
const {
  register,
  handleSubmit,
  formState: {
    errors,
    isSubmitting,
    isValid
  }
} = useForm({
  mode: "onChange"
});
const [showPopup, setShowPopup] = useState(false);
const onSubmit = async (data) => {
  console.log(data);

  setShowPopup(true);

  setTimeout(() => {
    setShowPopup(false);
  }, 3000);
};
    return(
      <div>
      <h1>Add New Entity</h1>
      <br />
<p className="subtitle">
  Fill in the information below to create a new record
</p>
{showPopup && (
  <div className="success-popup">
    Entity added successfully!
  </div>
)}
       <form onSubmit={handleSubmit(onSubmit)}>
   
<div className="form-group">
  <label htmlFor="fullName">
    Full Name <span className="required">*</span>
  </label>

  <input
    id="fullName"
    type="text"
    aria-invalid={errors.fullName ? "true" : "false"}
    className={errors.fullName ? "input-error" : ""}
    {...register("fullName", {
      required: "Name is required",
      minLength: {
        value: 5,
        message: "Name must be at least 5 characters"
      },
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: "Only letters are allowed"
      }
    })}
  />

  <p role="alert">{errors.fullName?.message}</p>
</div>

 <div className="form-group">
  <label htmlFor="email">
    Email Address <span className="required">*</span>
  </label>

  <input
    id="email"
    type="email"
    placeholder="abc@gmail.com"
    aria-invalid={errors.email ? "true" : "false"}
    className={errors.email ? "input-error" : ""}
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }
    })}
  />

  <p role="alert">{errors.email?.message}</p>
</div>
<div className="form-group">
  <label htmlFor="phone">
    Phone Number <span className="required">*</span>
  </label>

  <input
    id="phone"
    type="tel"
    aria-invalid={errors.phone ? "true" : "false"}
    className={errors.phone ? "input-error" : ""}
    {...register("phone", {
      required: "Phone number is required",
      minLength: {
  value: 10,
  message: "Minimum 10 digits required"
},
      pattern: {
        value: /^[0-9]{10,15}$/,
        message: "Enter a valid phone number"
      }
    })}
  />

  <p role="alert">{errors.phone?.message}</p>
</div>

<div className="form-group">
<label htmlFor="department">
  Department <span className="required">*</span>
</label>

<select
  id="department"
  aria-invalid={errors.department ? "true" : "false"}
  {...register("department", {
    required: "Department is required"
  })}
>
  <option value="">Select Department</option>
  <option value="IT">IT</option>
  <option value="HR">HR</option>
  <option value="Finance">Finance</option>
  <option value="Marketing">Marketing</option>
</select>

<p role="alert">{errors.department?.message}</p>
</div>

<label htmlFor="Gender">
    Gender <span className="required">*</span>
  </label>
<div className="gender-inline">

  <label className="radio-option">
    <input
      type="radio"
      value="Male"
      {...register("gender", {
        required: "Gender is required"
      })
    }
    />
    <span>Male</span>
  </label>

  <label className="radio-option">
    <input
      type="radio"
      value="Female"
      {...register("gender", {
        required: "Gender is required"
      })}
    />
    <span>Female</span>
  </label>
<p role="alert">{errors.gender?.message}</p>
</div>
<br />
<div className="form-group">
  <label htmlFor="joiningDate">
    Joining Date <span className="required">*</span>
  </label>

  <input
    id="joiningDate"
    type="date"
    className="date-input"
    {...register("joiningDate", {
      required: "Joining date is required"
    })}
  />

  <p role="alert">{errors.joiningDate?.message}</p>
</div>
<div className="form-group">
  <label htmlFor="address">
    Address <span className="required">*</span>
  </label>

  <textarea
    id="address"
    placeholder="Enter complete address"
    aria-invalid={errors.address ? "true" : "false"}
    className={errors.address ? "input-error" : ""}
    {...register("address", {
      required: "Address is required",
      minLength: {
        value: 10,
        message: "Address must be at least 10 characters"
      }
    })}
  />

  <p role="alert">{errors.address?.message}</p>
</div>
<div className="upload-box">
  <label htmlFor="photo">
  Photo <span className="required">*</span>
</label>
  <input
    id="image"
    type="file"
    {...register("image", {
      validate: { fileType: (files) =>
      !files[0] ||
      ["image/jpeg", "image/png", "image/webp"].includes(files[0].type) ||
      "Only JPG, PNG, and WEBP images are allowed"
  }}
    )}
  />
</div>
<br />
<div className="form-group">
  <button
  type="submit"
  className="submit-btn"
  disabled={!isValid || isSubmitting}
>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>
</div>
</form>
</div>
    );
}
export default Entityform;