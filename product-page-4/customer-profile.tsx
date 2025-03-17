import { ArrowLeft, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CustomerProfile() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="font-semibold text-xl">CommBank iQ</div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Organisation name</span>
            <Button className="bg-[#ffcc00] text-black hover:bg-[#ffcc00]/90">Log off</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>

        <div className="flex justify-between items-start mb-6">
          <h1 className="text-xl font-semibold">Customer to win</h1>
          <Button variant="ghost" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>

        <Tabs defaultValue="marketing" className="mb-8">
          <TabsList>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="category">Category mix</TabsTrigger>
            <TabsTrigger value="buying">Buying team</TabsTrigger>
            <TabsTrigger value="store">Store manager</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="bg-muted/50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-8 max-w-[400px]">
            Hey, we are the customers that are shopping with your competitors!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Size of opportunity</div>
              <div className="text-4xl font-bold">$25M</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Number of people in opportunity</div>
              <div className="text-4xl font-bold">80K</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <div className="text-sm text-muted-foreground">We live</div>
                <CardTitle>In major cities</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-sm text-muted-foreground">We prefer</div>
                <CardTitle>Mainstream brands</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-sm text-muted-foreground">We spend</div>
                <CardTitle>$50 per transaction</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-semibold mb-4">Who we are</h3>
            <p className="text-muted-foreground">
              We are urban Australians who live through our smartphones. We use Uber for commutes (66%), and order lunch
              via Uber Eats. We shop for fitness gear at Rebel Sport (46%) and browse Uniqlo or Cotton On for fashion.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4">What resonates with us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Emphasise time-saving and convenience</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Highlight how your products and services can streamline our busy lives, targeting the 66% of us who
                  use ride-sharing services like Uber and frequently order through delivery apps.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Balance our healthy, active lifestyles</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Connect with our active lifestyles by offering quick, stylish solutions that work at the gym and
                  beyond, speaking to the 46% who blend fitness and socialising into our daily routine.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Focus on authentic, city lifestyle content</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Create content that captures authentic city life, resonating with the 71% who prefer digital-first
                  solutions like Uber Eats for their daily needs.
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4">Where to find us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Advertise in Inner West Sydney</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Because 35% of us live there, frequently shop with competitors for premium sports fashion products,
                  and have a higher disposable income.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Run Spotify advertisements</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Because 40% of us are active subscribers, with 70% of us being 18-24 year-olds who prioritise fashion,
                  and can be reached on our daily commute.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Invest in out-of-home</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  In shopping centres and train stations because 60% of us are young, affluent customers who spend
                  significant time in social and recreational activities.
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

