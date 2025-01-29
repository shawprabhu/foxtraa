import {
  Html,
  Head,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Body,
  Container,
  Column,
  Link,
} from "@react-email/components";
import Image from "next/image";

interface WelcomeEmailProps {
  username: string;
}

const styles = {
  body: {
    backgroundColor: "#ffffff",
    fontFamily: "'Arial', sans-serif",
    color: "#333333",
    padding: "20px",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    backgroundColor: "#1a73e8",
    padding: "20px",
    borderRadius: "8px 8px 0 0",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "22px",
    color: "#1a73e8",
    fontWeight: "bold",
    marginTop: "20px",
  },
  greeting: {
    fontSize: "18px",
    margin: "10px 0",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "10px 0",
    color: "#333333",
  },
  closing: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  footer: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "0 0 8px 8px",
    textAlign: "center" as const,
    color: "#333333",
    borderTop: "1px solid #dddddd",
  },
  logo: {
    maxWidth: "120px",
    marginBottom: "10px",
  },
  link: {
    color: "#1a73e8",
    textDecoration: "none",
    margin: "0 5px",
  },
  darkMode: `
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
      }
      .container {
        background-color: #1e1e1e !important;
        box-shadow: none;
      }
      .footer {
        background-color: #1e1e1e !important;
        border-top: 1px solid #333333 !important;
        color: #cccccc !important;
      }
      .link {
        color: #4da6ff !important;
      }
    }
  `,
};

export default function WelcomeEmail({ username }: WelcomeEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Welcome to FoxTraa!</title>
        <style>{styles.darkMode}</style>
      </Head>
      <Preview>Hey {username}, thanks for registering at FoxTraa!</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Main Content Section */}
          <Section>
            <Row>
              <Column>
                <Heading as="h2" style={styles.title}>
                  Welcome to FoxTraa! 🎉
                </Heading>
                <Text style={styles.greeting}>Hi there, {username} 👋</Text>
                <Text style={styles.text}>
                  We&apos;re so excited to have you join the FoxTraa community—a
                  vibrant space where traders, learners, and market enthusiasts
                  come together to achieve their goals and thrive.
                </Text>
                <Text style={styles.text}>
                  At FoxTraa, our mission is to empower you with the confidence
                  and knowledge you need to navigate the ever-changing world of
                  forex trading. Whether you&apos;re here to uncover new strategies,
                  stay ahead with market insights, or enhance your trading
                  skills with our expert content, we&apos;re here to guide you every
                  step of the way.
                </Text>
                <Text style={styles.text}>
                  Feel free to explore, experiment, and discover all that
                  FoxTraa has to offer. If you ever need support or have
                  questions, we&apos;re just a message away—always happy to help!
                </Text>
                <Text style={styles.closing}>
                  Here&apos;s to your trading journey—may it be fulfilling,
                  rewarding, and full of growth! 🚀
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={styles.footer}>
            <Row>
              {/* Add Your Logo Here */}
              <Image
                src="/logo.svg" // Replace with your logo URL
                alt="FoxTraa Logo"
                style={styles.logo}
              />
            </Row>
            <Row>
              <Text>&copy; 2025 FoxTraa Team. All rights reserved.</Text>
            </Row>
            <Row>
              <Text>
                <Link
                  href="https://www.foxtraa.com/privacy"
                  style={styles.link}
                >
                  Privacy Policy
                </Link>
                |
                <Link href="https://www.foxtraa.com/terms" style={styles.link}>
                  Terms of Service
                </Link>
              </Text>
            </Row>
            <Row>
              <Text>
                Sent from an unmonitored email. For support, email us at{" "}
                <Link href="mailto:support@foxtraa.com" style={styles.link}>
                  support@foxtraa.com
                </Link>
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}