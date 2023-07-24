import sendEmails from "./contact-mail";

type Job = {
  name: string;
  callback: () => void;
};

export default <Job[]>[sendEmails];
