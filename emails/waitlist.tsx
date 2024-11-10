import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Link,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface WaitlistEmailProps {
  features?: {
    id: number;
    Description: React.ReactNode;
  }[];
}


const PropDefaults: WaitlistEmailProps = {
  features: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          🔗 Experience our <strong>open-source</strong> link shortener and real-time analytics platform.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          🚀 Access select <strong>premium features</strong> for free during the beta phase.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          🏆 Provide <strong>feedback</strong> that helps shape the future of hizla.
        </li>
      ),
    },
  ],
};

export const WaitlistEmail = ({
  features = PropDefaults.features,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`https://basement.ophivana.moe/images/hizla.png`}
            width="150"
            height="33"
            alt="hizla"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              You’re on the Waitlist 🚀
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Thank you for joining the hizla waitlist! 🎉 We’re excited to have you on board as we work on building a simpler,
                  smarter way to shorten links and analyze your data.
                </Text>

                <Text className="text-base">As a waitlist member, you’ll be among the first to:</Text>
              </Row>
            </Section>

            <ul>{features?.map(({ Description }) => Description)}</ul>

            <Section className="text-center">
              <Link href="https://github.com/hizla" className="bg-black text-white rounded-lg py-3 px-[18px]">
                Star on Github
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;
