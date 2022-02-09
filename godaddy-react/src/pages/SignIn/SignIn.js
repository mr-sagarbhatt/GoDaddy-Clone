import "./signin.scss";
import Copyrights from "../../components/Copyrights/Copyrights";
import SigninCard from "../../components/cards/SigninCard/SigninCard";
import { SigninProvider } from "../../contexts/SigninContext";

const SignIn = () => {
  return (
    <SigninProvider>
      <section className='signin'>
        {/* //*********** SIGNIN CARD *********** */}
        <SigninCard></SigninCard>
        {/* //*********** FOOTER :: COPYRIGHTS *********** */}
        <div className='copyrights'>
          <Copyrights></Copyrights>
        </div>
      </section>
    </SigninProvider>
  );
};

export default SignIn;
