import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    console.log(data.name);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: "Input your name",
            minLength: { value: 2, message: "minimum length is 2" },
            maxLength: { value: 10, message: "minimum length is 10" },
          })}
        />
        <button>Submit</button>
        <ErrorMessage
          name="name"
          errors={errors}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
    </form>
  );
};

export default Form;
