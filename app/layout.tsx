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
    images: [
      {
        url: 'https://onmri.com/logo.png',
        width: 800,
        height: 600,
        alt: 'onMRI Logo - AI-powered MRI Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'onMRI - AI-powered MRI Analysis',
    description: 'Transform subjective MRI interpretation into objective, quantifiable measurements.',
    images: ['https://onmri.com/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5FFSTS3G');`
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WC9BXRNRJ6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WC9BXRNRJ6');
            `
          }}
        />
        <link rel="canonical" href="https://onmri.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo.png" type="image/png" />
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
              "logo": "https://onmri.com/logo.png",
              "image": "https://onmri.com/logo.png",
              "founder": [
                { "@type": "Person", "name": "Paul Lee" },
                { "@type": "Person", "name": "Tanvi Verma" }
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FFSTS3G"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}