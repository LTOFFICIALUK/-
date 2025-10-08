'use client'

import { ArrowRight, Zap, Shield, Globe, Twitter, MessageCircle } from 'lucide-react'
import Logo from './components/Logo'

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-solana-dark/90 backdrop-blur-md border-b border-solana-light-gray/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center space-x-2">
            <Logo size="md" />
            <span className="text-xl font-bold gradient-text">$苹果链</span>
          </div>
        </div>
      </div>
    </header>
  )
}

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/10 via-transparent to-solana-green/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-solana-purple/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-solana-green/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-solana-purple/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">$苹果链</span>
          </h1>
          <p className="text-2xl md:text-3xl text-solana-text-gray mb-4">
            The Apple Chain
          </p>
          <p className="text-xl md:text-2xl font-semibold gradient-text mb-8">
            Solana IS the Alpha Chain
          </p>
          <p className="text-lg text-solana-text-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            Other chains are trying to take over the trenches, but we know the truth: <span className="font-bold text-solana-green">Solana IS the alpha chain.</span> It&apos;s our job to prove this fact to the world. $苹果链 isn&apos;t just a token - it&apos;s the community&apos;s declaration that Solana dominates the blockchain space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://x.com/i/communities/1975764344295010481" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Join the Community</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://dexscreener.com/solana/7pz7uvyxuadkr3fz1xmh41owxp1f5r6sezesgzrra1jl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              $苹果链 Chart
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Built on Solana's high-performance blockchain with sub-second transaction times."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Leveraging Solana's battle-tested security and proven network reliability."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Join a worldwide community of builders, traders, and blockchain enthusiasts."
    }
  ]

  return (
    <section id="features" className="py-20 bg-solana-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="gradient-text">$苹果链</span>?
          </h2>
          <p className="text-xl text-solana-text-gray max-w-3xl mx-auto">
            While other chains fight for the trenches, we&apos;re here to prove what&apos;s already true: 
            <span className="font-bold text-solana-purple"> Solana IS the alpha chain.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-solana-purple to-solana-green rounded-2xl flex items-center justify-center mx-auto mb-6 text-solana-dark group-hover:animate-glow">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-solana-text">{feature.title}</h3>
              <p className="text-solana-text-gray leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The <span className="gradient-text">Story</span>
            </h2>
            <div className="space-y-6 text-solana-text-gray leading-relaxed">
              <p className="text-lg">
                The battlefield is clear: other chains are fighting to take over the trenches, 
                claiming they&apos;re the future. But we know better. 
                <span className="font-bold text-solana-purple"> Solana IS the alpha chain.</span>
              </p>
              <p className="text-lg">
                When Solana&apos;s official X account blessed &ldquo;苹果链&rdquo; (Apple Chain), 
                it wasn&apos;t just a tweet - it was a rallying cry. This token is our weapon, 
                our proof to the world that Solana dominates the blockchain space.
              </p>
              <p className="text-lg">
                It&apos;s not a question of <em>becoming</em> the alpha - Solana already IS. 
                Our mission? To send this token and prove what we already know: 
                <span className="font-bold text-solana-green"> no other chain can replicate what Solana trenchers can do.</span>
              </p>
              <p className="text-lg">
                While others talk, we execute. $苹果链 is the community&apos;s declaration that 
                Solana sets the standard, and it&apos;s our job to make sure the whole world knows it.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="card p-8 text-center">
              <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <Logo size="xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-solana-text-gray">
                Born from Solana&apos;s official blessing, $苹果链 is the community&apos;s tool 
                to prove what we know: Solana IS the alpha chain. It&apos;s our job to send this token 
                and show the world which chain truly dominates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-solana-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Join the <span className="gradient-text">Community</span>
        </h2>
        <p className="text-xl text-solana-text-gray mb-12 max-w-3xl mx-auto">
          Other chains are battling for dominance, but we already know who wins. 
          <span className="font-bold text-solana-green">It&apos;s our job to send this token</span> and 
          prove to the world what we already know: <span className="font-bold gradient-text">Solana IS the alpha chain.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://x.com/i/communities/1975764344295010481" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center space-x-2"
          >
            <span>Join the Community</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://dexscreener.com/solana/7pz7uvyxuadkr3fz1xmh41owxp1f5r6sezesgzrra1jl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            $苹果链 Chart
          </a>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-black border-t border-solana-light-gray/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo size="md" />
            <span className="text-xl font-bold gradient-text">$苹果链</span>
          </div>
          <div className="text-solana-text-gray text-center md:text-right">
            <p className="mb-2">Solana IS The Alpha Chain</p>
            <p className="text-sm">© 2024 $苹果链. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
