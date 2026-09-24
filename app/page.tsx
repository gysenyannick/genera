import SiteNav      from "@/components/site-nav";
import SiteHero     from "@/components/site-hero";
import SiteTrustBar from "@/components/site-trustbar";
import SiteServices from "@/components/site-services";
import SiteResults  from "@/components/site-results";
import SiteProcess  from "@/components/site-process";
import SiteReviews  from "@/components/site-reviews";
import SiteCta      from "@/components/site-cta";
import SiteFooter   from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* 1 · Hero, full width, dark */}
        <SiteHero />
        {/* 2 · Trust bar, white contrast strip */}
        <SiteTrustBar />
        {/* 3 · Services */}
        <SiteServices />
        {/* 4 · Results / before-after */}
        <SiteResults />
        {/* 5 · How it works */}
        <SiteProcess />
        {/* 6 · Reviews, dark */}
        <SiteReviews />
        {/* 7 · Final CTA, dark */}
        <SiteCta />
      </main>
      {/* 8 · Footer, dark */}
      <SiteFooter />
    </>
  );
}
