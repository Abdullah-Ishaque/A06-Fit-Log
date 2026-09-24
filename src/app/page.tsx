import Body from "@/components/cards/Body";
import Banner from "@/components/shared/Banner";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0C0D10] text-white  flex flex-col justify-start pt-12">
      <Banner/>
      <Body/>
    </div>
  );
}
