// import {
//   Html,
//   Head,
//   Font,
//   Preview,
//   Heading,
//   Row,
//   Section,
//   Text,
// } from "@react-email/components";

// interface VerificationEmailProps {
//   username: string;
//   otp: string;
// }

// export default function VerificationEmail({
//   username,
//   otp,
// }: VerificationEmailProps) {
//   return (
//     <Html lang="en" dir="ltr">
//       <Head>
//         <title>Verification Code</title>
//         <Font
//           fontFamily="Roboto"
//           fallbackFontFamily="Verdana"
//           webFont={{
//             url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
//             format: "woff2",
//           }}
//           fontWeight={400}
//           fontStyle="normal"
//         />
//       </Head>
//       <Preview>Here&apos;s your OTP:s {otp} </Preview>
//       <Section>
//         <Row>
//           <Heading as="h2">Hello {username},</Heading>
//         </Row>
//         <Row>
//           <Text>
//             Thank you for registering. Please use the following OTP to complete your registration:
//           </Text>
//         </Row>
//         <Row>
//           <Text>{otp}</Text>
//         </Row>
//         <Row>
//           <Text>
//             If you did not request this code, please ignore this email.
//           </Text>
//         </Row>
//         {/* <Row>
//           <Button
//             href={`http://localhost:3000/verify/${username}`}
//             style={{ color: '#61dafb' }}
//           >
//             Verify here
//           </Button>
//         </Row> */}
//       </Section>
//     </Html>
//   );
// }

import {
  Html,
  Head,
  Font,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Link,
} from "@react-email/components";

interface OTPEmailProps {
  username: string;
  otp: string;
}

const styles = {
  body: (darkMode: boolean) => ({
    backgroundColor: darkMode ? "#121212" : "#f9f9f9",
    fontFamily: "'Arial', sans-serif",
    color: darkMode ? "#e0e0e0" : "#333",
    padding: "20px",
  }),
  container: (darkMode: boolean) => ({
    backgroundColor: darkMode ? "#1f1f1f" : "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: darkMode
      ? "0 4px 8px rgba(0, 0, 0, 0.5)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)",
  }),
  header: (darkMode: boolean) => ({
    backgroundColor: darkMode ? "#252525" : "#1a73e8",
    padding: "20px",
    borderRadius: "8px 8px 0 0",
    textAlign: "center" as const,
    color: "#ffffff",
  }),
  otp: (darkMode: boolean) => ({
    fontSize: "24px",
    fontWeight: "bold",
    color: darkMode ? "#00ffaa" : "#1a73e8",
    textAlign: "center" as const,
    margin: "20px 0",
  }),
  text: (darkMode: boolean) => ({
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "10px 0",
    color: darkMode ? "#e0e0e0" : "#333",
  }),
  footer: (darkMode: boolean) => ({
    backgroundColor: darkMode ? "#252525" : "#f5f5f5",
    padding: "15px",
    borderRadius: "0 0 8px 8px",
    textAlign: "center" as const,
    color: darkMode ? "#aaaaaa" : "#666",
    fontSize: "14px",
  }),
  link: (darkMode: boolean) => ({
    color: darkMode ? "#00ffaa" : "#1a73e8",
    textDecoration: "none",
    margin: "0 5px",
  }),
};

export default function OTPEmail({ username, otp }: OTPEmailProps) {
  const darkMode = false; // Change to true for dark mode preview
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Your OTP Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Your OTP Code for FoxTraa</Preview>
      <Body style={styles.body(darkMode)}>
        <Container style={styles.container(darkMode)}>
          {/* Header */}
          <Section style={styles.header(darkMode)}>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              FoxTraa OTP Verification
            </Text>
          </Section>

          {/* Main Content */}
          <Section>
            <Row>
              <Column>
                <Text style={styles.text(darkMode)}>Hi {username}, 👋</Text>
                <Text style={styles.text(darkMode)}>
                  Here is your OTP code to verify your account. Please use this
                  code within the next 5 minutes for security purposes.
                </Text>
                <Text style={styles.otp(darkMode)}>{otp}</Text>
                <Text style={styles.text(darkMode)}>
                  If you didn&apos;t request this OTP, please contact our
                  support team immediately.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={styles.footer(darkMode)}>
            <Text>© 2025 FoxTraa Team. All rights reserved.</Text>
            <Row>
              <Text>
                Sent from an unmonitored email. For support, email us at{" "}
                <Link href="mailto:support@foxtraa.com" style={styles.link(darkMode)}>
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
