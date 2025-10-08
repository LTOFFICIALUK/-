import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64
}

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const dimension = sizeMap[size]
  
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: dimension, height: dimension }}>
      <Image
        src="/logo.png"
        alt="$苹果链 Apple Chain Logo"
        width={1000}
        height={1000}
        className="w-full h-full object-contain"
        priority
        unoptimized
      />
    </div>
  )
}

export default Logo
