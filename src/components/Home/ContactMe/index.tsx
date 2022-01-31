import BasicLayout from "../../../template/BasicLayout";
import { Button, H3 } from "../../UIWidgets";

const ContactMe = () => {
  return (
    <div id="contactme" className="bg-lprimary text-lbg">
      <BasicLayout
        heading="Contact Me"
        className="!mt-5 px-7 py-16"
        secondaryHeading="Contact Me Now, So we can discuss your requirements in more details"
      >
        <a
          href="https://www.linkedin.com/in/m-ahmed-mushtaq/"
          target="_blank"
          rel="noreferrer"
        >
          <Button text="Contact Me" center />
        </a>
      </BasicLayout>
    </div>
  );
};

export default ContactMe;
