import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Harvesting the Sun Twice',
  description: 'Frequently asked questions about VBPV agrivoltaic systems, duck curve, and implementation strategy.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-teal/10 to-brand-teal/10">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-brand-teal to-brand-teal text-white px-4 py-2">
            Comprehensive Technical & Policy FAQ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-700 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about Vertical Bifacial Photovoltaic (VBPV) agrivoltaic systems,
            from technology fundamentals to policy implementation.
          </p>
        </div>

        {/* Technology & Performance */}
        <section className="mb-12">
          <h2 className="text-3xl font-headline font-bold mb-6">Technology & Performance</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What is Vertical Bifacial Photovoltaic (VBPV) technology?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      VBPV systems use solar panels mounted vertically in an east-west orientation, with bifacial panels
                      that generate electricity from both sides. This orientation creates a dual-peak generation profile
                      that naturally aligns with UK morning and evening demand peaks.
                    </p>
                    <p>
                      Unlike Traditional Mounted Photovoltaic (TMPV) systems that tilt panels at 30-35° facing south for
                      maximum midday generation, VBPV systems are designed to match actual electricity demand patterns
                      throughout the day.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How does VBPV performance compare to traditional solar systems?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      University of York peer-reviewed research (Badran & Dhimish, 2024, Scientific Reports) demonstrates
                      that VBPV systems deliver:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>19-22% more annual energy</strong> than TMPV output at UK latitudes</li>
                      <li><strong>+24.52% winter energy gains</strong> during the October-March period when UK demand is highest</li>
                      <li><strong>+600% morning peak generation</strong> at 08:00 compared to TMPV (when TMPV output is minimal)</li>
                      <li><strong>+463% evening peak generation</strong> at 16:00-18:00 during critical demand periods</li>
                      <li><strong>57% less severe duck curve</strong> than TMPV systems</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    What is the peer-reviewed research foundation for these claims?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      The performance claims are supported by rigorous peer-reviewed research conducted at UK latitudes:
                    </p>
                    <div className="bg-brand-teal/10 border-l-4 border-brand-teal p-4">
                      <p className="font-semibold">
                        Badran, G., & Dhimish, M. (2024). Comprehensive study on the efficiency of vertical bifacial
                        photovoltaic systems: a UK case study. <em>Scientific Reports</em>, 14, 18380.
                      </p>
                      <p className="text-sm mt-2">
                        <a href="https://doi.org/10.1038/s41598-024-68018-1" target="_blank" rel="noopener noreferrer"
                           className="text-brand-teal hover:underline">
                          https://doi.org/10.1038/s41598-024-68018-1
                        </a>
                      </p>
                    </div>
                    <p className="mt-4">
                      This University of York study provides comprehensive validation of VBPV advantages for UK deployment,
                      including detailed modelling of generation profiles across all seasons and times of day.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* The Duck Curve Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-headline font-bold mb-6">The Duck Curve Problem</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What is the "duck curve" and why is it a problem?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      The duck curve describes the mismatch between solar generation and electricity demand throughout the
                      day. The curve's distinctive shape—resembling a duck—shows net load (total demand minus solar generation)
                      dipping at midday when TMPV solar peaks, then rapidly ramping up in the evening as solar generation drops
                      while demand increases.
                    </p>
                    <p className="mb-4">
                      <strong>UK Duck Curve Characteristics:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Morning Demand Peak:</strong> 07:00-09:00, when people wake and prepare for work</li>
                      <li><strong>Midday Solar Surge:</strong> 11:00-14:00, when TMPV generation peaks but demand is relatively low</li>
                      <li><strong>Evening Demand Peak:</strong> 16:00-19:00, when people return home, but solar generation is dropping rapidly</li>
                      <li><strong>Evening Ramp Challenge:</strong> The rapid increase in net load from 15:00-18:00 requires massive
                          battery discharge or gas peaker plants</li>
                    </ul>
                    <p className="mt-4">
                      The problem becomes even more severe during winter when overall electricity demand is 25-30% higher due to
                      heating requirements, and morning peak demand occurs during darkness when TMPV generates nothing.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    How does VBPV solve the duck curve problem?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      VBPV systems fundamentally reshape the generation curve to match UK demand patterns. By orienting panels
                      vertically in an east-west configuration, VBPV creates a dual-peak generation profile that naturally aligns
                      with morning and evening demand peaks.
                    </p>
                    <div className="bg-brand-light/10 border rounded-lg p-4 mb-4">
                      <p className="font-semibold mb-2">Winter Generation Comparison (47 GW capacity):</p>
                      <ul className="space-y-2">
                        <li><strong>08:00 Winter:</strong> TMPV 0.95 GW → VBPV 6.65 GW (7× higher)</li>
                        <li><strong>12:00 Midday:</strong> TMPV 13.2 GW → VBPV 8.85 GW (balanced)</li>
                        <li><strong>16:00-18:00 Winter:</strong> TMPV 1.88 GW → VBPV 10.58 GW (5.6× higher)</li>
                      </ul>
                    </div>
                    <p className="mb-4">
                      <strong>Result:</strong> University of York modelling demonstrates that VBPV systems reduce the duck curve
                      severity by 57% compared to equivalent TMPV capacity. This dramatic reduction translates directly into:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>94% less battery storage capacity required</li>
                      <li>Reduced need for gas peaker plants during evening ramp periods</li>
                      <li>Lower grid infrastructure requirements for bidirectional power flow</li>
                      <li>Improved grid stability due to generation matching demand patterns</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Agricultural Integration */}
        <section className="mb-12">
          <h2 className="text-3xl font-headline font-bold mb-6">Agricultural Integration</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Can agriculture continue on the same land as VBPV systems?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes, this is the fundamental advantage of VBPV agrivoltaic systems. For a 47 GW deployment:
                    </p>
                    <div className="bg-brand-light/10 border rounded-lg p-4 mb-4">
                      <ul className="space-y-2">
                        <li><strong>Total Land Required:</strong> 32,000-45,000 hectares</li>
                        <li><strong>Land for Agriculture:</strong> 27,200-38,250 hectares (85% of total)</li>
                        <li><strong>Agricultural Productivity:</strong> 70-85% maintained</li>
                        <li><strong>Land for Solar Only:</strong> 4,800-6,750 hectares (15% - panel footprint)</li>
                      </ul>
                    </div>
                    <p>
                      In contrast, TMPV systems dedicate 100% of the land to solar only, with 0% agricultural productivity.
                      VBPV eliminates the false choice between energy security and food security.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Can farm machinery operate between VBPV panels?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes, VBPV systems are specifically designed with agricultural operations as a primary consideration:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><strong>Row Spacing:</strong> 10-12 meters between panel rows, sufficient for modern tractors and combines</li>
                      <li><strong>Panel Height:</strong> 2-3 meters above ground, allowing machinery passage underneath</li>
                      <li><strong>Compatible Crops:</strong> Wheat, barley, oats, vegetables, pasture for livestock grazing</li>
                      <li><strong>Irrigation:</strong> Standard pivot and drip irrigation systems remain fully functional</li>
                    </ul>
                    <p>
                      This is in stark contrast to TMPV systems where panels block 40-50% of the ground with racking structures,
                      making agricultural operations impossible.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    Do vertical panels create beneficial microclimates for crops?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Research has demonstrated that vertical panels create several beneficial microclimatic effects:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Temperature Moderation:</strong> Panels reduce extreme temperatures, particularly beneficial
                          during heat waves</li>
                      <li><strong>Wind Protection:</strong> Panel rows serve as windbreaks, reducing crop lodging and soil erosion</li>
                      <li><strong>Moisture Retention:</strong> Reduced evaporation in inter-row spaces due to shading effects</li>
                      <li><strong>Soil Health:</strong> Continuous root systems maintain soil structure and biological activity</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Biodiversity & Environment */}
        <section className="mb-12">
          <h2 className="text-3xl font-headline font-bold mb-6">Biodiversity & Environment</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    What are the biodiversity benefits of VBPV systems?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      RSPB research (Copping et al., 2025, published in Bird Study) provides compelling evidence for
                      solar farms' biodiversity benefits when properly managed. VBPV systems are uniquely positioned to
                      maximize these benefits:
                    </p>
                    <div className="bg-brand-light/10 border rounded-lg p-4 mb-4">
                      <p className="font-semibold mb-2">RSPB Research Findings:</p>
                      <ul className="space-y-2">
                        <li><strong>Bird Abundance:</strong> 3× higher on solar farms compared to intensive arable land</li>
                        <li><strong>Species Diversity:</strong> Significant increase in farmland bird species, including
                            yellowhammers, linnets, and skylarks</li>
                        <li><strong>Breeding Success:</strong> Higher breeding success rates due to reduced pesticide exposure
                            and increased food availability</li>
                        <li><strong>Pollinator Populations:</strong> Substantial increases in bees, butterflies, and other
                            pollinators in wildflower areas</li>
                      </ul>
                    </div>
                    <div className="bg-brand-teal/10 border-l-4 border-brand-teal p-4">
                      <p className="text-sm">
                        <strong>Citation:</strong> Copping, J.P., Waite, C., Finch, T., Bradbury, R.B., & Sheehan, D.K. (2025).
                        Solar farm management influences breeding bird responses in an arable-dominated landscape.
                        <em>Bird Study</em>, Published online 12 February 2025.
                      </p>
                      <p className="text-sm mt-2">
                        <a href="https://doi.org/10.1080/00063657.2025.2450392" target="_blank" rel="noopener noreferrer"
                           className="text-brand-teal hover:underline">
                          https://doi.org/10.1080/00063657.2025.2450392
                        </a>
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    What is the "500mm advantage" for wildlife corridors?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      VBPV systems require only 500mm ground clearance for panel supports, compared to TMPV systems which use
                      ground-mounted racking that fragments habitat. This design creates continuous wildlife corridors:
                    </p>
                    <div className="bg-brand-light/10 border rounded-lg p-4 mb-4">
                      <ul className="space-y-2">
                        <li><strong>Ground Coverage:</strong> TMPV blocks 40-50% of ground with racking; VBPV posts occupy &lt;5%</li>
                        <li><strong>Wildlife Movement:</strong> TMPV severely restricts movement; VBPV allows free movement for
                            mammals, birds and invertebrates</li>
                        <li><strong>Habitat Connectivity:</strong> TMPV creates fragmented patches; VBPV provides continuous
                            corridors 10-12m wide</li>
                        <li><strong>Total Corridor Area (47 GW):</strong> TMPV negligible; VBPV creates 27,200-38,250 hectares</li>
                      </ul>
                    </div>
                    <p>
                      This scale of wildlife corridor creation is remarkable—equivalent to approximately 40% of the total area
                      of England's National Parks. These corridors enable species movement, genetic diversity maintenance, and
                      climate adaptation migration routes across previously fragmented agricultural landscapes.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Policy & Implementation */}
        <section className="mb-12">
          <h2 className="text-3xl font-headline font-bold mb-6">Policy & Implementation</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left">
                    What is the "closing window" for VBPV conversion?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      According to the UK government's Renewable Energy Planning Database (REPD Q2 July 2025), there are
                      currently <strong>3,386 ground-mounted solar projects</strong> tracked, totaling <strong>52.6 GW</strong>
                      of capacity. Of these:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><strong>1,546 projects (35.7 GW)</strong> are under construction, awaiting construction, or in the
                          planning process</li>
                      <li>The vast majority are designed as TMPV installations</li>
                      <li>Each project that receives planning approval and proceeds to construction locks in the TMPV technology
                          choice for 25-30 years</li>
                    </ul>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                      <p className="font-semibold text-amber-900">⚠️ Critical Window</p>
                      <p className="text-amber-800 mt-2">
                        There is a <strong>6-12 month window</strong> to influence these decisions before planning approvals
                        become final and construction begins. After this window closes, the opportunity to capture £161-187 billion
                        in system savings will be lost for 25-30 years.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left">
                    What immediate actions are needed (0-6 months)?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Policy Statement:</strong> DESNZ to issue guidance recognising VBPV agrivoltaic systems as
                          the preferred technology for ground-mounted solar</li>
                      <li><strong>Planning Framework:</strong> Update the National Planning Policy Framework to prioritise
                          dual-use agrivoltaic systems</li>
                      <li><strong>Industry Engagement:</strong> Convene solar developers with projects in the 1,546-project
                          pipeline (35.7 GW) that are not yet operational</li>
                      <li><strong>Grid Connection Priority:</strong> National Grid ESO to prioritise connection offers for VBPV
                          projects demonstrating superior load matching</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left">
                    What medium-term measures are needed (6-18 months)?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Financial Incentives:</strong> Contracts for Difference (CfD) strike prices adjusted to reflect
                          the total system value of VBPV generation profiles</li>
                      <li><strong>Agricultural Support:</strong> DEFRA Environmental Land Management (ELM) payments eligibility
                          extended to VBPV agrivoltaic systems</li>
                      <li><strong>Grid Code Modifications:</strong> Update the Grid Code to recognise and compensate for the
                          generation profile benefits of VBPV systems</li>
                      <li><strong>Demonstration Projects:</strong> Fund 5-10 large-scale VBPV demonstration sites across different
                          UK regions and soil types</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-left">
                    What long-term framework is needed (18+ months)?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Standards Development:</strong> British Standards Institution to develop BS standards for VBPV
                          agrivoltaic system design and installation</li>
                      <li><strong>Supply Chain Development:</strong> Support UK manufacturing capacity for vertical mounting systems
                          and bifacial panels</li>
                      <li><strong>Skills and Training:</strong> Develop apprenticeship and training programs for VBPV installation
                          and maintenance</li>
                      <li><strong>Monitoring and Evaluation:</strong> Establish ongoing monitoring of VBPV agricultural productivity,
                          biodiversity outcomes, and grid performance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-left">
                    Why does the UK need to act now?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      The United Kingdom stands at a critical juncture. The decisions made in the next 6-12 months will determine
                      whether the nation locks in a 25-30 year pattern of expensive, land-intensive TMPV systems—or embraces a
                      transformative alternative that simultaneously delivers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><strong>Energy Security:</strong> 19-22% more annual generation with 129% more winter output</li>
                      <li><strong>Economic Efficiency:</strong> £161-187 billion in total system savings over 30 years</li>
                      <li><strong>Food Security:</strong> Continued agricultural production eliminates the false choice</li>
                      <li><strong>Nature Recovery:</strong> 3× bird abundance and 27,200-38,250 hectares of wildlife corridors</li>
                      <li><strong>Grid Stability:</strong> Generation profile naturally matches demand, reducing reliance on
                          fossil fuel peaker plants</li>
                    </ul>
                    <div className="bg-brand-light/10 border-2 border-brand-light-green p-6 rounded-lg">
                      <p className="text-lg font-semibold text-brand-navy">
                        The evidence is clear. The technology is proven. The benefits are overwhelming. The time to act is now.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
