import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const App = () => {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-8">
      <Card className="max-w-md p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-slate">
              Bhavya Kandhari's Portfolio
            </h1>
            <p className="text-slate-muted">Shadcn UI components Check </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Tailwind</Badge>
        </div>

        <Button className="w-full">Get Started</Button>
      </Card>
    </div>
  );
};

export default App;
