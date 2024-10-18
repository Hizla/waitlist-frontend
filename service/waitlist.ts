import Axios from "@axios";

const WaitlistService = {
  getWaitlistMemberCount: () =>
    Axios.get<number>(`/api/count`).then((res) => res.data),
  joinWaitlist: ({
    email,
    hcaptcha_response,
  }: {
    email: string;
    hcaptcha_response: string;
  }) =>
    Axios.post(`/api/register`, { email, hcaptcha_response }).then(
      (res) => res.data
    ),
};

export default WaitlistService;
