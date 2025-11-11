import Header from '../components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white pt-40 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-float mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              onMRI
              <span className="block text-secondary text-2xl md:text-3xl font-regular mt-2">
                AI-powered Objective MRI Analysis
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforming subjective MRI interpretation into standardized, quantifiable measurements for superior diagnostic accuracy in musculoskeletal imaging
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://link.springer.com/book/9783031774553" target="_blank" rel="noopener noreferrer" className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors text-lg">
              Learn More
            </a>
            <a href="https://uploads.onmri.com" target="_blank" rel="noopener noreferrer" className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-primary transition-colors text-lg">
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">See onMRI in Action</h2>
            <div className="relative bg-gradient-to-br from-blue-50/50 to-gray-50/80 rounded-3xl shadow-xl border border-gray-100">
              <video 
                className="w-full h-auto rounded-2xl" 
                controls
                autoPlay
                loop
                poster="/report/femoral-cartilage.png"
                style={{ maxHeight: 400 }}
              >
                <source src="/mri-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">Research Team</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary">Paul Lee</h3>
                <p className="text-gray-600">Lead Researcher</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary">Tanvi Verma</h3>
                <p className="text-gray-600">Co-Researcher</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">MSK Doctors, Sleaford, United Kingdom</p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section id="about" className="py-16 section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Background</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg leading-relaxed text-gray-700">
                Conventional musculoskeletal MRI interpretation relies on subjective visual grading, introducing inter-reader variability that undermines clinical consistency and limits the early detection of joint degeneration or therapeutic response. The onMRI platform addresses this gap by transforming MRI into a standardised, quantitative tool using AI-powered segmentation and biomarker extraction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="py-16 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Methods</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Study Cohort</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-secondary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  150 musculoskeletal MRI scans analyzed
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  Meniscal injury cases included
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  Post-operative ACL reconstruction patients
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  Regenerative cartilage therapy patients
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">AI Technology</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-accent rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  Deep learning segmentation algorithms
                </li>
                <li className="flex items-start">
                  <span className="bg-accent rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  3D anatomical reconstructions
                </li>
                <li className="flex items-start">
                  <span className="bg-accent rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  Objective biomarker measurements
                </li>
                <li className="flex items-start">
                  <span className="bg-accent rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  Uniform anatomical definitions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Results</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-primary to-accent rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Successful Segmentation Rate</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-secondary to-accent rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">3D</div>
                <div className="text-lg">High-Fidelity Models</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl text-primary">
                <div className="text-4xl font-bold mb-2">150</div>
                <div className="text-lg">Scans Analyzed</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 shadow-lg rounded-xl">
                <Image
                    src="/report/femoral-cartilage.png"
                    alt="Femoral Cartilage Analysis"
                    width={250}
                    height={200}
                    className="w-full h-48 object-contain"
                />
                <p className="text-sm text-gray-600 mt-2">Femoral Cartilage</p>
              </div>
              <div className="text-center p-4 shadow-lg rounded-xl">
                <Image
                    src="/report/tibial-cartilage.png"
                    alt="Tibial Cartilage Analysis"
                    width={250}
                    height={200}
                    className="w-full h-48 object-contain"
                />
                <p className="text-sm text-gray-600 mt-2">Tibial Cartilage</p>
              </div>
              <div className="text-center p-4 shadow-lg rounded-xl">
                <Image
                    src="/report/medial-meniscus.png"
                    alt="Medial Meniscus Analysis"
                    width={250}
                    height={200}
                    className="w-full h-48 object-contain"
                />
                <p className="text-sm text-gray-600 mt-2">Medial Meniscus</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Key Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Quantitative Biomarkers</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cartilage thickness measurements</li>
                    <li>• Volume calculations</li>
                    <li>• Contact area analysis</li>
                    <li>• Joint space width assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Clinical Impact</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Superior sensitivity to sub-radiological changes</li>
                    <li>• Early regenerative response detection</li>
                    <li>• Reproducible cross-patient comparisons</li>
                    <li>• Enhanced diagnostic accuracy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Conclusion</h2>
            <p className="text-xl leading-relaxed mb-8">
              onMRI enables the quantification of joint structures in a consistent, reproducible manner, offering a powerful alternative to subjective MRI interpretation. It holds significant promise for improving diagnostic accuracy, monitoring disease progression, and evaluating the efficacy of regenerative and surgical interventions in musculoskeletal care.
            </p>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-lg">
                Further large-scale validation is underway to integrate these imaging biomarkers with clinical outcomes and motion data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Image src="/white-logo.png" alt="onMRI Logo" width={120} height={120} className="rounded-lg" />
            </div>
            <p className="text-secondary mb-6">
              Revolutionizing musculoskeletal imaging with AI-powered objective analysis
            </p>
            <div className="border-t border-secondary/30 pt-6">
              <p className="text-sm text-secondary">
                © 2024 MSK Doctors, Sleaford, United Kingdom. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}