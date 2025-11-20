import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Mail,
  Phone,
  Calculator,
  FileText,
  MessageSquare
} from 'lucide-react';
import type { Metadata } from 'next';
import fs from 'fs/promises';
import path from 'path';

export const metadata: Metadata = {
  title: 'Contact Us | Harvesting the Sun Twice',
  description: 'Get in touch with our vertical solar experts. Free consultation, system design, and implementation support.',
};

type FaqItem = {
  question: string;
  answer: string;
};

export default async function ContactPage() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'faq.txt');
  const fileContent = await fs.readFile(dataPath, 'utf8');
  const faqItems: FaqItem[] = JSON.parse(fileContent);
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">
          Contact Us
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                Send a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Send us a message if you have any questions or would like to discuss this project further.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Questions/Enquiry</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your questions or enquiry regarding Harvesting the Sun Twice systems..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information & Quick Actions */}
        <div className="space-y-6">
          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-headline">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">harvesringthesuntwice@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+44 (0)20 1234 5678</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-headline">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Download Tech Specs
              </Button>
            </CardContent>
          </Card>


        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We have answers. Find the information you need about vertical solar.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-headline text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}