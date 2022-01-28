import BasicLayout from "../../../template/BasicLayout";
import { Button } from "../../UIWidgets";

const ContactMe = () => {
  return (
    <div className="bg-lprimary text-lbg">
      <BasicLayout
        heading="Contact Me"
        className="!mt-5 px-7 py-16"
        secondaryHeading="Contact Me Now, So we can discuss your requirements in more details"
      >
        <Button text="Contact Me" center />
      </BasicLayout>
    </div>
  );
};

export default ContactMe;
