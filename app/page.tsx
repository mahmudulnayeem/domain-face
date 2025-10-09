import Particles from "@/components/Particles";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <ProfileCard
          name="Mahmudul Hasan"
          title="Software Engineer"
          handle="yay_nayeem"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/me.png"
          showUserInfo={true}
          iconUrl="/iconpattern.png"
          enableTilt={true}
          enableMobileTilt={true}
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)"
        />
      </div>
    </div>
  );
}
