export default function BannerVideo() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background image with office ceiling lights and professionals */}
      <div 
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
          filter: "brightness(0.8)"
        }}
      >
      </div>
      
      {/* Semi-transparent overlay with text */}
      <div className="container mx-auto h-full relative z-10 flex items-center justify-center">
        <div className="px-10 py-8 rounded-lg text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Let us increase your<br/>
            productivity
          </h1>
        </div>
      </div>
    </div>
  );
}