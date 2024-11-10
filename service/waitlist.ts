import Axios from "@axios";

const WaitlistService = {
  getWaitlistMemberCount: () =>
    Axios.get<number>(`/api/count`).then((res) => res.data),
  joinWaitlist: ({
    email,
    hcaptcha_token,
  }: {
    email: string;
    hcaptcha_token: string;
  }) =>
    Axios.post(`/api/register`, { email, hcaptcha_token }).then((res) => res.data),
    sendConfirmationEmail: (address: string) => Axios.post(`/api/resend`, { email: address }, {
    baseURL: "",
  })
};

export default WaitlistService;
