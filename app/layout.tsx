import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'onMRI - AI-powered Objective MRI Analysis | MSK Doctors',
  description: 'Revolutionary AI-powered platform for quantifiable musculoskeletal MRI imaging. Transform subjective MRI interpretation into standardized, objective measurements for superior diagnostic accuracy.',
  keywords: 'MRI analysis, AI medical imaging, musculoskeletal imaging, cartilage analysis, meniscal injury, ACL reconstruction, regenerative therapy, medical AI, diagnostic imaging, MSK Doctors',
  authors: [{ name: 'Paul Lee' }, { name: 'Tanvi Verma' }],
  creator: 'MSK Doctors',
  publisher: 'MSK Doctors',
  robots: 'index, follow',
  openGraph: {
    title: 'onMRI - AI-powered Objective MRI Analysis',
    description: 'Revolutionary AI platform transforming MRI interpretation with quantifiable biomarkers and 3D anatomical reconstructions.',
    url: 'https://onmri.com',
    siteName: 'onMRI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'onMRI - AI-powered MRI Analysis',
    description: 'Transform subjective MRI interpretation into objective, quantifiable measurements.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#013366',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://onmri.com" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="Sleaford, United Kingdom" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "MSK Doctors - onMRI",
              "description": "AI-powered objective MRI analysis for quantifiable musculoskeletal imaging",
              "url": "https://onmri.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sleaford",
                "addressCountry": "GB"
              },
              "medicalSpecialty": "Musculoskeletal Imaging",
              "founder": [
                { "@type": "Person", "name": "Paul Lee" },
                { "@type": "Person", "name": "Tanvi Verma" }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}