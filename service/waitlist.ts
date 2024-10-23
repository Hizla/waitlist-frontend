import Axios from "@axios";

const WaitlistService = {
  getWaitlistMemberCount: () =>
    Axios.get<number>(`/count`).then((res) => res.data),
  joinWaitlist: ({
    email,
    hcaptcha_token,
  }: {
    email: string;
    hcaptcha_token: string;
  }) =>
    Axios.post(`/register`, { email, hcaptcha_token }).then((res) => res.data),
};

export default WaitlistService;
