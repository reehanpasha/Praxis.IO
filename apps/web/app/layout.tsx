
import type { Metadata } from "next";
import JudgeMenu from "../components/JudgeMenu";

const SITE_URL = "https://praxis-io.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "PRAXIS | AI-Powered Technical Assessment Platform",
    template: "%s | PRAXIS",
  },

  description:
    "PRAXIS is an AI-powered technical assessment platform featuring immersive stakeholder simulations, behavioral telemetry, and performance evaluation. Built by Rehan Pasha and Sai Vivek KN.",

  applicationName: "PRAXIS",

  keywords: [
    "PRAXIS",
    "PRAXIS AI",
    "AI assessment platform",
    "technical assessment",
    "AI-powered evaluation",
    "stakeholder simulation",
    "behavioral assessment",
    "Rehan Pasha",
    "Sai Vivek KN",
  ],

  authors: [
    {
      name: "Rehan Pasha",
      url: "https://github.com/reehanpasha",
    },
    {
      name: "Sai Vivek KN",
      url: "https://github.com/DvivekD",
    },
  ],

  creator: "Rehan Pasha and Sai Vivek KN",
  publisher: "PRAXIS Development Team",

  verification: {
    google: "NTFblBOVK3CbipuRckbv2-dKpDeTer2IUwCPasqTAdg",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "PRAXIS",
    title: "PRAXIS | AI-Powered Technical Assessment Platform",
    description:
      "An immersive AI-powered technical assessment platform built by Rehan Pasha and Sai Vivek KN.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PRAXIS AI-Powered Assessment Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PRAXIS | AI-Powered Assessment Platform",
    description:
      "Built by Rehan Pasha and Sai Vivek KN.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PRAXIS",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "An AI-powered technical assessment platform featuring immersive stakeholder roleplay, behavioral telemetry, and performance evaluation.",
  url: SITE_URL,
  codeRepository: "https://github.com/reehanpasha/Praxis.IO",
  creator: [
    {
      "@type": "Person",
      name: "Rehan Pasha",
      url: "https://github.com/reehanpasha",
      sameAs: ["https://github.com/reehanpasha"],
    },
    {
      "@type": "Person",
      name: "Sai Vivek KN",
      url: "https://github.com/DvivekD",
      sameAs: ["https://github.com/DvivekD"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background: #080c14;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }
        `}</style>
      </head>

      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <JudgeMenu />
        {children}
      </body>
    </html>
  );
}
