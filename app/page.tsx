import { MenuItem } from "@/lib/types";
import { mockMenuItems } from "@/lib/mock-data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const dynamic = "force-dynamic";

async function getMenuItems(): Promise<MenuItem[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey && !supabaseUrl.includes("your-project")) {
    try {
      const { createClient } = await import("@/lib/supabase/server");
      const supabase = await createClient();

      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .eq("available", true)
        .order("category")
        .order("name");

      if (error || !data || data.length === 0) {
        return mockMenuItems;
      }

      return data as MenuItem[];
    } catch (err) {
      console.error("Supabase error:", err);
      return mockMenuItems;
    }
  }

  return mockMenuItems;
}

export default async function HomePage() {
  const menuItems = await getMenuItems();

  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection items={menuItems} />
      <FAQSection />
      <TeamSection />
      <BookingForm />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

