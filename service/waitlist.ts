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
};

export default WaitlistService;
