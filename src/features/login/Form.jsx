import Login from "./Login";
import SignUp from "./SignUp";
import MoreInfo from "./MoreInfo";
import YourProfile from "./YourProfile";

const Form = ({ component, handleForm }) => {
  return (
    <>
      {component === "login" && <Login handleForm={handleForm} />}
      {component === "signup" && <SignUp handleForm={handleForm} />}
      {component === "moreInfo" && <MoreInfo handleForm={handleForm} />}
      {component === "yourProfile" && <YourProfile handleForm={handleForm} />}
    </>
  );
};

export default Form;
