


export default function Landing() {
    return (
        <div className="lg:h-[620px] md:h-[520px] sm:h-[420px] h-[320px] flex items-center lg:justify-start md:justify-start sm:justify-start justify-center relative" style={{ width: '100%' }}>
            <div className="absolute inset-0 w-full h-full bg-cover" style={{ backgroundImage: "url('/images/section-1-img.png')", filter: 'brightness(25%)' }}></div>
            <div className="w-[519px] h-64 text-center text-neutral-300 lg:text-[50px] md:text-[45px] sm:text-[40px] text-[30px] pt-10 font-bold font-Montserrat relative z-10">By the Traders for the Traders</div>
        </div>


    );
}