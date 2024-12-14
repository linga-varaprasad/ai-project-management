import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Project Management",
    description: "Organize tasks and track progress effortlessly",
    image: "/placeholder.svg"
  },
  {
    title: "Team Collaboration",
    description: "Chat, video calls, and file sharing in one place",
    image: "/placeholder.svg"
  },
  {
    title: "Analytics Dashboard",
    description: "Visualize your team's performance with powerful analytics",
    image: "/placeholder.svg"
  }
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to SaaSFlow
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your all-in-one platform for project management, team collaboration, and productivity
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Carousel */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Discover Our Features
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="p-6 bg-card rounded-xl border text-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to boost your productivity?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teams already using SaaSFlow
          </p>
          <Button size="lg" asChild>
            <Link to="/register">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;