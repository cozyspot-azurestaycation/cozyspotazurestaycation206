import { Hero } from "@/components/hero";
import { ExperiencePicker } from "@/components/experience-picker";
import { SpaceShowcase } from "@/components/space-showcase";
import { UnitDescription } from "@/components/unit-description";
import { Amenities } from "@/components/amenities";
import { Trust } from "@/components/trust";
import { Reviews } from "@/components/reviews";
import { LocationSection } from "@/components/location";
import { BookingCta } from "@/components/booking-cta";
export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperiencePicker />
      <SpaceShowcase />
      <UnitDescription />
      <div id="amenities">
        <Amenities />
      </div>
      <Trust />
      <Reviews />
      <LocationSection />
      <BookingCta />
    </>
  );
}
